import axios from 'axios';
export const masterFormSubmit = (values) => async (dispatch, getState) => {
  console.log('entered form submit in redux');
  //https://614eabfdb4f6d30017b482d2.mockapi.io/:endpoint

  try {
    dispatch({
      type: 'USER_SUBMIT_REQUEST',
    });
    // const config = {
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    // };

    const { data } = await axios.post(
      ' https://614eabfdb4f6d30017b482d2.mockapi.io/formData',
      values
    );
    console.log('formData', data);
    dispatch({
      type: 'USER_SUBMIT_SUCCESS',
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: 'USER_SUBMIT_FAIL',
      payload: error,
    });
  }

  // localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
};

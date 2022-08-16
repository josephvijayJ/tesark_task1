import axios from 'axios';
export const masterFormSubmit = () => async (dispatch, getState) => {
  console.log('entered form submit in redux');
  // const { data } = await axios.get(`/api/products/${id}`);
  // console.log(data);
  let data = 'form submitted successfully';
  let errData = 'form submission error';
  try {
    dispatch({
      type: 'USER_SUBMIT_REQUEST',
    });
    // const config = {
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    // };

    // const { data } = await axios.post(
    //   '/api/users/product',
    //   {},
    //   config
    // );
    dispatch({
      type: 'USER_SUBMIT_SUCCESS',
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: 'USER_SUBMIT_FAIL',
      payload: errData,
    });
  }

  // localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
};

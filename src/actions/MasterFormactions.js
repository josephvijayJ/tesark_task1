import axios from 'axios';
export const masterFormSubmit =
  (values, formData) => async (dispatch, getState) => {
    console.log('entered form submit in redux');

    try {
      dispatch({
        type: 'USER_SUBMIT_REQUEST',
      });
      const { data } = await axios.post(
        'http://localhost:8000/api/postdata',
        values
      );

      if (data.id) {
        const imgVal = await axios.post(
          `http://localhost:8000/api/upload/image/${data.id}`,
          formData
        );
      }

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
  };

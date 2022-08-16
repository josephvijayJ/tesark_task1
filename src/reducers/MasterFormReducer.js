export const MasterFormReducer = (state = {}, action) => {
  switch (action.type) {
    case 'USER_SUBMIT_REQUEST':
      return { loading: true };

    case 'USER_SUBMIT_SUCCESS':
      return { loading: false, userInfo: action.payload };

    case 'USER_SUBMIT_FAIL':
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

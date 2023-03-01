
export const Init = () => {
    return async dispatch => {
      const token = localStorage.getItem("infc_access");
        dispatch({
          type: 'LOGIN',
          payload: token,
        })
      // }
    }
  }
  
  export const Login_Function = (token) => {
    localStorage.setItem("infc_access", token);
    return async dispatch => {
      dispatch({
        type: 'LOGIN',
        payload: token,
      })
    }
  }

  export const Logout_Function = () => {
    localStorage.removeItem("infc_access");
    return async dispatch => {
      dispatch({
        type: 'LOGIN',
        payload: null,
      })
    }
  }
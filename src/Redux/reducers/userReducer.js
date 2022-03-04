import {
    USER_DETAILS_FAIL,
    USER_DETAILS_REQUEST,
    USER_DETAILS_RESET,
    USER_DETAILS_SUCCESS,
    USER_LIST_REQUEST,
    USER_LIST_SUCCESS,
    USER_LIST_FAIL,
    USER_LIST_RESET,
    USER_LOGIN_FAIL,
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    USER_LOGOUT,
    USER_FORGETPASSWORD_FAIL,
    USER_FORGETPASSWORD_REQUEST,
    USER_FORGETPASSWORD_SUCCESS,
    USER_RESETPASSWORD_FAIL,
    USER_RESETPASSWORD_REQUEST,
    USER_RESETPASSWORD_SUCCESS,
    USER_RESENDFORGOTPASSWORD_FAIL,
    USER_RESENDFORGOTPASSWORD_REQUEST,
    USER_RESENDFORGOTPASSWORD_SUCCESS,
    USER_REGISTER_FAIL,
    USER_REGISTER_REQUEST,
    USER_REGISTER_SUCCESS,
    USER_UPDATE_PROFILE_FAIL,
    USER_UPDATE_PROFILE_REQUEST,
    USER_UPDATE_PROFILE_SUCCESS,
    USER_UPDATE_PROFILE_RESET,
    USER_DELETE_REQUEST,
    USER_DELETE_SUCCESS,
    USER_DELETE_FAIL,
    USER_UPDATE_RESET,
    USER_UPDATE_REQUEST,
    USER_UPDATE_SUCCESS,
    USER_UPDATE_FAIL,
    USER_OTPVERIFY_REQUEST,
    USER_OTPVERIFY_SUCCESS,
    USER_OTPVERIFY_FAIL,
    USER_RESENDOTP_FAIL,
    USER_RESENDOTP_REQUEST,
    USER_RESENDOTP_SUCCESS,
  } from '../constants/userConstants'

  export const userLoginReducer = (state = {}, action) => {
    switch (action.type) {
      case USER_LOGIN_REQUEST:
        return { loading: true }
      case USER_LOGIN_SUCCESS:
        return { loading: false, userInfo: action.payload }
      case USER_LOGIN_FAIL:
        return { loading: false, error: action.payload }
      case USER_LOGOUT:
        return {}
      default:
        return state
    }
  }

//For ForgetPassword
export const userForGetPasswordReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_FORGETPASSWORD_REQUEST:
      return { loading: true }
    case USER_FORGETPASSWORD_SUCCESS:
      return { loading: false, userInfo: action.payload }
    case USER_FORGETPASSWORD_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}
//end of ForgetPassword

//For ResetPassword
export const userReSetPasswordReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_RESETPASSWORD_REQUEST:
      return { loading: true }
    case USER_RESETPASSWORD_SUCCESS:
      return { loading: false, userInfo: action.payload }
    case USER_RESETPASSWORD_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}
//END OF ResetPassword

//For resendforgotPasswordCode
export const userResendForgetPasswordReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_RESENDFORGOTPASSWORD_REQUEST:
      return { loading: true }
    case USER_RESENDFORGOTPASSWORD_SUCCESS:
      return { loading: false, userInfo: action.payload }
    case USER_RESENDFORGOTPASSWORD_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}
//End of resendforgotPasswordCode

// for Register 
  export const userRegisterReducer = (state = {}, action) => {
    switch (action.type) {
      case USER_REGISTER_REQUEST:
        return { loading: true }
      case USER_REGISTER_SUCCESS:
        return { loading: false, userInfo: action.payload }
      case USER_REGISTER_FAIL:
        return { loading: false, error: action.payload }
      default:
        return state
    }
  }
//end of register

//for OTPVerify
  export const userOTPVerifyReducer = (state = {}, action) => {
    switch (action.type) {
      case USER_OTPVERIFY_REQUEST:
        return { loading: true }
      case USER_OTPVERIFY_SUCCESS:
        return { loading: false, userInfo: action.payload }
      case USER_OTPVERIFY_FAIL:
        return { loading: false, error: action.payload }
      default:
        return state
    }
  }
//End of OTPVerify

//For ResendOTP
export const userResendOTPReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_RESENDOTP_REQUEST:
      return { loading: true }
    case USER_RESENDOTP_SUCCESS:
      return { loading: false, userInfo: action.payload }
    case USER_RESENDOTP_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}
//End Of ResendOTP

  export const userDetailsReducer = (state = { user: {} }, action) => {
    switch (action.type) {
      case USER_DETAILS_REQUEST:
        return { ...state, loading: true }
      case USER_DETAILS_SUCCESS:
        return { loading: false, user: action.payload }
      case USER_DETAILS_FAIL:
        return { loading: false, error: action.payload }
      case USER_DETAILS_RESET:
        return { user: {} }
      default:
        return state
    }
  }

  export const userUpdateProfileReducer = (state = {}, action) => {
    switch (action.type) {
      case USER_UPDATE_PROFILE_REQUEST:
        return { loading: true }
      case USER_UPDATE_PROFILE_SUCCESS:
        return { loading: false, success: true, userInfo: action.payload }
      case USER_UPDATE_PROFILE_FAIL:
        return { loading: false, error: action.payload }
      case USER_UPDATE_PROFILE_RESET:
        return {}  
      default:
        return state
    }
  }

  export const userListReducer = (state = { users: [] }, action) => {
    switch (action.type) {
      case USER_LIST_REQUEST:
        return { loading: true }
      case USER_LIST_SUCCESS:
        return { loading: false, users: action.payload }
      case USER_LIST_FAIL:
        return { loading: false, error: action.payload }
      case USER_LIST_RESET:
        return { users: [] }
      default:
        return state
    }
  }
  
  export const userDeleteReducer = (state = {}, action) => {
    switch (action.type) {
      case USER_DELETE_REQUEST:
        return { loading: true }
      case USER_DELETE_SUCCESS:
        return { loading: false, success: true }
      case USER_DELETE_FAIL:
        return { loading: false, error: action.payload }
      default:
        return state
    }
  }
  
  export const userUpdateReducer = (state = { user: {} }, action) => {
    switch (action.type) {
      case USER_UPDATE_REQUEST:
        return { loading: true }
      case USER_UPDATE_SUCCESS:
        return { loading: false, success: true }
      case USER_UPDATE_FAIL:
        return { loading: false, error: action.payload }
      case USER_UPDATE_RESET:
        return {
          user: {},
        }
      default:
        return state
    }
  }

  export const userLoadReducer = (state = { user: {} }, action) => {
    switch (action.type) {
      case 'USER_LOAD_REQUEST':
        return { loading: true }
      case "USER_LOADED":
        return { loading: false,user : action.payload}
      case 'USER_LOAD_FAIL':
        return { loading: false, error: action.payload }
      
      default:
        return state
    }
  }
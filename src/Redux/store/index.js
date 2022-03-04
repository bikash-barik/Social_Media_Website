import {createStore , combineReducers , applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import {postListReducer ,postDetailsReducer,postDeleteReducer,postCreateReducer,postUpdateReducer,postLikeReducer, addCommentReducer, deleteCommentReducer} from '../reducers/postReducer'
import { userLoginReducer , userRegisterReducer,userOTPVerifyReducer, userDetailsReducer , userUpdateProfileReducer, userDeleteReducer, userListReducer, userUpdateReducer,userLoadReducer} from '../reducers/userReducer'


const reducer = combineReducers({
//   getPosts : postListReducer,
//   getDetailPost : postDetailsReducer,
//   deletePost :postDeleteReducer,
//   postCreate: postCreateReducer,
//   postUpdate:postUpdateReducer,
//   likePost:postLikeReducer,
//    commentPost:addCommentReducer,
//    commentDeletePost:deleteCommentReducer,
    userLogin : userLoginReducer,
    userRegister : userRegisterReducer,
    userOTPVerify : userOTPVerifyReducer,
   //  userDetails: userDetailsReducer,
   //  userUpdateProfile: userUpdateProfileReducer,
   //  userLoaded : userLoadReducer
  

})


  const userInfoFromStorage = localStorage.getItem('userInfo')
  ? JSON.parse(localStorage.getItem('userInfo'))
  : null



const initialState = {
 
    userLogin: {userInfo : userInfoFromStorage}
}

const middleware = [thunk]

const store = createStore(
    reducer ,
     initialState ,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store
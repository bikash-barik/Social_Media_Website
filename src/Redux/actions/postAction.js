import {
POST_LIST_REQUEST,
POST_LIST_SUCCESS,
POST_LIST_FAIL,
POST_LIST_RESET,
 POST_DETAILS_SUCCESS,
 POST_DETAILS_FAIL,
 POST_DETAILS_REQUEST,
 POST_DELETE_REQUEST,
 POST_DELETE_SUCCESS,
 POST_DELETE_FAIL,
 POST_CREATE_SUCCESS,
 POST_CREATE_REQUEST,
 POST_CREATE_FAIL,
 POST_UPDATE_SUCCESS,
 POST_UPDATE_REQUEST,
 POST_UPDATE_FAIL,
 POST_LIKE_REQUEST,
 POST_LIKE_SUCCESS,
 POST_LIKE_FAIL,
 POST_UNLIKE_REQUEST,
 POST_UNLIKE_SUCCESS,
 POST_UNLIKE_FAIL,
 ADD_COMMENT,
 ADD_COMMENT_FAIL,
REMOVE_COMMENT,
DELETE_COMMENT_FAIL,
ADD_COMMENT_REQUEST,
REMOVE_COMMENT_REQUEST,
} from '../constants/postConstants'

import axios from 'axios'


export const allPosts = (keyword = '') => async (dispatch) => {
    try {
      dispatch({
        type: POST_LIST_REQUEST,
      })
  

      const { data } = await axios.get(`/api/post?keyword=${keyword}`)
  
      dispatch({
        type: POST_LIST_SUCCESS,
        payload: data,
      })
    } catch (error) {
      dispatch({
        type: POST_LIST_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      })
    }
  }

  export const PostDetails = (id) => async(dispatch) => {
    try {
        
        dispatch({ type : POST_DETAILS_REQUEST})

        const { data } = await axios.get(`/api/post/${id}`)

        dispatch({ 
            type : POST_DETAILS_SUCCESS,
            payload : data
        })


    } catch (error) {
         dispatch({
             type: POST_DETAILS_FAIL,
             payload : 
             error.response && error.response.data.message 
             ? error.response.data.message
             : error.message
         })
    }
}

// Delete post
export const deleteMyPost = id => async( dispatch,getState )=> {
  try {
      dispatch({ type : POST_DELETE_REQUEST})
      const {
        userLogin: { userInfo },
      } = getState()
  
      const config = {
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
        },
      }

    await axios.delete(`api/post/${id}`,config);

    dispatch({
      type: POST_DELETE_SUCCESS,
      
    });

 
  } catch (error) {
         dispatch({
             type: POST_DELETE_FAIL,
             payload : 
             error.response && error.response.data.message 
             ? error.response.data.message
             : error.message
         })
    }
};


  export const createPost = ({title,description,image} ) => async (dispatch, getState) => {
    try {
      dispatch({
        type: POST_CREATE_REQUEST,
      })
  
      const {
        userLogin: { userInfo },
      } = getState()
  
      const config = {
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
        },
      }
  
      const { data } = await axios.post(`/api/post/`,{title,description,image}, config)
  
      dispatch({
        type: POST_CREATE_SUCCESS,
        payload: data,
      })
    } catch (error) {
      dispatch({
        type: POST_CREATE_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      })
    }
  }

  export const updatePost = (post) => async (dispatch, getState) => {
    try {
      dispatch({
        type: POST_UPDATE_REQUEST,
      })
  
      const {
        userLogin: { userInfo },
      } = getState()
  
      const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${userInfo.token}`,
        },
      }
  
      const { data } = await axios.put(
        `/api/post/${post._id}`,
        post,
        config
      )
  
      dispatch({
        type: POST_UPDATE_SUCCESS,
        payload: data,
      })
    } catch (error) {
      dispatch({
        type: POST_UPDATE_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      })
    }
  }
 

  // Add like
// Add like
export const addLike = id => async dispatch => {
  try {
    const res = await axios.put(`api/post/like/${id}`);

    dispatch({
      type: POST_LIKE_SUCCESS,
      payload: { id, likes: res.data }
    });
  } catch (err) {
    dispatch({
      type: POST_LIKE_FAIL,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};



// Remove like
export const removeLike = id => async dispatch => {
  try {
    dispatch({
      type: POST_UNLIKE_REQUEST,
    })
    const res = await axios.put(`api/post/unlike/${id}`);

    dispatch({
      type:POST_UNLIKE_SUCCESS,
      payload: { id, likes: res.data }
    });
  } catch (err) {
    dispatch({
      type: POST_UNLIKE_FAIL,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};



export const addComments = (postId,formData) => async (
  dispatch,
  getState
) => {
  try {
  
    dispatch({
      type: ADD_COMMENT_REQUEST,
    })

    const {
      userLogin: { userInfo },
    } = getState()

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`,
      },
    }

    await axios.post(`/api/post/comment/${postId}`, formData, config)

    dispatch({
      type:ADD_COMMENT,
    })
  } catch (error) {
    dispatch({
      type: ADD_COMMENT_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}


//delete comment
export const deleteMyComment = (postId,commentId) => async( dispatch,getState )=> {
  try {
    dispatch({
      type: REMOVE_COMMENT_REQUEST,
    })
      const {
        userLogin: { userInfo },
      } = getState()
  
      const config = {
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
        },
      }

    await axios.delete(`/api/post/comment/${postId}/${commentId}`,config);

    dispatch({
      type: REMOVE_COMMENT,
      
    });
  } catch (error) {
    dispatch({
        type: DELETE_COMMENT_FAIL,
        payload : 
        error.response && error.response.data.message 
        ? error.response.data.message
        : error.message
    })
}
};
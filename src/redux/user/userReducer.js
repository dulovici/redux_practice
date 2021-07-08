import { FETCH_USERS_FAILURE, FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS } from "./userTypes";
import axios from "axios";
import { fetchUsersCucsess, FetchUsersFailure, fetchUsersRequest } from "./userActions";


const initialState = {
    loading: false,
    users: [],
    error: ''
}

const userReducer = (state = initialState, {type,payload}) => {
    if(type === FETCH_USERS_REQUEST) {
        return {
            ...state,
            loading: true
        }
    }
    if(type === FETCH_USERS_SUCCESS) {
        return {
            ...state,
            loading: false,
            users: payload,
            error: ''
        }
    }
    if(type === FETCH_USERS_FAILURE) {
        return {
            ...state,
            loading: false,
            users: [],
            error: payload
        }
    }


    return state;
}

export const fetchUsers = () => {
    return (dispatch) => {
        dispatch(fetchUsersRequest)
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                const users = response.data;
                dispatch(fetchUsersCucsess(users))
            })
            .catch(error => {
                const errorMsg = error.message
                dispatch(FetchUsersFailure(error))
            })
    }
}


export default userReducer;
import { LOGIN_FAIL, LOGIN_REQ, LOGIN_SUCCESS, LOGOUT_REQ } from "./ActionType"


const loginstate={
    timeLoading:false,
    timeError:false,
    userAuth:false,
    userReg:false,
    username:"",
    cardnumber:"",
    phoneNumber:"",
    email:"",
    bag:[]
}

export const loginReducer=(state=loginstate,{type,payload})=>{
    switch(type){
        case LOGIN_REQ:
            return{
                ...state, 
                timeLoading:true
            }
        case LOGIN_SUCCESS:
            return{
                ...state,
                timeLoading:false,
                userAuth:true,
                bag:payload.cart,
                username:payload.username,
                email:payload.email,
                cardnumber:payload.cardnumber,
                phoneNumber:payload.mobilenumber
            }
        case LOGIN_FAIL:
            return{
                ...state,
                timeError:true,
                timeLoading:false
            }
        case LOGOUT_REQ:
            return{
                ...state,
                userAuth:false
            }
        default:
            return state;
    }
}

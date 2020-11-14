import { LOGIN_SUCCESS } from '../actions/types';
import { LOGIN_ERROR  } from '../actions/types';
import { SIGNOUT_SUCCESS  } from '../actions/types';
import { SIGNUP_SUCCESS } from '../actions/types';
import { SIGNUP_ERROR } from '../actions/types';




const initialState={
     authError:null
}

const authReducer = (state = initialState ,action)=>{
    switch(action.type)
    {


        case LOGIN_ERROR:
            console.log('login error')
            return{
                     ...state,
                     authError:'login failed'
            }


        case LOGIN_SUCCESS:
            console.log('login success')
            return{
                     ...state,
                     authError:null
            }

            case SIGNOUT_SUCCESS:
                console.log('signout success');
                return state

           case SIGNUP_SUCCESS:

             console.log('signup success')

               return {
                       ...state,
                       authError:null
               }


               case SIGNUP_ERROR:
                    
                   console.log('signup error')

                   return {
                       ...state,
                       authError:action.err.message
                   }

            default:return state
    }
   
}

export default authReducer
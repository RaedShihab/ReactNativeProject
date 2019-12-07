// const initialState = {
//             userName : 'raed',
//             password: '111',
//         }
import {login_attemp} from '../actions/types';
const initialState = [
    {name: 'raed'},{password: '111'}
]
const authReducer = (state = initialState, action)=> {
     let newState = [];
    switch(action.type) {
        case(login_attemp):
         newState = [...state, {name : action.userName},{password: action.password}]
         console.log('from reducer', newState)
        return newState;
      default: 
      return state;
    }
}

export default authReducer
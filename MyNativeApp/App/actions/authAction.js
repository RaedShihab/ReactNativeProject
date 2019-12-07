import {login_attemp} from './types';

const loginUser = (userName, password)=> {    
   const info = {
        type: login_attemp,
        userName,
        password
    }
    return info;

}

export {loginUser};
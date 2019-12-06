
const loginUser = (userName, password)=> {
    return {
        type: 'login',
        userName,
        password
    }
}

export {loginUser};
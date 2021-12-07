export const startLoading = () => ({type: 'LOADING_START'})

export const stopLoading = () => ({type: 'LOADED'})

export const addUser = (body) => {
    return {type: 'USER_ADD', data: body}
}

export const removeUser = (body) => {
    return {type: 'USER_REMOVE', data: body}
}

export const updateUsers = (body) => {
    return {type: 'USERS_UPDATE', data: body}
}

export const updateUser = (body) => {
    return {type: 'USER_UPDATE', data: body}
}

export const uploadUser = (body) => {
    return {type: 'USER_UPLOAD', data: body}
}

export const updateUserInfo = (label, id, value) => {
    return {type: 'USER_INFO_UPDATE', label, id, value}
}





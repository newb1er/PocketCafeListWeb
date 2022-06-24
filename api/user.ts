import api from './'

export function getUserInfo(userId) {
    return api.get(`/user/${userId}`)
}
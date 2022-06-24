import api from './'

export function getSavedList(userId: string){
    return api.get(`/list/${userId}`)
}
import { kanguruApi } from "./api"

export interface PutUserProps{
    username: string
    email: string
    applicationId: string
}

export interface GetUserProps {  
    username: string
    email: string
    applicationId: string
    createdAt: string
    updatedAt: string
    objectId: string 
}

export interface GetCurrentUserProps {
  username: string
  myCustomKeyName: string
  createdAt: string
  updatedAt: string
  objectId: string
  sessionToken: string
}

export const getCurrentUser = (token: string) => {

    return kanguruApi.get('/users/me', { headers: { 'X-Parse-Session-Token': token }} )
}

export const getUsuario = (id: string) => {

    return kanguruApi.get(`/users/${id}`)
}


export const putUsuario = (token: string, user: PutUserProps) => {

    return kanguruApi.put('/users', user, { headers: { 'X-Parse-Session-Token': token }} )
}
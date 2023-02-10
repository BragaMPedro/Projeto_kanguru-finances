import { kanguruApi } from "./api"

export interface UserLoginResponse {
    objectId: string
    username: string
    createdAt: string
    updatedAt: string
    sessionToken: string
}

export const logIn = (username: string, password: string) => {

   return kanguruApi.get(`/login`, { 
        headers: { "X-Parse-Revocable-Session": 1 }, 
        params: { 
            'username': username,
            'password': password, 
        },
    })
}

export const verificarEmail = (email: string) => {

    return kanguruApi.post('/verificationEmailRequest', { 'email': email } )
}

export const passwordResetRequest = (email: string) => {

    return kanguruApi.post('/requestPasswordReset', { 'email': email } )
}
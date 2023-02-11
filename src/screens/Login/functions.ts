import { logIn } from "../../services/AuthService"


export const FunctionsLogin = () => {

    function fazerLogin(username: string, password: string){
        logIn(username, password)
        .then(res=>{
            console.log(res.data)
        })
        .catch(err=>{
            console.log(err)
        })
    };

    return{
        fazerLogin
    }
}
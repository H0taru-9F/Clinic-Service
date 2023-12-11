import axios from 'axios';
import {LOCALSTORE_USER} from "../data/constants";
const LoginUser = async (email, password) => {
    window.localStorage.clear()
    try {
        const resp = await axios.post('http://localhost:8081/api/v1/auth/signin', {
            email: email,
            password: password
        })
        const token = resp.data.accessToken
        // console.log(token)
        const user = {
            email: email,
            password: password,
            token: token
        }
        // localStorage.setItem(LOCALSTORE_USER, JSON.stringify(user))
        console.log(user)
        window.localStorage.setItem(LOCALSTORE_USER, JSON.stringify(user))
        window.location.href = '/account';
    } catch (err) {
        console.error(err.message);
    }
}
export default LoginUser;
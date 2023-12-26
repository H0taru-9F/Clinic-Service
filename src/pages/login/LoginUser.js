import axios from 'axios';
import {LOCALSTORE_USER} from "../../data/constants";
const LoginUser = async (email, password) => {
    window.localStorage.clear()
    try {
        const resp = await axios.post('http://localhost:8765/sender-service/api/v1/auth/signin', {
            email: email,
            password: password
        })
        const token = resp.data.accessToken
        // console.log(token)
        const codedPass = (password) => {
            const length = password.length;
            return '*'.repeat(length);
        };
        const stars = codedPass(password)
        const user = {
            email: email,
            password: stars,
            token: token
        }

        console.log(user)
        window.localStorage.setItem(LOCALSTORE_USER, JSON.stringify(user))
        window.location.href = '/account';
    } catch (err) {
        console.error(err.message);
    }
}
export default LoginUser;
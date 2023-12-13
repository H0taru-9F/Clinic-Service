import {LOCALSTORE_USER} from "../data/constants";

const UnpackingUser = () => {
    const storedData = window.localStorage.getItem(LOCALSTORE_USER)

    if (storedData){
        try {
            const userData = JSON.parse(storedData);
            const { email, password, token } = userData;
            const codedPass = (password) => {
                const length = password.lenght;
                return '*'.repeat(length)
            }
            const stars = codedPass(password)
            return { email, password, token, stars };
        }catch (err){
            console.log('локальне сховище',window.localStorage.getItem(LOCALSTORE_USER))
            console.error('Помилка при розпаковці даних користувача з локального сховища:', err);
        }

    }
    return { email: 'даних немає', password: 'даних немає', token: null };
}
export default UnpackingUser;
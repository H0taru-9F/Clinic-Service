import React from "react";
import {ButtonV2} from "../components/ButtonsComponent";
import axios from "axios";
import UnpackingUser from "../utils/UnpackingUser";
const TestSendToServer = () => {

    const email = 'ivan@example.com'
    const password = '2222'
    const url = 'http://localhost:8081/api/v1/auth/signin'
    let token;
    // token.accessToken = undefined;

    const localToken = () => {
      const {token, email, password} = UnpackingUser()
        console.log(token, email, password)
    }

    const checkTwo = async () => {
        try {
            const resp = await axios.post(url,{
                    email: email,
                    password : password
            })
            console.log('email:', email);
            console.log('password:', password);

            console.log('Отримані дані з POST-запиту:', token=resp.data.accessToken);

        } catch (error) {
            console.error('Error during fetch:', error);
        }
    };

    const checkFour = async () => {
        try {
            const response = await fetch('http://localhost:8081/api/v1/Rocket/branch/all', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: 'Bearer ' + token.accessToken
                }
            });
            if (response.ok) {
                const data = await response.json();
                console.log('Data received:', data);
            } else {
                console.error('Request failed with status:', response.status);
            }
        } catch (error) {
            console.error('Error during fetch:', error);
        }
    }
    return(
        <div>
            <ButtonV2 title='check2 no-cors' onClick={checkTwo}/>
            <ButtonV2 title='check4 nothing' onClick={checkFour}/>
            <ButtonV2 title='check4 localstorage' onClick={localToken}/>
        </div>
    )
}
export default TestSendToServer;
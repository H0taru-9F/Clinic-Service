import React from "react";
import {ButtonV2} from "../components/CustomButtons";

const TestSendToServer = () => {
    const checkOne = async () => {
        try {
            const response = await fetch('http://localhost:8081/api/v1/auth/signin', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: 'ivan@example.com',
                    password: '2222'
                }),
                mode: 'cors',
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
    };
    const checkTwo = async () => {
        try {
            const response = await fetch('http://localhost:8081/api/v1/auth/signin', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: 'ivan@example.com',
                    password: '2222'
                }),
                mode: 'no-cors',
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

    const checkFour = async () => {
        try {
            const response = await fetch('http://localhost:8081/api/v1/auth/signin', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: 'ivan@example.com',
                    password: '2222'
                }),
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
            <ButtonV2 title='check1 cors' onClick={checkOne}/>
            <ButtonV2 title='check2 no-cors' onClick={checkTwo}/>
            <ButtonV2 title='check4 nothing' onClick={checkFour}/>
        </div>
    )
}
export default TestSendToServer;
import React, { useState } from 'react';
import './styles/signUp.css';
import { Form } from "react-bootstrap";
import Input from "../components/Input";
import { ButtonV2 } from "../components/CustomButtons";

const SignUp =() => {
    const onClick = () => {
        alert('ERRRROR');
    };
    const [showPassword, setShowPassword] = useState(false);
    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    return(
        <div className="SignUp">
            <div className='SignUp-Form bg-light50'>
                <h3 className='Card-title tx-green Caption'><b>Реєстрація</b></h3>
                <div className='SignUp-input-group'>
                    <div className='SignUp-inp1'>
                        <Input width={320} type='text' placeholder='Ім`я'/>
                        <Input width={320} type='text' placeholder='Прізвище'/>
                        <Input width={320} type='text' placeholder='По батькові'/>
                    </div>
                    <div className='SignUp-inp2'>
                        <Input width={320} type='email' placeholder='Пошта'/>
                        <Input width={320} type={showPassword ? 'text' : 'password'} placeholder='Пароль'/>
                        <Input width={320} type='password' placeholder='Повторіть пароль'/>
                        <Form>
                            <Form.Check className='checkbox' type='checkbox' >
                                <Form.Check.Input  type='checkbox' isValid onChange={toggleShowPassword}/>
                                <Form.Check.Label className='Small'>Показати пароль</Form.Check.Label>
                            </Form.Check>
                        </Form>
                    </div>
                </div>
                <div className='SignUp-button-container'>
                    <ButtonV2 onClick={onClick} title='Продовжити' width={320}/>
                    <a className='link tx-green Button-text-link-2' href='/logIn'>є акаунту</a>
                </div>
            </div>
        </div>
    );
};
export default SignUp;
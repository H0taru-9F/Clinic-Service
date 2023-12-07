import React, {useState} from "react";
import './styles/account.css';
import Header from "../components/Header";
import Footer from "../components/Footer";
import { ButtonSmallLink} from "../components/CustomButtons";
import Dropzone from "../components/CustomDropzone";

const Account = () => {
    const AccountPers=(
        <div className='Account-inf-pers '>
            <div className='Account-inf-pers-first-block Body2'>
                <div className='Account-inf-pers-first-block-dynamic'>
                    <p style={{ marginBottom: '6px' }}>Бандера</p>
                    <p style={{ marginBottom: '6px' }}>Степан</p>
                    <p style={{ marginBottom: '6px' }}>Андрійович</p>
                </div>
                <div className='Account-inf-pers-first-block-state tx-green'>
                    <p style={{ marginBottom: '6px' }}>Прізвище</p>
                    <p style={{ marginBottom: '6px' }}>Ім'я</p>
                    <p style={{ marginBottom: '6px' }}>По батькові</p>
                </div>
            </div>
            <div style={{
                borderTop: '1.5px solid black',
                marginTop: '16px',
                borderColor: '#23AB7D',
                width: '445px'
            }}/>
            <div className='Account-inf-pers-second-block'>
                <div className='Account-inf-pers-second-block-dynamic bg-white Body'>
                    <p>заміна хребта,9:20,І.П. Прізвище,078 </p>
                </div>
                <div className='Account-inf-pers-second-block-state tx-green Body2'>
                    <h>Направлення в кабінет</h>
                </div>
            </div>
            <button className='Account-inf-pers-button Button-text-link-2'>Зберегти</button>
        </div>
    );
    const AccountOffset = (
        <div className='Account-inf-offset'>
            <div className='Account-inf-offset-first-block Body2'>
                <div className='Account-inf-offset-first-block-data'>
                    <p>Так</p>
                    <ButtonSmallLink title='Вибрати файл'/>
                </div>
                    <div className='Account-inf-offset-second-block-title Body2 tx-green'>
                        <p>Дані страхової</p>
                    </div>
            </div>
            <div className='Account-inf-offset-third-block'>
                <Dropzone/>
            </div>
            <button className='Account-inf-offset-button Button-text-link-2'>Зберегти</button>
        </div>
    );
    const AccountData = (
        <div className='Account-inf-data'>
            <div className='Account-inf-data-first-block Body2'>
                <div className='Account-inf-data-first-block-data tx-black'>
                    <p>feniak2003@gmail.com</p>
                    <p>***************</p>
                </div>
                <div className='Account-inf-data-first-block-description tx-green'>
                    <p>Пошта</p>
                    <p>Пароль</p>
                </div>
            </div>
            <div style={{
                borderTop: '1.5px solid black',
                marginBottom: '19px',
                borderColor: '#23AB7D'
            }} />
            <div className='Account-inf-data-second-block'>
                <ButtonSmallLink title='Вийти' onClick={() =>{localStorage.clear(); window.location.reload();}}/>
            </div>
        </div>
    );
    const [AccountPage, setAccountPage] = useState(AccountPers)

    return(
        <div className='Account'>
            <Header/>
            <div className='Account-block'>
                <div className=' Account-nav'>
                    <button className='Account-nav-button Button-text-link-1' onClick={() => setAccountPage(AccountPers)}>Особистий кабінет</button>
                    <button className='Account-nav-button Button-text-link-1' onClick={() => setAccountPage(AccountOffset)}>Страховка</button>
                    <button className='Account-nav-button Button-text-link-1' onClick={() => setAccountPage(AccountData)}>Дані аккаунту</button>
                    <a className='Account-nav-button-link Button-text-link-1' href='/patients' >Пацієнти</a>
                </div>
                <div className='Account-inf bg-lightF'>
                    {AccountPage}
                </div>
            </div>
            <Footer/>
        </div>
    )
}
export default Account;
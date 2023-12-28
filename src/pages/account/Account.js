import React, {useState, useEffect} from "react";
import './account.css';
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { ButtonSmallLink} from "../../components/ButtonsComponent";
import Dropzone from "../../components/DropzoneComponent";
import UnpackingUser from "../../utils/UnpackingUser";
import useFetch from "../../hooks/useFetch";
import unpackingUser from "../../utils/UnpackingUser";


const Account = () => {
    const [accesDoctor, setAccesDoctor] = useState(null)
    const {data, loading, error} = useFetch('/v1/Rocket/account')

    const {position} = unpackingUser
    useEffect(() => {
        if (data) {
            setAccountPage(AccountPers)
        }
    }, [data]);

    const {email, password} = UnpackingUser()
    console.log('useFetch data', data, loading, error)
const patients = (
    <button className='Account-nav-button Button-text-link-1' onClick={() => setAccountPage(AccountOffset)}>Страховка</button>
)
    if (position === 'patient'){
        setAccesDoctor(patients)
    }else if (position === 'doctor'){
        setAccesDoctor(null)
    }

    const AccountPers=(
        <div className='Account-inf-pers '>
            <div className='Account-inf-pers-first-block Body2'>
                {loading ?
                    <p className='Account-inf-pers-first-block-dynamic'>Завантаження...</p>
                    :
                    <div className='Account-inf-pers-first-block-dynamic'>
                        <p style={{ marginBottom: '6px' }}>{data?.surname}</p>
                        <p style={{ marginBottom: '6px' }}>{data?.name}</p>
                        <p style={{ marginBottom: '6px' }}>{data?.fatherName}</p>
                    </div>
                }
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
            <div className='Account-inf-data-first-block Body2'>
                {loading ?
                    <p className='Account-inf-data-first-block-data tx-black'>Завантаження...</p>
                    :
                    <div className='Account-inf-data-first-block-data tx-black'>
                        <p>{email}</p>
                        <p>{password}</p>
                    </div>
                }
                <div className='Account-inf-data-first-block-description tx-green'>
                    <p>Пошта</p>
                    <p>Пароль</p>
                </div>
            </div>
            <div className='Account-inf-data-second-block'>
                <ButtonSmallLink title='Вийти' onClick={() =>{window.localStorage.clear(); window.location.reload();}}/>
            </div>

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
                <p>{
                    data?.apointments.map(item => {
                        return(
                            <div>
                                <p>{item.apointmentName}</p>
                                <p>{item.apointmentTime}</p>
                                <p>{item.office}</p>
                            </div>
                        )
                    })
                }</p>
            </div>
            <div style={{
                borderTop: '1.5px solid black',
                marginBottom: '19px',
                borderColor: '#23AB7D'
            }} />
            <div className='Account-inf-data-second-block'>
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
                    {accesDoctor}
                    <button className='Account-nav-button Button-text-link-1' onClick={() => setAccountPage(AccountData)}>Дані аккаунту</button>
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
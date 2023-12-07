import React from "react";
import './styles/schedule.css';
import Header from "../components/Header";
import Footer from "../components/Footer";
import CustomDropdown from "../components/CustomDropdown";
import date from '../data/date.json';
import doctor from '../data/doctors.json';
import {ButtonV2} from "../components/CustomButtons";
const Schedule = () => {
    const postData2 = async () => {
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
                mode: 'щ',
             });

            const data = await response.json();
            console.log('Отримані дані з POST-запиту:', data);
        } catch (error) {
            console.error('Помилка при виконанні POST-запиту:', error);
        }
    };

    return(
        <div className='Schedule bg-white'>
            <Header/>
            <div className='Schedule-first-block'>
                <div className='Schedule-first-block-blur bg-darkBlue70'>
                    <h2 className='Display-1 tx-white'>Розклад</h2>
                </div>
            </div>
            <div className='Schedule-second-block'>
                <div className='Schedule-second-block-bg bg-lightF'>
                    <div className='Schedule-second-block-search'>
                        <div className='Schedule-second-block-search-1'>
                            <CustomDropdown Toggle='Виберіть дату' Item={date.dates} />
                        </div>
                        <div className='Schedule-second-block-search-2'>
                            <CustomDropdown
                                Toggle='Виберіть лікаря'
                                Item={doctor.doctors}
                                onItemSelected={(selectedItem) => {
                                    alert('You are select ' + selectedItem);
                                }}
                            />
                        </div>
                    </div>
                    <div style={{
                        borderTop: '1.5px solid black',
                        marginTop: '54px',
                        borderColor: '#23AB7D'
                    }} />
                    <ButtonV2 title='Testing2' onClick={postData2}/>
                    {/*<ButtonV2 title='Testing1' onClick={postData1}/>*/}
                </div>
            </div>
            <Footer/>
        </div>
    );
};
export default Schedule;
import React from "react";
import './schedule.css';
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import DropdownComponent from "../../components/DropdownComponent";
import date from '../../data/date.json';
import doctor from '../../data/doctors.json';
// import {ButtonV2} from "../components/CustomButtons";
const Schedule = () => {
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
                            <DropdownComponent Toggle='Виберіть дату' Item={date.dates} />
                        </div>
                        <div className='Schedule-second-block-search-2'>
                            <DropdownComponent
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
                </div>
            </div>
            <Footer/>
        </div>
    );
};
export default Schedule;
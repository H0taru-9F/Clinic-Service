import React, {useEffect, useState} from "react";
import './schedule.css';
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import DropdownComponent from "../../components/DropdownComponent";
import date from '../../data/date.json';
import useFetch from "../../hooks/useFetch";
import usePostRequest from "../../hooks/usePostRequest";
import tested from '../../data/tested.json';
// import {ButtonV2} from "../components/CustomButtons";
const Schedule = () => {
    const [selectDate, setSelectDate] = useState('')
    const {data, loading, error} = useFetch('/api/v1/Clinic-name/schedule/byDay')

    useEffect(() => {
        if (loading){

        }
    }, [loading]);

    // const {data:reqData, loading:reqLoading, error:reqError, postData} = usePostRequest('/')

    // const handlePostData = async () => {
    //     console.log(selectDate)
    //     await postData({
    //         date: selectDate
    //     })
    // }

    // useEffect(() => {
    //     handlePostData();
    // }, [selectDate]);
    //
    // console.log('Request data', reqData, reqLoading, reqError)

    // const GroupedSchedule = () => {
    //     const groupedData = data.reduce((acc, item) => {
    //         const dayOfWeek = item.dayOfWeek;
    //
    //         if (!acc[dayOfWeek]) {
    //             acc[dayOfWeek] = [];
    //         }
    //
    //         acc[dayOfWeek].push(item);
    //
    //         return acc;
    //     }, {});

    const groupedData = data?.reduce((acc, item) => {
        const dayOfWeek = item.dayOfWeek;
        const office = item.office;

        acc[dayOfWeek] = acc[dayOfWeek] || { offices: {} };
        acc[dayOfWeek].offices[office] = acc[dayOfWeek].offices[office] || [];
        acc[dayOfWeek].offices[office].push(item);

        return acc;
    }, {});

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
                            <DropdownComponent
                                Toggle='Виберіть дату'
                                Item={date.dates}
                                onItemSelected={(selectedItemDate) => {
                                    console.log('You are select ' + setSelectDate(selectedItemDate));
                                }}
                            />
                        </div>
                    </div>
                    <div style={{
                        borderTop: '1.5px solid black',
                        marginTop: '54px',
                        borderColor: '#23AB7D'
                    }} />
                    <div className='Schedule-container'>
                        {Object.entries(groupedData).map(([dayOfWeek, { offices }]) => (
                            <div key={dayOfWeek}>
                                <div className='Schedule-container-title tx-black '>
                                    <p className='Caption'>{dayOfWeek}</p>
                                </div>
                                {Object.entries(offices).map(([office, appointments]) => (
                                    <div key={office}>
                                        <div className='Schedule-container-title tx-black '>
                                            <p className='offices Body'>Кабінет {office}</p>
                                        </div>
                                        <ul>
                                            {appointments.map((appointment) => (
                                                <div className='container-inf Body2' key={appointment.id}>
                                                    <p className='time tx-green'>Години прийому</p>
                                                    <p>{appointment.appointmentTime}</p>
                                                    <p className='doctor tx-green'>Лікар</p>
                                                    <p>{appointment.doctor.doctorName}</p>
                                                </div>
                                            ))}
                                        </ul>

                                        <div style={{
                                    borderTop: '1.5px solid black',
                                    marginTop: '54px',
                                    borderColor: '#23AB7D'
                                }} />
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>


                </div>
            </div>
            <Footer/>
        </div>
    );
};
export default Schedule;
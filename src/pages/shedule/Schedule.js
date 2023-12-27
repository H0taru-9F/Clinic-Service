import React, {useEffect, useState} from "react";
import './schedule.css';
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import DropdownComponent from "../../components/DropdownComponent";
import date from '../../data/date.json';
import useFetch from "../../hooks/useFetch";
import usePostRequest from "../../hooks/usePostRequest";
// import ContactUs from "../../components/ContauctUs";
// import {ButtonV2} from "../components/CustomButtons";
const Schedule = () => {
    const [selectDate, setSelectDate] = useState('')
    // const [selectDoctor, setSelectDoctor] = useState('')
    const {data, loading, error} = useFetch('/api/v1/Clinic-name/schedule/byDay')

    useEffect(() => {
        if (loading){

        }
    }, [loading]);

    const {data:reqData, loading:reqLoading, error:reqError, postData} = usePostRequest('/')

    const handlePostData = async () => {
        console.log(selectDate)
        await postData({
            date: selectDate
        })
        // if (selectDate && selectDoctor) {
        //     await postData({ date: selectDate, doctor: selectDoctor });
        // } else if (selectDate) {
        //     await postData({ date: selectDate });
        // } else if (selectDoctor) {
        //     await postData({ doctor: selectDoctor });
        // }
    }

    useEffect(() => {
        handlePostData();
    }, [selectDate]);

    console.log('Request data', reqData, reqLoading, reqError)
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
                        {/*<div className='Schedule-second-block-search-2'>*/}
                        {/*    <DropdownComponent*/}
                        {/*        Toggle='Виберіть лікаря'*/}
                        {/*        Item={doctor.doctors}*/}
                        {/*        onItemSelected={(selectedItemDoctor) => {*/}
                        {/*            alert('You are select ' + setSelectDoctor(selectedItemDoctor));*/}
                        {/*        }}*/}
                        {/*    />*/}
                        {/*</div>*/}
                    </div>
                    <div style={{
                        borderTop: '1.5px solid black',
                        marginTop: '54px',
                        borderColor: '#23AB7D'
                    }} />

                    {/*<div className='Schedule-container'>*/}
                    {/*    {reqData?.map(item => {*/}
                    {/*        return(*/}
                    {/*            <ContactUs key={item.id} card={item}/>*/}
                    {/*        );*/}
                    {/*    })}*/}
                    {/*</div>*/}

                </div>
            </div>
            <Footer/>
        </div>
    );
};
export default Schedule;
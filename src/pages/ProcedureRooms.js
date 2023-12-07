import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import './styles/procedureRooms.css';
import doctor from '../data/doctors.json';
import procedure from '../data/procedure.json';
import CustomDropdown from "../components/CustomDropdown";

const ProcedureRooms = () => {
    return(
        <div className='ProcedureRooms bg-white'>
            <Header/>
            <div className='ProcedureRooms-first-block'>
                <div className='ProcedureRooms-first-block-blur bg-darkBlue70'>
                    <h2 className='Display-1 tx-white'>Розклад процедур</h2>
                </div>
            </div>
            <div className='ProcedureRooms-second-block'>
                <div className='ProcedureRooms-second-block-bg bg-lightF'>
                    <div className='ProcedureRooms-second-block-search'>
                        <div className='ProcedureRooms-second-block-search-1'>
                            <CustomDropdown Toggle='Виберіть процедуру' Item={procedure.procedure}/>
                        </div>
                        <div className='ProcedureRooms-second-block-search-2'>
                            <CustomDropdown Toggle='Виберіть лікаря' Item={doctor.doctors}/>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}
export default ProcedureRooms;
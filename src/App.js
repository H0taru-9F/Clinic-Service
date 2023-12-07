import { Routes ,Route } from 'react-router-dom';
import React from "react";
import Home from "./pages/Home";
import LogIn from "./pages/LogIn";
import SignUp from "./pages/SignUp";
import Account from "./pages/Account";
import Schedule from "./pages/Schedule";
import ProcedureRooms from "./pages/ProcedureRooms";
import Patients from "./pages/Patients";
import TestSendToServer from "./pages/TestSendToServer";

function App() {
  return (

    <div className="App" style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column'
    }
    }>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/logIn' element={<LogIn/>}/>
            <Route path='/signUp' element={<SignUp/>}/>
            <Route path='/account' element={<Account/>}/>
            <Route path='/schedule' element={<Schedule/>}/>
            <Route path='/procedureRooms' element={<ProcedureRooms/>}/>
            <Route path='/patients' element={<Patients/>}/>

            <Route path='/testServ' element={<TestSendToServer/>}/>
        </Routes>
    </div>
  );
}

export default App;

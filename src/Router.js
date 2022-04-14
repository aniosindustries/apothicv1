import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import Register from './components/Register';
import PatientSurvey from './components/PatientSurvey';
import App from './App';
import Header from './components/misc/misc/Header';

export default function Router() {
    return(
        <BrowserRouter>
        <Header/>
        <Routes>
            <Route exact path="/" element={<App />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="./components/PatientSurvey" element={<PatientSurvey />} />
        </Routes>
        </BrowserRouter>
    )
}
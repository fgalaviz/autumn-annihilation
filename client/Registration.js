import React from 'react'
import ReactDOM from 'react-dom'
import NavBar from './components/NavBar'
import RegistrationForm from './components/RegistrationForm'
import Footer from './components/Footer'

const Registration = () => (
    <div id="registration-page">
        <NavBar/>
        <RegistrationForm/>
        <Footer color="#1E807F"/>
    </div>
);

ReactDOM.render(<Registration/>, document.getElementById('root'));

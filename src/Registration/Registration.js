import React from 'react'
import './Registration.css'

export default function Registration () {
    return(
    <div>
        <div className = 'logo'>
               <div className = 'rectangle-logo'>
                   <p>carRate</p>
               </div>
        <div className = 'registration-input-wrapper'>
            <div>
                <input className = 'registration-input' type = 'text' placeholder = 'Номер телефона' name = 'phoneNumber'></input>
                <br></br>
                <a href = '/fill-profile'><button className = 'sign-in-button'>Войти</button></a>
            </div>
        </div>
        </div>
    </div>
    )
}
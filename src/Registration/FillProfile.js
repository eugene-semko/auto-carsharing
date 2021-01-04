import React from 'react'
import './FillProfile.css'
export default function FillProfile () {
    return (
        <div>
            <div className = 'fill-profile-wrapper'>
                <div className = 'fill-profile-text' >
                    Заполните профиль
                </div>
                <input type = 'text' placeholder = 'Имя' name = 'name'/>
                <input type = 'text' placeholder = 'Дата рождения' name = 'birthDate'/>
                <input type = 'text' placeholder = 'Никнейм на сайте' name = 'nickname'/>
                <input type = 'text' placeholder = 'Город' name = 'accountCity'/>
                <a href = '/profile'>
                    <button className = 'sign-in-button'>
                        Продолжить
                    </button>
                </a>
            </div>
        </div>
    )
}
import React, { useState } from 'react'
import './add-review.css'
import classNames from 'classnames'

export default function AddReview() {
    return (
        <div>
            <div className = 'wrapper'>
                <div className = 'car-model-input'>
                    <input placeholder = 'Марка и модель автомобиля' type = 'text' name = 'car-model'></input>
                </div>
                <div className = 'car-federal-number'>
                    <input placeholder = 'Государственный номер' type = 'text' name = 'car-number'></input>
                </div>
                <div className = 'carsharing-name'>
                    <input placeholder = 'Сеть каршеринга' type = 'text' name = 'carsharing-name'></input>
                </div>
                
                <div className = 'review'>
                    <input placeholder = 'Отзыв' type = 'text' name = 'review'></input>
                </div>
                <div className = 'add-file'>
                    <input type='file' name='file' multiple accept='image/*,image/jpeg'></input>
                </div>
                <div className = 'rating'>
                    Оценка:
                    <input type = 'range' min = '1' max = '5' name = 'rating'></input>
                </div>
                <div className = 'send-review'>
                    <input type = 'submit' value = 'Отправить отзыв'></input>
                </div>
            </div>

        </div>
    )
}
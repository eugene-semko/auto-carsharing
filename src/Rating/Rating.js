import React from 'react'
import './Rating.css'

export default function Rating () {
    const peoples = [
        {id : 1, name: 'Евгений Семко', rating: '+163', reviews: '16'},
        {id : 2, name: 'Иван Петров', rating: '+133', reviews: '13'},
        {id : 3, name: 'Петр Иванов', rating: '+123', reviews: '12'},
        {id : 4, name: 'Даниил Удочкин', rating: '+113', reviews: '15'},
        {id : 5, name: 'Удочка Данила', rating: '+103', reviews: '17'}
    ]
    return (
        <div>
            <div className = 'top-wrapper'>
                <div className = 'rating-top-text'>Рейтинг пользователей</div>
            </div>
            <div className = 'rating-wrapper'>
                {peoples.map(item => {
                    return (
                        <div className = 'people-rating'>
                            <img className = 'profile-image' src = './profile-images/profile-image.jpg'></img>
                            <div className = 'text-profile-wrapper'>
                                {item.name}
                                <br/>
                                Рейтинг: {item.rating}
                                <br/>
                                Отзывов: {item.reviews}
                                
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
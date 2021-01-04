import React, { useState } from 'react'
import './filter-styles.css'
import classNames from 'classnames'


export default function CarsReview () {
    
    const cities = [
        'Москва и МО',
        'Санкт-Петербург'
    ]
    const carsharings = [
        'Яндекс.Драйв',
        'YouDrive',
        'BelkaCar',
        'Делимобиль',
        'Карусель',
        'Rentmee',
        'Carenda',
        'Lifcar',
        'Anytime prime'

    ]
    const volkswagen = {
        golf: ['./cars-images/volkswagen-golf.png', 'Volkswagen Golf'],
        number: ['а001уф777', 'а002уф777'],
        reviews: 12,
        mark: '4.4/5'
    }
    const reviews = [
        {id: 1, review: ''}
    ]

    const [isLocationActive, setIsLocationActive] = useState(false)
    const toggleLocationClass = () => setIsLocationActive(!isLocationActive)

    const [currentCity, setCurrentCity] = useState(cities[0])

    const [currentCarsharing, setCurrentCarsharing] = useState(carsharings[0])
    const [isCarsharingActive, setIsCarsharingActive] = useState(false)
    
    const toggleCarsharingClass = () => setIsCarsharingActive(!isCarsharingActive)
    
    const locationClass = classNames({
        'location': true,
        'location--active': isLocationActive
    })
    const rectangleLocationClass = classNames({
        'rectangle': true,
        'rectangle--active': isLocationActive
    })
    const cityListClass = classNames({
        'city-list': true,
        'city-list--active': isLocationActive
    })


    const carsharingClass = classNames({
        'carsharing': true,
        'carsharing--active': isCarsharingActive
    })
    const rectangleCarsharingClass = classNames({
        'rectangleCarsharing': true,
        'rectangleCarsharing--active': isCarsharingActive
    })
    const carsharingListClass = classNames({
        'carsharing-list': true,
        'carsharing-list--active': isCarsharingActive
    })
    return (
    <div>
        <div className = 'filters'>
            <div className = {locationClass} onClick = {toggleLocationClass} >
                <div className = 'city'>{ currentCity }</div>
                <div className = {rectangleLocationClass}></div>
                <div className = {cityListClass}>
                    {
                        cities.map(item => {
                            return (
                                <div onClick={()=>setCurrentCity(item)} className =  {cityListClass}>
                                    {item}
                                </div>
                            )
                        })
                    }
                </div>
            </div>

            <div className = {carsharingClass} onClick = {toggleCarsharingClass}>
                <div className = 'current-carsharing'>{currentCarsharing}</div>
                <div className = {rectangleCarsharingClass}></div>
                <div>
                {
                        carsharings.map(item => {
                            return (
                                <div onClick={()=>setCurrentCarsharing(item)} className =  {carsharingListClass}>
                                    {item}
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
        
        <div className = 'cars-content'>
            <div className = 'search-wrapper'>
                <div className = 'search-image'><img src = './menu-images/search-icon.png'></img></div>
                <div className = 'search-car-input'><input placeholder = 'Поиск автомобиля' type = 'search' name = 'sought-car'></input></div>
            </div>
            <div className = 'search-history-wrapper'>
                <div className = 'search-history-text'>История поиска...</div>
                <div className = 'car-wrapper'>
                    <div className = 'car-image'><img src = {volkswagen.golf[0]}></img></div>
                    <div className = 'about-car'>
                        {volkswagen.golf[1]}
                        <br></br>
                        {volkswagen.number[0]}
                        <br></br>
                        ({volkswagen.mark})<img src ='./cars-images/star.png'></img>  {volkswagen.reviews} отзывов
                    </div>
                </div>
            </div>
            <div className = 'auto-week-wrapper'>
                <div className = 'auto-week-text'>Авто недели</div>
                <div className = 'car-week-wrapper'>
                    <div className = 'car-image'><img src = {volkswagen.golf[0]}></img></div>
                    <div className = 'about-week-car'>
                        {volkswagen.golf[1]}
                        <br></br>
                        {volkswagen.number[0]}
                        <br></br>
                        ({volkswagen.mark})<img src ='./cars-images/star.png'></img>  {volkswagen.reviews} отзывов
                    </div>
                </div>
                    
            </div>
        </div>
    </div>
    )
}
import React from 'react'
import classNames from 'classnames'
import ReviewsProfile from './Reviews/ReviewsProfile'
import './Profile.css'

export default function Profile () {
    const profile = {
        id: 1,
        profileImage: './profile-images/profile-image.jpg',
        name: 'Евгений Семко',
        nickname: 'racedriver',
        rating: '+163'
    }
    return (
        <div>
            <div className = 'profile'>
                <div className = 'about-profile'>
                    <img src = {profile.profileImage}></img>
                    <div className = 'profile-text'>
                        <div> {profile.name}</div>
                        <div>@{profile.nickname}</div>
                        <div>Рейтинг:{profile.rating}</div>
                    </div>
                </div>
            </div>
            <ReviewsProfile />
        </div>
    )
}
import React, { useState } from 'react'
import classNames from 'classnames'
import './ReviewsProfile.css'
import Review from './Review'

export default function ReviewsProfile() {
    const [isReviewsClass, setIsReviewsClass] = useState(false)
    const toggleReviewsClass = () => setIsReviewsClass(!isReviewsClass)
    const openReviewsClass = classNames({
        'open-reviews': true,
        'open-reviews--active': isReviewsClass
    })
    const openReviewsRectangleClass = classNames({
        'open-reviews-rectangle': true,
        'open-reviews-rectangle--active': isReviewsClass
    })
    const reviewsVisible = classNames({
        'reviews-invisible': true,
        'reviews-visible': isReviewsClass
    })
    const reviews = [
        {
            nameCar: 'Volkswagen Golf', federalNumber: 'а001уф136', review: 'Не завелась...', rate: 1,
            url: 'volkswagen-golf.png'
        },
        {
            nameCar: 'BMW 5-series', federalNumber: 'а002уф136', review: 'Не включается режим спорт', rate: 5,
            url: 'bmw-5-series.png'
        },
        {
            nameCar: 'BMW 5-series', federalNumber: 'а002уф136', review: 'Не включается режим спорт', rate: 5,
            url: 'bmw-5-series.png'
        }
    ]
    return (
        <div>
            <div className='reviews-wrapper'>
                <div onClick={toggleReviewsClass} className={openReviewsClass}>
                    <div>Отзывы</div>
                    <div className={openReviewsRectangleClass}></div>
                </div>
            </div>
            <div className={reviewsVisible}>
                <div className='reviews'>
                    {reviews.map(item => {
                        return (
                            <Review item={item} />
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
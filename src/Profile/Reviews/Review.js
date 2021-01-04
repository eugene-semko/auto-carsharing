import React from 'react'
import './Review.css'

export default function Review(item) {
    return (

        <div>
            <div className='review-profile-wrapper1'>

                <div className='about-car1'><img src={`./cars-images/${item.item.url}`}></img>
                    <div>{item.item.nameCar}</div>
                    <div>
                        {item.item.federalNumber}
                    </div>
                    <div>
                        ({item.item.rate}/5)<img src='./cars-images/star.png'></img> {item.item.review}
                    </div>
                </div>
            </div>
        </div>
    )
}
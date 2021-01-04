import React, { useState } from 'react'
import './menu-css/menu.css'
import classNames from 'classnames'
export default function Menu() {
    // const [isImageClass,setIsImageClass] = useState(false)
    // const toggleImageClass = () => {
    //     setIsImageClass(!isImageClass)
    //     console.log(isImageClass)
    // }
    // const imageClass = classNames({
    //     '':true,
    //     'image':isImageClass
    // })
    return (
        <div>
        <nav className = 'menu'>
            <a href = '/cars'><div className = 'button'><img  src = './menu-images/car-png.png'></img></div></a>
            <a href = '/review'><div className = 'button'><img  src = './menu-images/plus.png'></img></div></a>
            <a href = '/peoples'><div className = 'button'><img  src = './menu-images/peoples.png'></img></div></a>
            <a href = '/registration'><div className = 'button'><img src = './menu-images/man.png'></img></div></a>
        </nav>
        </div>
    )
}
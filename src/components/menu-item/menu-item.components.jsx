import React from 'react';
import './menu-item.styles.scss'

const MenuItem = ({title, imageUrl, size}) => (
    <div  className={`${size} menu-item`}>
{/* this div is needed for the hover effect, we are doing this so it doesnt affect the content */}
        <div className='background-image' style= {{ 
        backgroundImage : `url(${imageUrl})`}}> 
        </div>
        <div className='content'>
            <h1 className='title'>{title.toUpperCase()}</h1>
            <span className='subtitle'>SHOP NOW</span>
        </div>
    </div>  
)

export default MenuItem;
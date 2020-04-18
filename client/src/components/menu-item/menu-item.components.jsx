import React from 'react';
import './menu-item.styles.scss'
import {withRouter} from 'react-router-dom'

const MenuItem = ({title, imageUrl, size, history,linkUrl, match}) => (
    <div  className={`${size} menu-item`} onClick={()=> history.push(`${match.url}${linkUrl}`)}>
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

export default withRouter(MenuItem);
import React from 'react';
import MenuItem from '../menu-item/menu-item.components';
import './directory.styles.scss'
import { createStructuredSelector } from 'reselect';
import { selectDirectorySection } from '../../redux/directory/directory.selectors';
import { connect } from 'react-redux';

const Directory =({sections}) => (
    <div className='directory-menu'>
        {
        // this.state.sections.map(({title, imageUrl, id, size}) =>(  //disctructuring the section so as to pass the properties to the menu-item 
        //     <MenuItem key={id} title = {title}  imageUrl ={imageUrl} size = {size}/> 
        sections.map(({id, ...otherSectionProps}) =>(  //ES6  thrick.... spreading all of the values together other than id because we are not passing id.
        <MenuItem key={id} {...otherSectionProps}/>   
        ))}
    </div>
)

const mapStateToProps = createStructuredSelector({
    sections: selectDirectorySection
})

export default connect(mapStateToProps)(Directory);
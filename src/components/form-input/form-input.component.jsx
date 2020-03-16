import React from 'react';
import './form-input.style.scss'


const FormInput = ({handelChange,label, ...OtherProps}) =>(
    <div className='group'>
        <input className='form-input' onChange={handelChange} {...OtherProps} />
        {
            // not understanding yet
            label ?
            (<label className={ `${OtherProps.value.length ? 'shrink' : ''} form-input-label`}>
                {label}
            </label>)
            : null
        }
    </div>
);

export default FormInput;
import React from 'react';
import './errorMessage.css';
import img from './error.jpg';

const ErrorMessage = () => {
    return (
        <>
            {/* Если из папки Public: */}
            {/* <img src={process.env.PUBLIC_URL + '/img/error.jpg'} alt='error'></img> */}

            {/* Если из папки с компонентом: */}
            <img src={img} alt='error'></img>
            <span>Something goes wrong!</span>
        </>
    )
}

export default ErrorMessage;
import React, { useState, useEffect } from 'react';
import './randomChar.css';
import Spinner from '../spinner/spinner';
import ErrorMessage from '../errorMessage';
import PropTypes from 'prop-types';

function RandomChar({ interval, getChar }) {

    const [char, setChar] = useState(141);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        updateChar()
    }, []);

    useEffect(() => {

        let timerId = setInterval(updateChar, interval);
        return function clear() { clearInterval(timerId) };

    });

    function onCharLoaded(charId) {
        setChar(charId);
        setLoading(false);
    }

    function onError() {
        setError(true);
        setLoading(false);
    };

    function updateChar() {
        const id = Math.floor(Math.random() * 140 + 25)
        getChar(id)
            .then(onCharLoaded)
            .catch(onError)
    }


    const spinner = loading ? <Spinner /> : null;
    const errorMessage = error ? <ErrorMessage /> : null
    const content = !(loading || error) ? <View char={char} /> : null;
    return (
        <div className="random-block rounded">
            {errorMessage}
            {spinner}
            {content}
        </div>
    );

}

// Задаем пропсы по умолчанию
RandomChar.defaultProps = { interval: 15000 }
// Задаем  строго ТИПЫ ДАННЫХ у каждого пропса
//  БЕЗ библиотеки prop-types:
// RandomChar.propTypes = {
//     interval: (props, propName, componentName) => {
//         const value = props[propName];
//         if (typeof value === 'number' && !isNaN(value)) {
//             return null
//         }
//         return new TypeError(`${componentName}: ${propName} must be a number!`)
//     }
// }

// С библиотекой prop-types
RandomChar.propTypes = {
    interval: PropTypes.number

}
const View = ({ char }) => {
    const { name, gender = 'no data', born, died, culture } = char
    return (
        <>
            <h4>Random Character: {name}</h4>
            <ul className="list-group list-group-flush">
                <li className="list-group-item d-flex justify-content-between">
                    <span className="term">Gender</span>
                    <span>{gender}</span>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                    <span className="term">Born </span>
                    <span>{born}</span>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                    <span className="term">Died </span>
                    <span>{died}</span>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                    <span className="term">Culture </span>
                    <span>{culture}</span>
                </li>
            </ul>
        </>
    )
}

export default RandomChar;
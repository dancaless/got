import React, { useEffect, useState } from 'react';
import './itemDetails.css';
import ErrorMessage from '../errorMessage';
import Spinner from '../spinner'

const Field = ({ item, field, label }) => {
    return (
        <li className="list-group-item d-flex justify-content-between">
            <span className="term">{label}</span>
            <span>{item[field]}</span>
        </li>
    )
}

export { Field };

function ItemDetails(props) {
    const { itemId, getData } = props;

    const [item, setItem] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        updateItem();
    }, [itemId]);


    function onItemDetailsLoaded(item) {
        setItem(item);
        setLoading(false);
    }

    function updateItem() {
        if (!itemId) {
            return;
        }
        setLoading(true);
        getData(itemId)
            .then(onItemDetailsLoaded)
            .catch(() => onError())
    }

    function onError() {
        setItem(null);
        setError(true);
    }



    if (!item && error) {
        return <ErrorMessage />
    } else if (!item) {
        return <span className="select-error">Please select an item</span>
    }
    const { name } = item;

    if (loading) {
        return (
            <div className="char-details rounded">
                <Spinner />
            </div>
        )
    }

    return (
        <div className="char-details rounded">
            <h4>{name}</h4>
            <ul className="list-group list-group-flush">
                {
                    React.Children.map(props.children, (child) => {
                        return React.cloneElement(child, { item })
                    })
                }

            </ul>
        </div>
    );

}

export default ItemDetails;
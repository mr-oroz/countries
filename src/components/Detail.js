import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getRequestSearchName } from '../redux/request';
import CountryItem from './CountryItem';
const Detail = () => {
    const { name } = useParams();
    const dispatch = useDispatch();
    const { item, errorMessage } = useSelector(state => state);
    console.log(item)
    useEffect(() => {
        dispatch(getRequestSearchName(name))
    }, [name])

    if (errorMessage !== null) {
        return <h1>{errorMessage}</h1>
    }

    return (
        <div className='countries'>
            {item && item.map((item, index) => (
                <CountryItem key={index} {...item}/>
            ))}
        </div>
    );
};

export default Detail;
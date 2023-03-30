import React from 'react';
import { useNavigate } from 'react-router-dom';

const CountryItem = (props) => {
    const {name, flags, continents, capital} = props;
    const navigate = useNavigate();
    
    const handleClick = () => {
        navigate(`/detail/${name.common}`)
    }
    return (
        <div className='card'>
            <div onClick={handleClick} className='flag'>
                <img src={flags.png} alt="" />
            </div>
            <h2>name: {name.common}</h2>
            <div className='description'>
                <span>capital: {capital && capital[0]}</span>
                <span>continents: {continents[0]}</span>
            </div>
        </div>
    );
};

export default CountryItem;
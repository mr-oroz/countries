import React from 'react';
import { useSelector } from 'react-redux';
import CountryItem from './CountryItem';
const Country = () => {
    const {countries} = useSelector(state => state);

    return (
        <div className='countries'>
            {
                countries && countries.map((item,index) => (
                    <CountryItem key={index} {...item}/>
                ))
            }
        </div>
    );
};

export default Country;
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const [value, setValue] = useState('');
    const navigate = useNavigate();
    
    const handleClick = () => {
        navigate(`/detail/${value}`)
        setValue('')
    }
    return (
        <header>
            <Link to={'/'}>Home</Link>
            <div className='search'>
                <input
                    onChange={(e) => setValue(e.target.value)}
                    value={value}
                    placeholder='search'
                    type="text" />
                <button onClick={handleClick}>search</button>
            </div>
        </header>
    );
};

export default Header;
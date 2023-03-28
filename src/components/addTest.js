import React, { useState } from 'react';
import { addTestAction, deleteTestAction } from '../redux/action';
import { useDispatch, useSelector } from 'react-redux';

const defaultState = {
    test: '',
    variantA: '',
    variantB: '',
    variantC: '',
    variant: ''
}
const AddTest = () => {
    const [form, setForm] = useState(defaultState);
    const { tests } = useSelector(state => state);
    const dispatch = useDispatch();

    // console.log(tests)
    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const handleClick = () => {
        dispatch(addTestAction(form))
        setForm(defaultState)
    }

    return (
        <div className='add-test'>
            <div className='left'>
                <div className='list'>
                    {
                        tests && tests.map(item => (
                            <div className='item'>
                                <span>{item.test}</span>
                                <span
                                    onClick={() => dispatch(deleteTestAction(item.id))}>
                                    delete
                                </span>
                            </div>
                        ))
                    }
                </div>
                <button onClick={handleClick}>добавить вопрос</button>
            </div>
            <div className='right'>
                <div className='create-rest'>
                    <input
                        onChange={handleChange}
                        value={form.test}
                        name="test"
                        type="text"
                        placeholder='создать тест' />
                </div>
                <div className='variants'>
                    <div className='variant'>
                        <input
                            onChange={handleChange}
                            name='variant'
                            value='a'
                            type="radio" />
                        <input
                            onChange={handleChange}
                            value={form.variantA}
                            name="variantA"
                            type="text"
                            placeholder='varinat a' />
                    </div>
                    <div className='varinat'>
                        <input
                            onChange={handleChange}
                            name='variant'
                            value='b'
                            type="radio" />
                        <input
                            onChange={handleChange}
                            value={form.variantB}
                            name="variantB"
                            type="text"
                            placeholder='varinat b' />
                    </div>
                    <div className='varinat'>
                        <input
                            onChange={handleChange}
                            name='variant'
                            value='c'
                            type="radio" />
                        <input
                            onChange={handleChange}
                            value={form.variantC}
                            name="variantC"
                            type="text"
                            placeholder='varinat c' />
                    </div>
                </div>
                <button onClick={handleClick} className='save-test'>сохранить вопрос</button>
            </div>
        </div>
    );
};

export default AddTest;
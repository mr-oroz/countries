import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { checkScoreAction, modalAction } from '../redux/action';
import Modal from './Modal';
const ListTest = () => {
    const { tests, open } = useSelector(state => state);
    const dispatch = useDispatch();
    if (tests.length === 0) {
        return <h1 style={{
            marginTop: '50px',
            textAlign: 'center'
        }}>пока тесты не созданы</h1>
    }
    if(open === true) {
        return <Modal/>
    }
    const handleclick = () => {
        dispatch(modalAction(true))
    }
    return (
        <div className='list-test'>
            <div className="list-left">
                <h1>Вопросы</h1>
                <ul>
                    {
                        tests && tests.map(item => <li key={item.id}>{item.test}</li>)
                    }
                </ul>
            </div>
            <div className="list-right">
                <div className='tests'>
                    {
                        tests && tests.map(item => (
                            <div key={item.id} className='test'>
                                <h3>{item.test}</h3>
                                <span>выберите ответ</span>
                                <div className='answer'>
                                    <input
                                        onClick={() => dispatch(checkScoreAction(item.variants[0].correct))}
                                        name={item.id}
                                        type="radio" />
                                    <span>{item.variants[0].quest}</span>
                                </div>
                                <div className='answer'>
                                    <input
                                        onClick={() => dispatch(checkScoreAction(item.variants[1].correct))}
                                        name={item.id}
                                        type="radio" />
                                    <span>{item.variants[1].quest}</span>
                                </div>
                                <div className='answer'>
                                    <input
                                        onClick={() => dispatch(checkScoreAction(item.variants[2].correct))}
                                        name={item.id}
                                        type="radio" />
                                    <span>{item.variants[2].quest}</span>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <button onClick={handleclick}>отправить ответы</button>
            </div>
        </div>
    );
};

export default ListTest;
import React, {useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { modalAction, removeState } from '../redux/action';

const Modal = () => {
    // const [precent, setPresent] = useState();
    const dispatch = useDispatch()
    const { score, tests } = useSelector(state => state);
    const percentage = Math.floor((score / tests.length) * 100);
    return (
        <div className='modal'>
            <div onClick={() => dispatch(modalAction(false))} className='modal_black'></div>
            <div className='modal_body'>
                {score} / {tests.length}
                <br />
                {percentage}%
                <button onClick={() => {
                    dispatch(removeState())
                    dispatch(modalAction(false))
                }}>закрыть</button>
            </div>
        </div>
    );
};

export default Modal;
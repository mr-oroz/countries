import React, {useEffect} from 'react';
import './App.css';
import { getRequestCountryAll } from './redux/request';
import { useDispatch } from 'react-redux';
import Header from './components/Header';
import Country from './components/Country';
import {Routes, Route, useLocation} from 'react-router-dom';
import Detail from './components/Detail';
import * as Scroll from 'react-scroll';
const App = () => {
  const scroll = Scroll.animateScroll
  const dispatch = useDispatch();
  const { pathname } = useLocation();

  useEffect(() => {
    dispatch(getRequestCountryAll())
  }, [])

  useEffect(() => {
    scroll.scrollTo(0, 0)
  }, [pathname]);

  const up = () => {
    scroll.scrollTo(0, 0)
  }

  return (
    <div className='App'>
      <Header/>
      <div onClick={up} className='up'>up</div>
      <Routes>
        <Route path='/' element={<Country/>}/>
        <Route path='/detail/:name' element={<Detail/>}/>
      </Routes>
    </div>
  );
};

export default App;
import React, { useEffect, useState } from 'react'
import Header from '../Header/'
import TopCardList from '../top-card-list'
import CreateCard from '../CreateCard'
// import Overview from '../Overview'
import Switch from '../switch'
import './style.css';

function Main() {
    const [checked, setChecked] = useState(false);
    const [darkMode, setDarkMode] = useState(false);
    const mainClass = darkMode ? 'is-dark-mode' : 'is-light-mode';
  
    function changeMedia(mq) {
      setDarkMode(mq.matches);
      
      setChecked(mq.matches);
    }
  
    useEffect(() => {
      const mq = window.matchMedia('(prefers-color-scheme: dark)');
      mq.addListener(changeMedia);
      setDarkMode(mq.matches);
      setChecked(mq.matches);
      //setChecked(mq.matches);
  
    }, [])
    return (
        <main className={mainClass}>
        <Header>
          <Switch 
          setDarkMode={setDarkMode} 
          checked={checked} 
          setChecked={setChecked}></Switch>
        </Header>
        <TopCardList></TopCardList>
        {/* 
        <Overview></Overview> */}
      </main>
    );
}

export default Main;
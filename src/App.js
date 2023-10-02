import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Categories from './components/Categories';
import Cards from './components/Cards';
import Footer from './components/Footer';
import MobileApp from './components/MobileApp';
import FotterBottom from './components/FotterBottom';
import Modal from './components/Modal';
import {  useReducer } from 'react';
import './App.css'

 console.log('app')
const initialState = {
  isOpen: false,
  login: false,
  language: false,
  signUp: false
}

const reducer = (state, action) => {

  console.log('sssss')
  switch (action.type) {
    case "open_login":
      return { ...state, isOpen: true, login: true,  }
    case "open_language":
      return { ...state, isOpen: true, language: true, }
    case "open_signup":
      return { ...state, isOpen: true, signUp: true,}
    case "close_modal":
      return { ...state, isOpen: false, login: false, language: false, signUp: false }
  }

}
function App() {


  const [state, dispatch] = useReducer(reducer, initialState)



console.log('app222')



  return (
    <>
    
      <Header dispatch={dispatch} ></Header>
      <HeroSection></HeroSection>
      <Categories></Categories>
      <MobileApp></MobileApp>
      <Cards></Cards>
      <Footer></Footer>
      <FotterBottom dispatch={dispatch}></FotterBottom>
      <Modal state={state} dispatch={dispatch}></Modal>
    
    </>

  );
}

export default App;

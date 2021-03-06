import React from 'react'
import Main from './Main/Main';
import Navbar from './Navbar/Navbar';
import Footer from './Footer/Footer'

export default function App() {
   return (
       <>
    <Navbar name='Logo' burger='&#9776;'/>
    <Main image="./car.jpg" name="McLaren" price="100000$" alt="ERROR"/>
    <Footer name='Footer'/>
     </>
   )
}

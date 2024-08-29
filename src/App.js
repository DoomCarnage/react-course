import React,{useState,useEffect} from 'react';
import './App.css';
import { Route,Routes,Navigate,Outlet } from 'react-router-dom';
import Header from './Header';
import Navigationbar from './Navigationbar';
import Services from './Services';
import Portfortlio from './Portfortlio';
import About from './About';
import Team from './Team';
import Contact from './Contact';
import Footer from './Footer';

const ProtectedRoute = ({ user, redirectPath='/' }) => {
  if (!user) {
    return <Navigate to="/" replace />;
  }
  return <Outlet />;
};

const App = () => {

  // Use the ProtectedRoute for the Admin component
  return (
    <>
      <Navigationbar/>
      <Routes>
        <Route path="/" element={<Header/>}/>
        <Route path="/services" element={<Services/>}/>
        <Route path="/portfolio" element={<Portfortlio/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/team" element={<Team/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/admin" element={<ProtectedRoute/>}/>
      </Routes>
      <Footer/>
    </>
  );
}

export default App;

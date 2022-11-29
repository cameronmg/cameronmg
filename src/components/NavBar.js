import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from '../assets/img/cameron-logo.png';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
import { HashLink } from 'react-router-hash-link';
import {
  BrowserRouter as Router
} from "react-router-dom";

export const NavBar = () => {

  //define class for active links on webpage (default is home)
  const [activeLink, setActiveLink] = useState('home');
  //create class that tells if the use has scrolled (default is false)
  //triggered when scroll starts
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    //arrow function that sets scroll to true and false
    const onScroll = () => {
      //if the window scrolling on the y axis is greater than 50 
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }
    //add event listener that is fired only on scroll
    window.addEventListener("scroll", onScroll);

    //remove when component gets removed from dom
    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  return (
    <Router>
      {/*if class is scrolled then trigger scroll class if not leave it as is*/}
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand href="/">         
            {/*<img src={logo} alt="Logo" className = "image" />*/}
          </Navbar.Brand>
           {/*import image for mobile menu*/}
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
               {/*if active name == home the name will be changed to active navbar-link : if not the name will be navbarlink*/}
              <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
              <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
              <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Experience</Nav.Link>
              <Nav.Link href="#connect" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('education')}>Education</Nav.Link>
            </Nav>
            {/*social media icons*/}
            <span className="navbar-text">
              {/*<div className="social-icon">
                <a href="#"><img src={navIcon1} alt="" /></a>
                <a href="#"><img src={navIcon2} alt="" /></a>
                <a href="#"><img src={navIcon3} alt="" /></a>
              </div>*/}
              {/*<HashLink to='#connect'>
                <button className="vvd"><span>Let’s Connect</span></button>
            </HashLink>*/}
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  )
}

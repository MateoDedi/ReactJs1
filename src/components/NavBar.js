import {useEffect, useState} from "react";
import { Nav, Navbar, Container, NavDropdown } from "react-bootstrap";

export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, seScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                seScrolled(true);
            } else {
                seScrolled(false);
            }
        }

        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, [])    

    return (
        <Navbar expand="lg" className={scrolled ? "scrolled": ""}>
    <Container>
        <NavBar.Brand href="#home">
            <img src={''} alt="Logo"></img>
        </NavBar.Brand>
        <NavBar.Toggle aria-controls="basic-navbar-nav">#
            <span className="navbar-toggler-icon"></span>
        </NavBar.Toggle>
        <NavBar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
                <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'}>Skills</Nav.Link>
                <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'}>Projects</Nav.Link>
            </Nav>
            <span className="navbar-text">
                <div className="social-icon">
                    <a href="#.com">
                        <img src="" alt="#"></img>
                        <img src="" alt="#"></img>
                    </a>
                </div>
                <button className="vvd" onClick={() => console.log('connect')}>
                    <span>Let's Connect</span>
                </button>
            </span>
        </NavBar.Collapse>
    </Container>
        </Navbar>
    )
}
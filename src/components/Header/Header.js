import { Navbar, Nav } from 'react-bootstrap'
import logo from './../assets/logo.png'
import './Header.css'

const Header = () => {

    return (
        <section className="navigation">
            <Navbar expand="lg">
                <Navbar.Brand href="" >
                    <div className="logo" >
                        <img src={logo} alt="logo-boxfish" />
                        <div className="text-logo">
                            <span className="icon">BOXFISH</span>
                            <br />
                            <span> studio</span>
                        </div>
                    </div>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" className="toggle"> <span> = Menu</span></Navbar.Toggle>
                <Navbar.Collapse className="justify-content-end">
                    <Nav className="ml-auto">
                        <div className="menu">
                            <a href="/" className="services">Services</a>
                            <a href="/" className="about">About us</a>
                            <a href="/" className="career">Career</a>
                            <a href="/" className="work">Work</a>
                            <a href="/" className="contact">Contacts</a>
                        </div>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <hr></hr>
            <div className="email-phone">
                <p className="email">info@boxfish.studio</p>
                <p className="red"></p>
                <p className="phone">+34 910615212</p>
            </div>
            <hr></hr>
        </section>
    )
}
export default Header
import { Navbar, Nav } from 'react-bootstrap'
import logo from '../../assets/logo.png'
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
                        </div>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <hr></hr>
            <div className="email-phone">
                <span className="email">info@boxfish.studio</span>
                <svg height="6" width="6" className="red">
                    <circle cx="3" cy="3" r="3" fill="#FF5C5C" />
                </svg>
                <span className="phone">+34 910615212</span>
            </div>
            <hr></hr>
        </section>
    )
}
export default Header
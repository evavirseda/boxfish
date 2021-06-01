import { Container, Row, Col } from 'react-bootstrap'
import bike from '../../assets/hero.png'
import apple from '../../assets/apple.png'
import fazua from '../../assets/fazua.png'
import linkedin from '../../assets/linkedin.png'
import twitter from '../../assets/twitter.png'
import vans from '../../assets/vans.png'
import yk from '../../assets/yk.png'
import './Hero.css'

const Hero = () => {

    return (
        <>
            <Container>
                <Row>
                    <Col md={6}>
                        <div className="hero-wrapper">
                            <p className="text">Engineering with <span className="red-text">love</span> and <span className="red-text">passion</span>
                            </p>
                            <p className="subtext">High-quality solutions for emerging technologies and industries</p>
                        </div>
                    </Col>
                    <Col md={6}>
                        <img src={bike} alt="bike" className="bike" />
                    </Col>
                </Row>
                <Row>
                    <Col md={6}>
                        <div className="customers">
                            <img src={linkedin} alt="logo-linkedin" className="linkedin" />
                            <img src={vans} alt="logo-vans" className="vans" />
                            <img src={yk} alt="logo-yk" className="yk" />
                        </div>
                    </Col>
                    <Col md={6}>
                        <div className="customers">
                            <img src={twitter} alt="logo-twitter" className="twitter" />
                            <img src={fazua} alt="logo-fazua" className="fazua" />
                            <img src={apple} alt="logo-apple" className="apple" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
export default Hero

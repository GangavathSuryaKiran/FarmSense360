import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../App.css';
import arc from '../images/arc.jpg';
import icon2 from '../images/icon2.png';
import icon3 from '../images/icon3.png';
import icon4 from '../images/icon4.png';
import icon5 from '../images/icon5.png';

const About = () => {
  return (
    <div className="about-us">
      <Container>
        <div>
          <h3
            style={{
              textAlign: 'center',
              marginBottom: '2rem',
              marginTop: '2rem',
            }}
          >
            <strong> Range of features that we provide </strong>
          </h3>
          <Row>
            <Col>
              <img src={icon2} alt="Crop Price Prediction" />
              <br />
              <span>
                <strong>Maximum all crops info available</strong>
              </span>
            </Col>
            <Col>
              <img src={icon3} alt="Irrigation and Modern Techniques" />
              <br />
              <span>
                <strong>Irrigation and Modern Techniques</strong>
              </span>
            </Col>
            <Col>
              <img src={icon4} alt="Cross-Platform Application" />
              <br />
              <span>
                <strong>Cross-Platform Application</strong>
              </span>
            </Col>
          </Row>
        </div>
      </Container>
      <Container>
        <div>
          <h3
            style={{
              textAlign: 'center',
              marginBottom: '2rem',
              marginTop: '2rem',
            }}
          >
            <strong> FarmSense360 </strong>
          </h3>
          <Row style={{ marginTop: '3rem', marginBottom: '3rem' }}>
            <Col>
              <img
                src={arc}
                width="500px"
                height="500px"
                alt="cross platform app"
              />
            </Col>
          </Row>
          <Row style={{ marginTop: '3rem', marginBottom: '3rem' }}>
            <Col>
              <img
                src={icon5}
                width="600px"
                height="400px"
                alt="cross platform app"
              />
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default About;

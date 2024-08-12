import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Complete from '../images/complete.PNG';
import icon2 from '../images/icon2.png';
import icon3 from '../images/icon3.png';
import icon4 from '../images/icon4.png';

const Features = () => {
  return (
    <div style={{ marginBottom: '2rem' }}>
      <div
        style={{ textAlign: 'center', marginTop: '2rem', marginBottom: '2rem' }}
      >
        <h2>Our Salient Features</h2>
      </div>
      <Container>
        <Row>
          <Col>
            <Card style={{ width: '18rem' }}>
              <Card.Img
                variant="top"
                src={Complete}
                width="300"
                height="300"
                alt="detail information"
              />
              <Card.Body>
                <Card.Text>
                  Detailed information from sowing till harvesting
                </Card.Text>
                <a href="/modern">
                  <Button variant="primary">Explore More</Button>
                </a>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <Container>
        <div
          style={{
            textAlign: 'center',
            marginTop: '2rem',
            marginBottom: '2rem',
          }}
        >
          <h2>Our Range of Services</h2>
        </div>
        <Row>
          <Col>
            <img src={icon2} alt="Crop Price Prediction" />
            <br />
            <span>
              <strong>Maximum all crop info available</strong>
            </span>
          </Col>
          <Col>
            <img src={icon3} alt="Irrigation and Modern Farming" />
            <br />
            <span>
              <strong>Irrigation and Modern Farming</strong>
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
      </Container>
    </div>
  );
};

export default Features;

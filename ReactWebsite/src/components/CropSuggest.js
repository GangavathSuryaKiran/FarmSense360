import React from 'react';
import {
  Container,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input,
} from 'reactstrap';
import PropTypes from 'prop-types';
import axios from 'axios';

class CropSuggest extends React.Component {
  state = {
    modal: false,
    n: '',
    p: '',
    k: '',
    temp: '',
    hum: '',
    ph: '',
    rain: '',
    show: false,
    crop: null,
  };

  static propTypes = {
    getQuestions: PropTypes.func.isRequired,
    question: PropTypes.object.isRequired,
    isAuthenticated: PropTypes.bool,
  };

  toggle = () => {
    this.setState({
      modal: !this.state.modal,
    });
  };

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();

    const { n, p, k, temp, hum, ph, rain } = this.state;

    // Ensure values are converted to floats
    const payload = {
      n: parseFloat(n),
      p: parseFloat(p),
      k: parseFloat(k),
      temp: parseFloat(temp),
      hum: parseFloat(hum),
      ph: parseFloat(ph),
      rain: parseFloat(rain),
    };

    console.log(payload);

    this.setState({ show: true });

    axios({
      method: 'POST',
      url: 'http://localhost:9000/predict',
      data: payload,
    })
      .then((response) => {
        console.log(response.data);
        this.setState({
          crop: response.data.crop,
        });
      })
      .catch((error) => {
        console.log('Error occurred ', error);
      });
    this.setState({
      show: false,
      modal: false,
    });
  };

  render() {
    return (
      <Container>
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <h2>Not sure which crop to grow? </h2>
          <br />
          <h5>Submit your soil profile for crop suggestion</h5>
        </div>

        <div className="d-flex justify-content-center">
          <Button color="success" onClick={this.toggle}>
            Answer now
          </Button>{' '}
        </div>

        <br />
        <br />
        <br />
        <br />

        <div
          className={
            this.state.crop ? 'text-center crop-suggest' : 'text-center'
          }
        >
          {this.state.crop ? (
            <p>
              Best suitable crop for your soil is <span>{this.state.crop}</span>
            </p>
          ) : null}
        </div>

        <br />
        <br />
        <br />
        <br />

        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>Answer the question</ModalHeader>
          <ModalBody>
            <Form onSubmit={this.onSubmit}>
              <FormGroup>
                <Label for="n">Nitrogen</Label>
                <Input
                  type="number"
                  name="n"
                  id="n"
                  placeholder="Ratio of nitrogen content in soil"
                  value={this.state.n}
                  style={{ marginBottom: '1rem' }}
                  onChange={this.onChange}
                />

                <Label for="p">Phosphorus</Label>
                <Input
                  type="number"
                  name="p"
                  id="p"
                  placeholder="Ratio of Phosphorus content in soil"
                  value={this.state.p}
                  style={{ marginBottom: '1rem' }}
                  onChange={this.onChange}
                />

                <Label for="k">Potassium</Label>
                <Input
                  type="number"
                  name="k"
                  id="k"
                  placeholder="Ratio of Potassium content in soil"
                  value={this.state.k}
                  style={{ marginBottom: '1rem' }}
                  onChange={this.onChange}
                />

                <Label for="temp">Temperature</Label>
                <Input
                  type="number"
                  name="temp"
                  id="temp"
                  placeholder="Temperature in degree Celsius"
                  value={this.state.temp}
                  style={{ marginBottom: '1rem' }}
                  onChange={this.onChange}
                />

                <Label for="hum">Relative Humidity</Label>
                <Input
                  type="number"
                  name="hum"
                  id="hum"
                  placeholder="Relative humidity in percentage"
                  value={this.state.hum}
                  style={{ marginBottom: '1rem' }}
                  onChange={this.onChange}
                />

                <Label for="ph">pH</Label>
                <Input
                  type="number"
                  name="ph"
                  id="ph"
                  placeholder="pH value of soil"
                  value={this.state.ph}
                  style={{ marginBottom: '1rem' }}
                  onChange={this.onChange}
                />

                <Label for="rain">Rainfall</Label>
                <Input
                  type="number"
                  name="rain"
                  id="rain"
                  placeholder="Rainfall in mm"
                  value={this.state.rain}
                  style={{ marginBottom: '1rem' }}
                  onChange={this.onChange}
                />

                <Button color="dark" style={{ marginTop: '2rem' }} block>
                  Submit
                </Button>
              </FormGroup>
            </Form>
          </ModalBody>
        </Modal>
      </Container>
    );
  }
}

export default CropSuggest;

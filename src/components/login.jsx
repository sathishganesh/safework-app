import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { FaSignInAlt, FaEnvelope, FaKey } from 'react-icons/fa';

import { Container, Row, Col, InputGroup, FormControl, Card, Icon, Form, Button } from 'react-bootstrap';

class Login extends Component {



    render() {
        return (<div >
            <Row>
                <Col> <div class="container  " style={{ width: '30rem', height: 'auto', marginLeft: "10rem", marginTop: "10rem" }}>
                    <lable className="h1 content text-secondary font-weight-bolder">  SafeWork Form</lable>
                    <hr class="hr-light wow fadeInLeft" data-wow-delay="0.3s " />
                    <h6 class="h5 mb-3 wow text-dark  font-italic" data-wow-delay="0.3s" >

                        Safework utility to collect shop floor details for in-house and outsource companies.Workflow utility for field engineer to
                         enter data and supervisors to view,validate and approve the shop floor/job work details</h6>
                </div>
                </Col>
                <Col>
                    <Card border="danger" style={{ width: '25rem', height: 'auto', marginLeft: "10rem", marginTop: "10rem" }}>
                        <Card.Header> <p className=" h5 text-center py-4 text-danger" ><FaSignInAlt /> Sign In</p></Card.Header>
                        <Card.Body>
                            <Form>
                                <Form.Row >
                                    <FaEnvelope size='1.5rem' />
                                    <Col>  <Form.Group controlId="formBasicEmail">

                                        <Form.Control type="email" placeholder="Enter email" />

                                    </Form.Group>
                                    </Col> </Form.Row>
                                <Form.Row>
                                    <FaKey size='1.5rem' />
                                    <Col>  <Form.Group controlId="formBasicPassword">
                                        <Form.Control type="password" placeholder="Password" />
                                    </Form.Group></Col>
                                </Form.Row>
                                <div className="row">
                                    <div className="col ml-4">
                                        <a href="#" className=" h6 ">forgot password?</a>
                                    </div>
                                </div>
                                <Row>  <Button className="ml-5 " variant="primary" type="submit">
                                    Submit
                </Button></Row>

                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row>

                <div class="card-wrapper">
                    <div id="card-1" class="card card-rotating text-center">

                        <div class="face front">

                            <div class="card-up">
                                <img class="card-img-top" src="https://mdbootstrap.com/img/Photos/Others/photo7.jpg" alt="Image with a photo of clouds." />
                            </div>

                            <div class="avatar mx-auto white"><img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(20).jpg" class="rounded-circle"
                                alt="Sample avatar image." />
                            </div>

                            <div class="card-body">
                                <h4 class="font-weight-bold mb-3">Marie Johnson</h4>
                                <p class="font-weight-bold blue-text">Web developer</p>
                                <a class="rotate-btn" data-card="card-1"><i class="fas fa-redo-alt"></i> Click here to rotate</a>
                            </div>
                        </div>
                        {/* This is integration Branch 1 */}
                        <div class="face back">
                            <div class="card-body">

                                <h4 class="font-weight-bold mb-0">About me</h4>
                                <hr />
                                <p />
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat tenetur odio suscipit non commodi vel
          eius veniam maxime?
          <hr />
                                <ul class="list-inline py-2">
                                    <li class="list-inline-item"><a class="p-2 fa-lg fb-ic"><i class="fab fa-facebook-f"></i></a></li>
                                    <li class="list-inline-item"><a class="p-2 fa-lg tw-ic"><i class="fab fa-twitter"></i></a></li>
                                    <li class="list-inline-item"><a class="p-2 fa-lg gplus-ic"><i class="fab fa-google-plus-g"></i></a></li>
                                    <li class="list-inline-item"><a class="p-2 fa-lg li-ic"><i class="fab fa-linkedin-in"></i></a></li>
                                </ul>
                                <a class="rotate-btn" data-card="card-1"><i class="fas fa-undo"></i> Click here to rotate back</a>

                            </div>
                        </div>

                    </div>
                </div>
            </Row>

        </div >
        )



    }
}
export default Login;
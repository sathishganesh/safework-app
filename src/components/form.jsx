import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Row, Col, InputGroup, FormControl } from 'react-bootstrap';

class Form extends Component {


    render() {
        const container = {

            border: "2px",
            width: "100%",
            paddingBottom: "15px",
            paddingRight: "15px",
            paddingLeft: "15px",
            marginRight: "auto",
            backgroundColor: "grey"
        }






        return (
            <div >
                <p className=" h1 font-weight-bold text-warning text-center py-3">Safe Work Permit Form</p>
                <div className="container" style={container}>
                    <form>
                        <div className="row py-1  text-white">
                            <div className="col-lg-3 col-md-6 col-sm-12  ">
                                <label for="confinedspace"> CONFINED SPACE</label>
                                <input type="checkbox" id="confinedspace" />
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-12 ">
                                <label for="hotwork"> HOT WORK</label>
                                <input type="checkbox" id="hotwork" />
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-12 ">
                                <label for="excavation"> EXCAVATION</label>
                                <input type="checkbox" id="excavation" />
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-12  ">
                                <label for="de_energization">DE-ENERGIZATION (LOTO)</label>
                                <input type="checkbox" id="de_energization" />
                            </div>


                        </div>


                        <span className="row py-1  bg-danger text-white font-weight-bold ">PART I:WORK DETAILS</span>
                        <div className="row py-1 text-white">
                            <div className="col-lg-4 col-md-6 col-sm-12  ">
                                <label for="snc_lavalin"> SNC-Lavalin</label>
                                <input type="checkbox" id="snc_lavalin" />
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12 ">
                                <label for="sub_contractor">Sub-Contractor</label>
                                <input type="checkbox" id="sub_contractor" />
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12 ">
                                <label >Crew size(#)</label>
                                <input type="number" id="crewsize" min="1" max="5" /></div>

                        </div>
                        <div className="row py-1 text-white">
                            <div className="col-md-4 col-sm-12">

                                Date issued:
                                          <input type="date" id="issued" name="issued" />

                            </div>
                            <div className="col-md-4 col-sm-12 ">

                                <div>  <label for="date_expired">Date expired:</label>
                                    <input type="date" id="expired" name="expired" /></div>

                            </div> <div className="  col-md-4 col-sm-12">
                                <label for="date_issued">Date extended:</label>
                                <input type="date" id="issued" name="issued" />

                            </div>
                        </div>
                        <div className="row py-1 text-white ">
                            <div className=" col-md-6 col-sm-12 input-group input-group-sm ">
                                <div className="input-group-prepend">
                                    <span className="input-group-text" id="companyname">company name</span>
                                </div>
                                <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" />
                            </div>

                            <div className="col-md-6 col-sm-12 input-group input-group-sm ">
                                <div className="input-group-prepend">
                                    <span className="input-group-text" id="extended by">extended by:</span>
                                </div>
                                <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" />
                            </div>


                        </div>
                        <div className="row py-1  ">
                            <div className="col-md-6 col-sm-12 input-group input-group-sm  ">
                                <div className="input-group-prepend">
                                    <span className="input-group-text" id="meeting_point">Emergency meeting point:</span>
                                </div>
                                <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" />
                            </div>
                            <div className="col-md-6 col-sm-12 input-group input-group-sm ">
                                <div className="input-group-prepend">
                                    <span className="input-group-text" id="location">Location:</span>
                                </div>
                                <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" />
                            </div>
                        </div>
                        <div className="row py-1 ">
                            <div className="col input-group input-group-sm ">
                                <div className="input-group-prepend">
                                    <span className="input-group-text" id="meeting_point">Description of work to be done: </span>
                                </div>
                                <textarea className="form-control" aria-label="With textarea"></textarea></div>
                        </div>

                        <center><button className="   row mt-4 btn btn-danger btn-transition font-weight-bold py" type="submit">Submit form</button></center>



                    </form>

                </div>
            </div >


        )



    }

}
export default Form;
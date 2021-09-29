import React, { Component } from 'react';
import axios from 'axios';
import './transport.css';



export default class AddTransport extends Component {
  constructor(props) {
    super(props);

    this.onChangeDriverName = this.onChangeDriverName.bind(this);
    this.onChangeDriverNIC = this.onChangeDriverNIC.bind(this);
    this.onChangeVehicleNo = this.onChangeVehicleNo.bind(this);
    this.onChangeDriverMobileNumber = this.onChangeDriverMobileNumber.bind(this);
    this.onChangeTransportCovidPatient = this.onChangeTransportCovidPatient.bind(this);
    this.onChangeTransportNormalPatient = this.onChangeTransportNormalPatient.bind(this);
   
    this.state = {
      drivername: '',
      drivernic: '',
      vehicleno: '',
      drivermobilenumber: '',
      transportcovidpatient: '',
      transportnormalpatient: '',
     
  }
}
onChangeDriverName(e) {
    this.setState({
        drivername: e.target.value
    });
  }
  
  onChangeDriverNIC(e) {
    this.setState({
        drivernic: e.target.value
    });
  }


onChangeVehicleNo(e) {
  this.setState({
      vehicleno: e.target.value
  });
}

onChangeDriverMobileNumber(e) {
  this.setState({
      drivermobilenumber: e.target.value
  });
}

onChangeTransportCovidPatient(e) {
  this.setState({
     transportcovidpatient: e.target.value
  });
}

onChangeTransportNormalPatient(e) {
this.setState({
    transportnormalpatient: e.target.value
});
}


onSubmit(e) {
  e.preventDefault();

  const transport = {
    drivername: this.state.drivername,
    drivernic: this.state.drivernic,
    vehicleno: this.state.vehicleno,
    drivermobilenumber: this.state.drivermobilenumber,
    transportcovidpatient: this.state.transportcovidpatient,
    transportnormalpatient: this.state.transportnormalpatient
    
}

console.log(transport);

axios.post('http://localhost:5000/transport/add', transport)
            .then(res => console.log(res.data));

window.location = '/viewTransport'; 

}

  render() {
    return (
      <div className='addTransport'>
          <br />
      <div className='container' id="addTransportForm">
          <h3 className="addTransportTitle">ADD NEW VEHICLE</h3>
          <br />
          <form onSubmit={this.onSubmit}>
              <div className="form-transportgroup">
                  <label>DriverName: </label>
                  <input type="text"
                      required
                      className="form-control"
                      value={this.state.drivername}
                      onChange={this.onChangeDriverName}
                  />
              </div>
              <div className="form-transportgroup">
                  <label>DriverNIC: </label>
                  <input type="text"
                      required
                      maxLength="10"
                      minLength="10"
                      className="form-control"
                      value={this.state.drivernic}
                      onChange={this.onChangeDriverNIC}
                  />
              </div>
             
              <div className="form-transportgroup">
                  <label>VehicleNo: </label>
                  <input type="text"
                      required
                      className="form-control"
                      value={this.state.vehicleno}
                      onChange={this.onChangeVehicleNo}
                  />
              </div>
            
              <div className="form-transportgroup">
                  <label>DriverMobileNumber: </label>
                  <input type="text"
                      required
                      className="form-control"
                      value={this.state.drivermobilenumber}
                      pattern ="[0-9]*"
                      maxLength="10"
                      minLength="10"
                      onChange={this.onChangeDriverMobileNumber}
                  />
              </div>
              <div className="form-transportgroup">
                  <label>TransportCovidPatient: </label>
                  <input type="text"
                      required
                      className="form-control"
                      value={this.state.transportcovidpatient}
                      onChange={this.onChangeTransportCovidPatient}
                  />
              </div>
              <div className="form-transportgroup">
                  <label>TransportNormalPatient: </label>
                  <input type="text"
                      required
                      className="form-control"
                      value={this.state.transportnormalpatient}
                      onChange={this.onChangeTransportNormalPatient}
                  />
              </div>
              
              <br />
              <div className="form-transportgroup">
                  <input type="submit" value="ADD VEHICLE" className="btn btn-primary" />
                  <br />
              </div>
          </form>
      </div>
  </div>
)
    
    }
  }
import React, { Component } from "react";
import InputGroup from "../common/InputGroup";
import { connect } from "react-redux";

class MyProfile extends Component {
  constructor(props) {
    super(props);
    const user = props.auth.user;
    this.state = {
      name: user.name,
      address: "NIT Kurukshetra",
      aadhar: user.aadhar,
      mobile: user.mobile,
      errors: {}
    }
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  render() {
    return (
      <section class="mt-5 pt-5  profile--bck">
        <div class="container-fluid">
          <div class="row my-4 align-items-center justify-content-center">
            <div class="col-md-4" className="editProfileImgContainer">
              <img src="assets/img/profilefront.jpg" class="card-img m-2" />
            </div>
            <div class="col-md-4">
              <form action="#" class="p-md-4 mx-3">
                <InputGroup
                  id="name"
                  label="Name"
                  type="text"
                  name="name"
                  placeholder="Enter Name"
                  value={this.state.name}
                  onChange={this.onChange}
                  error={this.state.errors.name}
                  required
                />
                <InputGroup
                  id="address"
                  label="Address"
                  type="text"
                  name="address"
                  placeholder="Enter Address"
                  value={this.state.address}
                  onChange={this.onChange}
                  error={this.state.errors.address}
                  required
                />
                <InputGroup
                  id="aadhar"
                  label="Aadhar Number"
                  type="text"
                  name="aadhar"
                  placeholder="Enter Aadhar Number"
                  value={this.state.aadhar}
                  onChange={this.onChange}
                  error={this.state.errors.aadhar}
                  required
                />
                <InputGroup
                  id="mobile"
                  label="Mobile Number"
                  type="text"
                  name="mobile"
                  placeholder="Enter Mobile Number"
                  value={this.state.mobile}
                  onChange={this.onChange}
                  error={this.state.errors.mobile}
                  required
                />
                <button class="btn-success form-control">Save Changes</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(MyProfile);

import React, { Component } from "react";
import "./Header.css";
import axios from 'axios'

class Header extends Component {
  state = {
    email: "",
    password: ""
  };
  handlesubmit = event => {
    event.preventDefault();
    const {email,password}=this.state
    const detail={email,password}
    // const details={detail}
    console.log(detail)
    axios.post('/create',detail).then(()=>console.log('created')).catch(err=>console.log(err))
    // console.log("efefe")
    // console.log(this.state.email,this.state.password)

  };
  handleinputchange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    return (
      <div>
        <div className="container mt-5">
          <div className="d-flex justify-content-center align-items-center">
            <form onSubmit={this.handlesubmit}>
              <div className="form-group">
                <label>Email address</label>
                <input
                  type="email"
                  name="email"
                  onChange={this.handleinputchange}
                  className="form-control"
                  placeholder="Enter email"
                />
              </div>
              <div className="form-group">
                <label>Password</label>
                <input
                  type="password"
                  onChange={this.handleinputchange}
                  className="form-control"
                  name="password"
                  placeholder="Password"
                />
              </div>

              <button type="submit" className="btn btn-primary">
                Submit
              </button>
              <div className="center mt-2">OR</div>
              <div className="btn btn-block btn-danger">
                <a href="/auth/google" className="login">
                  LOGIN WITH GOOGLE
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
export default Header;

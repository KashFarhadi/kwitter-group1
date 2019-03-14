import React, { Component } from "react";
import { connect } from "react-redux";
import { loginThenGoToUserProfile as login } from "../actions";
import Spinner from "react-spinkit";
import { Link } from "react-router-dom";
import {
  Button,
  Form,
  Grid,
  Header,
  Image,
  Input,
  Segment
} from "semantic-ui-react";
import logo from "../logo.svg";

class LoginForm extends Component {
  state = {
    username: "",
    password: ""
  };

  handleLogin = event => {
    this.props.login({
      username: this.state.username,
      password: this.state.password
    });
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { isLoading, err } = this.props;
    return (
      <Grid
        textAlign="center"
        style={{ height: "100%" }}
        verticalAlign="middle"
      >
        <Grid.Column style={{ maxWidth: 450 }}>
          <div />
          <Header as="h1" color="blue" textAlign="center">
            Behold, Kwitter has Risen!
          </Header>
          <Image src={logo} size="medium" centered />
          <Form onSubmit={this.handleLogin} size="large">
            <Segment stacked color="grey">
              <Form.Field
                label="Username:"
                required
                placeholder="Username"
                type="text"
                control={Input}
                autofocus
                onChange={this.handleChange}
              />
              <Form.Field
                htmlFor="password"
                label="Password:"
                required
                placeholder="Password"
                type="password"
                control={Input}
                onChange={this.handleChange}
              />
              <Button.Group>
                {/* redirect */}
                {/* connected react router */}
                <Button
                  type="submit"
                  disabled={isLoading}
                  onClick={this.handleLogin}
                  positive
                  size="large"
                  to="/profile"
                >
                  Login now you Sucker!
                </Button>
                <Button.Or />
                {/* <Link to="/RegisterForm"> 
                  <Button size= "large" color="blue">
                    You're not on Kwitter yet son? Register Here!
                     </Button>
                   </Link> */}
              </Button.Group>
              <div> {this.props.result} </div>
            </Segment>
          </Form>
          {isLoading && <Spinner name="circle" color="blue" />}
          {err && <p style={{ color: "red" }}>{err}</p>}
        </Grid.Column>
      </Grid>
    );
  }
}

const mapStateToProps = state => {
  return {
    result: state.loginResult
  };
};
const mapDispatchToProps = dispatch => {
  return {
    login: loginData => dispatch(login(loginData))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginForm);

/* 
<h1>Login</h1>
        <form onSubmit={this.handleLogin}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            autoFocus
            required
            onChange={this.handleChange}
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            required
            onChange={this.handleChange}
          />
          <button type="submit" disabled={isLoading}>
            Login
          </button>
        </form>
        {isLoading && <Spinner name="circle" color="blue" />}
        {err && <p style={{ color: "red" }}>{err}</p>}
      </React.Fragment>
    );
  }
}
*/

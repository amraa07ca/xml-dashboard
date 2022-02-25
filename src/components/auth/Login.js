import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Login-Register.scss';
import classnames from "classnames";

import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../../actions/authActions";

import {
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBMask,
    MDBInput,
    MDBIcon,
    MDBView,
    MDBBtn
} from 'mdbreact';

class Login extends Component {
    constructor() {
        super();
        this.state = {
            email: "test@test.com",
            password: "123456",
            errors: {}
        }
    }

    UNSAFE_componentWillReceiveProps(nextProps) {
        if (nextProps.auth.isAuthenticated) {
            this.props.history.push("/home");
        }
        if (nextProps.errors) {
            this.setState({
                errors: nextProps.errors
            })
        }
    }

    UNSAFE_componentWillMount() {
        if(this.props.auth.isAuthenticated) {
            this.props.history.push("/home");
        }
    }

    onChange = e => {
        this.setState({ [e.target.id]: e.target.value });
    };
    // validateForm = () => {
    //     return this.state.email.length > 0 && this.state.password.length > 0;
    // };
    handleLoginSubmit = (event) => {
        event.preventDefault();
        const userData = {
            email: this.state.email,
            password: this.state.password
        };
        this.props.loginUser(userData);
    };

    render() {
        const { errors } = this.state;
        return (
            <div className='classic-form-page' id='login'>
                <MDBView>
                    <MDBMask
                        className='d-flex justify-content-center align-items-center'
                        overlay='stylish-strong'
                    >
                        <MDBContainer>
                            <MDBRow className='justify-content-around'>
                                <MDBCol md='3' className='align-self-center'>
                                    <img
                                        src='/assets/logo/GKA-Dashboard-Logo-Login.svg'
                                        className='img-fluid'
                                        alt="Gka Dashboard"
                                    />
                                </MDBCol>
                                <MDBCol md='6'>
                                    <MDBCard>
                                        <MDBCardBody>
                                            <div className='form-header gka-gradient'>
                                                <h3 className='m-0'>
                                                    <MDBIcon
                                                        icon='user'
                                                        className='mt-2 mb-2 mr-3 text-white'
                                                    />
                                                    Log in
                                                </h3>
                                            </div>
                                            <form onSubmit={this.handleLoginSubmit} noValidate>
                                                <MDBRow>
                                                    <MDBCol sm='12'>
                                                        <MDBInput
                                                            autoFocus
                                                            type='email'
                                                            id='email'
                                                            label='Your email'
                                                            icon='user'
                                                            iconClass='white-text'
                                                            containerClass={classnames("form-sm", { invalid: errors.email || errors.passwordincorrect || errors.emailnotfound })}
                                                            value={this.state.email}
                                                            onChange={this.onChange}
                                                        />
                                                        <div className="error-message">
                                                            {errors.email}
                                                            {errors.emailnotfound}
                                                            {errors.passwordincorrect}
                                                        </div>
                                                    </MDBCol>
                                                    <MDBCol sm='12'>
                                                        <MDBInput
                                                            type='password'
                                                            id='password'
                                                            label='Your password'
                                                            icon='lock'
                                                            iconClass='white-text'
                                                            containerClass={classnames("form-sm", { invalid: errors.password || errors.passwordincorrect })}
                                                            value={this.state.password}
                                                            onChange={this.onChange}
                                                        />
                                                        <div className="error-message">
                                                            {errors.password}
                                                            {errors.passwordincorrect}
                                                        </div>
                                                    </MDBCol>
                                                </MDBRow>
                                                <div className='text-center mt-3 black-text'>
                                                    <MDBBtn className='gka-gradient' size='lg' type='submit'>
                                                        Log In
                                                    </MDBBtn>
                                                    <hr />
                                                </div>
                                            </form>
                                            <div className='inline-ul text-center d-flex justify-content-center'>
                                                <a href='!#'>
                                                    <MDBIcon
                                                        fab
                                                        icon='twitter'
                                                        size='lg'
                                                        className='p-2 m-2  white-text'
                                                    />
                                                </a>
                                                <a href='!#'>
                                                    <MDBIcon
                                                        fab
                                                        icon='linkedin'
                                                        size='lg'
                                                        className='p-2 m-2 white-text'
                                                    />{' '}
                                                </a>
                                                <a href='!#'>
                                                    <MDBIcon
                                                        fab
                                                        icon='instagram'
                                                        size='lg'
                                                        className='p-2 m-2 white-text'
                                                    />
                                                </a>
                                            </div>
                                            <div className='text-center text-white'>

                                                Don’t have an account? <Link to='/register' className='text-white'><u>Sign up</u></Link>
                                            </div>
                                        </MDBCardBody>
                                    </MDBCard>
                                </MDBCol>
                            </MDBRow>
                        </MDBContainer>
                    </MDBMask>
                </MDBView>
            </div>
        );
    }
}

Login.propTypes = {
    loginUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
});

export default connect(
    mapStateToProps,
    { loginUser }
)(Login);

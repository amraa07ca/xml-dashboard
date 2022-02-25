import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import './Login-Register.scss';
import classnames from "classnames";

import PropTypes from "prop-types";
import { connect } from "react-redux"
import { registerUser } from "../../actions/authActions";

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

class Register extends Component {
    constructor() {
        super();
        this.state = {
            email: "test1@test.com",
            password: "123456",
            password2: "123456",
            companyName: "Gka advertising",
            gkaToken: "kwHp28GeEMWwT8vqfrEF",
            errors: {}
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.errors) {
            this.setState({
                errors: nextProps.errors
            });
        }
    }

    onChange = e => {
        this.setState({ [e.target.id]: e.target.value });
    };

    registerHandler = (event) => {
        event.preventDefault();

        console.log('Handled');
        const newUser = {
            email: this.state.email,
            password: this.state.password,
            password2: this.state.password2,
            companyName: this.state.companyName,
            gkaToken: this.state.gkaToken
        }

        this.props.registerUser(newUser, this.props.history);
    }
    render() {
        const { errors } = this.state;
        return (
            <div className='classic-form-page' id='register'>
                <MDBView>
                    <MDBMask
                        className='d-flex justify-content-center'
                        overlay='stylish-strong'
                    >
                        <MDBContainer>
                            <MDBRow>
                                <MDBCol md='2' className='logo'>
                                    <img
                                        src='/assets/logo/GKA-Dashboard-Logo-Login.svg'
                                        className='img-fluid'
                                        alt="Gka Dashboard"
                                    />
                                </MDBCol>
                            </MDBRow>
                            <MDBRow className='justify-content-around'>
                                <MDBCol md='12'>
                                    <MDBCard>
                                        <MDBCardBody>
                                            <div className='form-header gka-gradient'>
                                                <h3 className='m-0'>
                                                    <MDBIcon
                                                        icon='user'
                                                        className='mt-2 mb-2 mr-3 text-white'
                                                    />
                                                    Sign Up
                                                </h3>
                                            </div>
                                            <form onSubmit={this.registerHandler}>
                                                <MDBRow>
                                                    <MDBCol md='4'>
                                                        <MDBInput
                                                            autoFocus
                                                            type='email'
                                                            id='email'
                                                            label='Your email'
                                                            icon='user'
                                                            iconClass='white-text'
                                                            containerClass={classnames("form-sm", { invalid: errors.email })}
                                                            value={this.state.email}
                                                            onChange={this.onChange}
                                                            required
                                                        />
                                                        <div className="error-message">
                                                            {errors.email}
                                                        </div>
                                                    </MDBCol>
                                                    <MDBCol md='4'>
                                                        <MDBInput
                                                            type='password'
                                                            id='password'
                                                            label='Your password'
                                                            icon='lock'
                                                            iconClass='white-text'
                                                            containerClass={classnames("form-sm", { invalid: errors.password })}
                                                            value={this.state.password}
                                                            onChange={this.onChange}
                                                            required
                                                        />
                                                        <div className="error-message">
                                                            {errors.password}
                                                        </div>
                                                    </MDBCol>
                                                    <MDBCol md='4'>
                                                        <MDBInput
                                                            type='password'
                                                            id='password2'
                                                            label='Confirm password'
                                                            icon='lock'
                                                            iconClass='white-text'
                                                            containerClass={classnames("form-sm", { invalid: errors.password2 })}
                                                            value={this.state.password2}
                                                            onChange={this.onChange}
                                                        />
                                                        <div className="error-message">
                                                            {errors.password2}
                                                        </div>
                                                    </MDBCol>
                                                    <MDBCol md='4'>
                                                        <MDBInput
                                                            type='text'
                                                            id='companyName'
                                                            label='Company name'
                                                            icon='briefcase'
                                                            iconClass='white-text'
                                                            containerClass={classnames("form-sm", { invalid: errors.companyName })}
                                                            value={this.state.companyName}
                                                            onChange={this.onChange}
                                                        />
                                                        <div className="error-message">
                                                            {errors.companyName}
                                                        </div>
                                                    </MDBCol>
                                                    <MDBCol md='4'>
                                                        <MDBInput
                                                            type='text'
                                                            id='gkaToken'
                                                            label='Gka Token'
                                                            icon='dollar-sign'
                                                            iconClass='white-text'
                                                            containerClass={classnames("form-sm", { invalid: errors.gkaToken })}
                                                            value={this.state.gkaToken}
                                                            onChange={this.onChange}
                                                        />
                                                        <div className="error-message">
                                                            {errors.gkaToken}
                                                        </div>
                                                    </MDBCol>
                                                </MDBRow>

                                                <div className='text-center mt-3 black-text'>
                                                    <MDBBtn className='gka-gradient' size='lg' type='submit'>
                                                        Sign Up
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
                                                Already have an account? <Link to='/login' className='text-white'><u>Log In</u></Link>
                                            </div>
                                        </MDBCardBody>
                                    </MDBCard>
                                </MDBCol>
                            </MDBRow>
                        </MDBContainer>
                    </MDBMask>
                </MDBView>
            </div>
        )
    }
}

Register.propTypes = {
    registerUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
});

export default connect(
    mapStateToProps,
    { registerUser }
)(withRouter(Register));
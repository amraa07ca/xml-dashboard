import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../actions/authActions";

import {
    MDBNavbar,
    MDBNavbarNav,
    MDBIcon,
    MDBDropdown,
    MDBDropdownToggle,
    MDBDropdownMenu,
    MDBDropdownItem,
} from 'mdbreact';

class TopNavigation extends Component {
    onLogoutClick = (e) => {
        e.preventDefault();
        this.props.logoutUser();
    }

    render() {
        return (
            <Router>
                <MDBNavbar
                    className='flexible-MDBNavbar'
                    scrolling
                    fixed='top'
                    style={{ zIndex: 3 }}
                >
                    <MDBNavbarNav expand='sm' right style={{ flexDirection: 'row' }}>
                        <MDBDropdown>
                            <MDBDropdownToggle nav caret>
                                <MDBIcon icon='user' />{' '}
                                <span className='d-none d-md-inline'>Profile</span>
                            </MDBDropdownToggle>
                            <MDBDropdownMenu right style={{ minWidth: '200px' }}>
                                <MDBDropdownItem href='#!' onClick={this.onLogoutClick}>Log Out</MDBDropdownItem>
                                <MDBDropdownItem href='#!'>My Account</MDBDropdownItem>
                            </MDBDropdownMenu>
                        </MDBDropdown>
                    </MDBNavbarNav>
                </MDBNavbar>
            </Router>
        )
    }
}

TopNavigation.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(
    mapStateToProps,
    { logoutUser }
)(TopNavigation);

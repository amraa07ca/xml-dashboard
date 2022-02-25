import React from 'react';
import {
    MDBSideNavLink,
    MDBSideNavNav,
    MDBSideNav,
    MDBIcon
} from 'mdbreact';

class SideNavigation extends React.Component {
    
    render() {
        const { onLinkClick } = this.props;
        return (
            <div className='white-skin'>
                <MDBSideNav
                    className='side-nav-logo'
                    logo='/assets/logo/GKA-Dashboard-Logo.svg'
                    fixed
                >
                    <MDBSideNavNav>
                        <MDBSideNavLink topLevel to='/properties' onClick={onLinkClick}>
                            <MDBIcon icon='th-large mr-2' />
                            Properties
                        </MDBSideNavLink>
                        <MDBSideNavLink topLevel to='/communities' onClick={onLinkClick}>
                            <MDBIcon icon='th-large mr-2' />
                            Communities
                        </MDBSideNavLink>
                        <MDBSideNavLink topLevel to='/xml-station' onClick={onLinkClick}>
                            <MDBIcon icon='th-large mr-2' />
                            XML Station
                        </MDBSideNavLink>
                    </MDBSideNavNav>
                </MDBSideNav>
            </div>
        );
    }
}

export default SideNavigation;

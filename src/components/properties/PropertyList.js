import React from 'react';

import {
    MDBCol,
    MDBCard,
    MDBView,
    MDBMask,
    MDBCardBody,
    MDBCardTitle,
    MDBIcon,
} from 'mdbreact';

const PropertyList = (props) => {

    return (
        <>
            <MDBCol className='col-custom property-list'>
                <MDBCard wide>
                    <MDBView waves cascade hover>
                        <img
                            src='/assets/listingImg.jpg'
                            className='img-fluid'
                            alt={props.property.name}
                        />
                        <MDBMask overlay='white-slight' tag='a' />
                    </MDBView>
                    <MDBCardBody className='' cascade>
                        <MDBCardTitle tag='h5' className='property-name'>
                            {props.property.name}
                        </MDBCardTitle>
                        <hr />
                        <div className='d-flex justify-content-between'>
                            <div>
                                <button className='icon-btn text-grey' onClick={props.deleteOnClick}>
                                    <MDBIcon icon='trash-alt' />
                                </button>
                            </div>
                            <div>
                                <button className='icon-btn text-grey' onClick={props.editOnClick}>
                                    <MDBIcon icon='edit' />
                                </button>
                            </div>
                        </div>
                    </MDBCardBody>
                </MDBCard>
            </MDBCol>
        </>
    )
}

export default PropertyList;
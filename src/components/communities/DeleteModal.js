import React from 'react';
import axios from 'axios';

import {
    MDBModal,
    MDBModalBody,
    MDBBtn,
} from 'mdbreact';

const DeleteModal = (props) => {

    const deleteOnSubmit = (event, id) => {
        event.preventDefault();
        axios.delete('/communities/' + id)
            .then(res => {
                console.log(res.data);
                props.toggle();
            })
    }

    return (
        <MDBModal isOpen={props.isOpen} toggle={props.toggle} className='property-modal'>
            <MDBModalBody>
                <form onSubmit={e => deleteOnSubmit(e, props.idDelete)} >
                    <div className="text-center py-4 mt-3">
                        <h6 className='mb-3'>Are you sure?</h6>
                        <MDBBtn color="cyan" onClick={props.cancel}>
                            Cancel
                        </MDBBtn>
                        <MDBBtn color="cyan" type="submit">
                            Delete
                        </MDBBtn>
                    </div>
                </form>
            </MDBModalBody>
        </MDBModal>
    )
}

export default DeleteModal;
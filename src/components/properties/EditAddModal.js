import React from 'react';
import axios from 'axios';

import {
    MDBModal,
    MDBModalBody,
    MDBInput,
    MDBBtn
} from 'mdbreact';

const EditAddModal = (props) => {

    const editAddOnSubmit = (event) => {
        event.preventDefault();
        if(props.property._id === undefined) {
            axios.post('/properties/'+localStorage.userID+'/add', props.property)
                .then(res => {
                    console.log(res.data);
                    props.toggle();
                });
        } else {
            axios.put('/properties/update/' + props.property._id, props.property)
                .then(res => {
                    console.log(res.data);
                    props.toggle();
                });
        }
    }

    return (
        <MDBModal isOpen={props.editAddModal} toggle={props.toggle} className='property-modal'>
            <MDBModalBody>
                <form onSubmit={e => editAddOnSubmit(e)}>
                    <MDBInput
                        label='Property Name'
                        containerClass='form-sm'
                        value={props.property.name}
                        onChange={props.onChange}
                    />
                    <div className="text-center py-4 mt-3">
                        <MDBBtn color="cyan" type="submit">
                            Save
                        </MDBBtn>
                    </div>
                </form>
            </MDBModalBody>
        </MDBModal>
    );
}

export default EditAddModal;
import React, { useState, useEffect } from 'react';
import Dropzone from 'react-dropzone';
import 'react-dropzone-uploader/dist/styles.css'
import DropzoneUploader from 'react-dropzone-uploader';
import axios from 'axios';
import classnames from "classnames";

import {
    MDBModal,
    MDBModalBody,
    MDBInput,
    MDBBtn,
    MDBNav,
    MDBNavItem,
    MDBNavLink,
    MDBIcon,
    MDBSelect
} from 'mdbreact';

const EditAddModal = (props) => {
    const [disabledTab, setDisabledTab] = useState(true);
    const [errors, setErrors] = useState({});
    const [activeItem, setActiveItem] = useState(1);
    const [images, setImages] = useState([]);
    const [state, setState] = useState([
        {
            checked: true,
            text: "MD",
            value: "MD"
        },
        {
            text: "VA",
            value: "VA"
        }
    ]);

    // specify upload params and url for your files
    const getUploadParams = ({ meta }) => { return { url: 'https://httpbin.org/post' } }
    
    // called every time a file's `status` changes
    const handleChangeStatus = ({ meta, file }, status) => { console.log(status, meta, file) }
    
    // receives array of files that are done uploading when submit button is clicked
    const handleSubmit = (files) => { console.log(files.map(f => f.meta)) }
    
    const initialize = (event) => {
        event.preventDefault(event);

        axios.post('/communities/' + localStorage.userID + '/add', props.community)
            .then(res => {
                console.log(res.data);
                // setDisabledTab(false);
                // setActiveItem(2);
            }).catch(err => {
                setErrors(err.response.data);
            });
    }

    const editAddOnSubmit = (event) => {
        event.preventDefault(event);
        axios.put('/communities/update/' + props.community._id, props.community)
            .then(res => {
                console.log(res.data);
                props.toggle();
            })
    }

    const handleOnDrop = (acceptedFiles) => {

        acceptedFiles = acceptedFiles.map(file => Object.assign(file, {
            preview: URL.createObjectURL(file)
        }));

        setImages([...images, ...acceptedFiles]);

        var formData = new FormData();

        acceptedFiles.forEach(file => {
            formData.append('images', file);
        });

        axios.post('/upload/' + localStorage.userID + '/' + props.community._id, formData)
            .then(res => {
                // setImages([...images, ...res.data.files]);
                console.log(res);
            });
    }

    useEffect(() => {
        setImages(props.community.gallery);
        if(props.community._id) {
            setDisabledTab(false);
        } else {
            setDisabledTab(true);
        }
    }, [props]);
    
    return (
        <MDBModal isOpen={props.editAddModal} toggle={props.toggle} size="fluid" className="editAddModal">
            <MDBModalBody>
                <MDBNav tabs className="nav-justified modalNav">
                    <MDBNavItem>
                        <MDBNavLink to="#" activeClassName="false" active={activeItem === 1} onClick={() => setActiveItem(1)} role="tab" >
                            <MDBIcon icon="home" /> Basic
                        </MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem>
                        <MDBNavLink to="#" activeClassName="false" active={activeItem === 2} disabled={disabledTab} onClick={() => setActiveItem(2)} role="tab" >
                            <MDBIcon icon="images" /> Images
                        </MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem>
                        <MDBNavLink to="#" activeClassName="false" active={activeItem === 3} disabled={disabledTab} onClick={() => setActiveItem(3)} role="tab" >
                            <MDBIcon icon="envelope" /> Attachment
                        </MDBNavLink>
                    </MDBNavItem>
                </MDBNav>
                <div className="content card d-flex flex-column">
                    <form
                        id="modalForm"
                        className="flex-grow-1"
                        onSubmit={e => editAddOnSubmit(e)}
                        autoComplete="off"
                    >
                        {activeItem === 1 && (
                            <div className="container-fluid">
                                <div className="row">
                                    <div className="col-md-4 input-wrap">
                                        <MDBInput
                                            label='Community Name*'
                                            id='communityName'
                                            containerClass={classnames("form-sm", { invalid: errors.communityName })}
                                            value={props.community.communityName}
                                            onChange={props.onChange}
                                            autoComplete="new-password"
                                        />
                                        <div className="error-message">
                                            {errors.communityName}
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-12 divider">
                                        <hr></hr>
                                        <h6>Community Location</h6>
                                    </div>
                                </div>
                                {/* <div className="row">
                                    <div className="col-md-6 input-wrap">
                                        <MDBInput
                                            label='Street Address 1*'
                                            id='streetAddress1'
                                            containerClass={classnames("form-sm", { invalid: errors.streetAddress1 })}
                                            value={props.community.address.streetAddress1}
                                            onChange={props.onChange}
                                            autoComplete="new-password"
                                        />
                                        <div className="error-message">
                                            {errors.streetAddress1}
                                        </div>
                                    </div>
                                    <div className="col-md-6 input-wrap">
                                        <MDBInput
                                            label='Street Address 2'
                                            id='streetAddress2'
                                            containerClass="form-sm"
                                            value={props.community.address.streetAddress2}
                                            onChange={props.onChange}
                                            autoComplete="new-password"
                                        />
                                    </div>
                                    <div className="col-md-4 input-wrap">
                                        <MDBInput
                                            label='City*'
                                            id='city'
                                            containerClass={classnames("form-sm", { invalid: errors.city })}
                                            value={props.community.address.city}
                                            onChange={props.onChange}
                                            autoComplete="new-password"
                                        />
                                        <div className="error-message">
                                            {errors.city}
                                        </div>
                                    </div>
                                    <div className="col-md-4 input-wrap">
                                        <MDBSelect
                                            options={state}
                                            id='state'
                                            className={classnames("form-sm", { invalid: errors.state })}
                                            selected="Choose your state*"
                                            label="State"
                                            getTextContent={props.handleStateChange}
                                            value={props.community.address.state}
                                        />
                                        <div className="error-message">
                                            {errors.state}
                                        </div>
                                    </div>
                                    <div className="col-md-4 input-wrap">
                                        <MDBInput
                                            label='Zip*'
                                            id='zip'
                                            containerClass={classnames("form-sm", { invalid: errors.zip })}
                                            value={props.community.address.zip}
                                            onChange={props.onChange}
                                            autoComplete="new-password"
                                        />
                                        <div className="error-message">
                                            {errors.zip}
                                        </div>
                                    </div>
                                </div> */}
                                {/* <div className="row">
                                    <div className="col-md-4 input-wrap">
                                        <MDBInput
                                            label='Latitude*'
                                            id='latitude'
                                            containerClass={classnames("form-sm", { invalid: errors.latitude })}
                                            value={props.community.address.latitude}
                                            onChange={props.onChange}
                                            autoComplete="new-password"
                                        />
                                        <div className="error-message">
                                            {errors.latitude}
                                        </div>
                                    </div>
                                    <div className="col-md-4 input-wrap">
                                        <MDBInput
                                            label='Longitude*'
                                            id='longitude'
                                            containerClass={classnames("form-sm", { invalid: errors.longitude })}
                                            value={props.community.address.longitude}
                                            onChange={props.onChange}
                                            autoComplete="new-password"
                                        />
                                        <div className="error-message">
                                            {errors.longitude}
                                        </div>
                                    </div>
                                </div> */}
                                {/* <div className="row">
                                    <div className="col-12 divider">
                                        <hr></hr>
                                        <h6>Community Sales Contact Info</h6>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-3 input-wrap">
                                        <MDBInput
                                            label='Email*'
                                            id='email'
                                            containerClass={classnames("form-sm", { invalid: errors.email })}
                                            value={props.community.salesAgent.email}
                                            onChange={props.onChange}
                                            autoComplete="new-password"
                                        />
                                        <div className="error-message">
                                            {errors.email}
                                        </div>
                                    </div>
                                    <div className="col-md-3 input-wrap">
                                        <MDBInput
                                            label='Phone Number'
                                            id='phoneNumber'
                                            containerClass={classnames("form-sm", { invalid: errors.phoneNumber })}
                                            value={props.community.salesAgent.phoneNumber}
                                            onChange={props.onChange}
                                            autoComplete="new-password"
                                        />
                                        <div className="error-message">
                                            {errors.phoneNumber}
                                        </div>
                                    </div>
                                </div> */}
                            </div>
                        )}
                    </form>
                    {activeItem === 2 && (
                        <>
                        </>
                        // <Dropzone onDrop={(acceptedFiles) => handleOnDrop(acceptedFiles)}>
                        //     {({ getRootProps, getInputProps }) => (
                        //         <div {...getRootProps()} className="h-100 dropZone">
                        //             <div className="row align-items-center">
                        //                 {images.map((image, key) => {
                        //                     return (
                        //                         <div className="col-md-1" key={key}>
                        //                             <div>
                        //                                 <img src={image['preview'] ? image['preview'] : image['location']} className="img-fluid w-100" />
                        //                             </div>
                        //                         </div>
                        //                     )
                        //                 })}
                        //             </div>
                        //         </div>
                        //     )}
                        // </Dropzone>
                        // <DropzoneUploader
                        //     // PreviewComponent={props => (<div>{console.log(props)}</div>)}
                        //     getUploadParams={getUploadParams}
                        //     onChangeStatus={handleChangeStatus}
                        //     onSubmit={handleSubmit}
                        //     accept="image/*,audio/*,video/*"
                        // >
                        // </DropzoneUploader>
                    )}
                    {activeItem !== 1 && (
                        <div className="text-center py-4 mt-3">
                            <MDBBtn type="submit" form="modalForm" className="bg-blue">
                                Save
                            </MDBBtn>
                        </div>
                    )}
                    {activeItem === 1 && (
                        <div className="text-center py-4 mt-3">
                            <MDBBtn id="initialize" className="bg-blue" onClick={(e) => initialize(e)}>
                                Next
                            </MDBBtn>
                        </div>
                    )}
                </div>
            </MDBModalBody>
        </MDBModal>
    )
};

export default EditAddModal;
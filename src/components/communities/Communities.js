import React, { useState, useEffect } from 'react';
import axios from 'axios';
import socketIOClient from "socket.io-client";

import {
    MDBRow,
    MDBBtn,
    MDBIcon
} from 'mdbreact';

import CommunityList from './CommunityList';
import EditAddModal from './EditAddModal';
import DeleteModal from './DeleteModal';

const Communities = () => {
    const socket = socketIOClient('http://localhost:5000');

    const [editAddModal, setEditAddModal] = useState(false);
    const [deleteModal, setDeleteModal] = useState(false);
    const [idDelete, setIdDelete] = useState('');
    const [communitiesList, setCommunitiesList] = useState([]);
    
    const [community, setCommunity] = useState({
        // communityName: String,
        // streetAddress1: String,
        // streetAddress2: String,
        // city: String,
        // state: String,
        // zip: Number,
        // latitude: Number,
        // longitude: Number,
        // email: String,
        // phoneNumber: String,
        communityName: "Community Name",
        address: {
            streetAddress1: "Street Address 1",
            streetAddress2: String,
            city: "Rockville",
            state: String,
            zip: "22182",
            latitude: "39.0477476",
            longitude: "-77.1272527"
        },
        salesAgent: {
            email: "test@test.com",
            phoneNumber: "3016578855"
        }
    });

    const handleStateChange = (value) => {
        console.log(value);
    }

    const renderCommunityList = () => {
        axios.get('/communities/' + localStorage.userID)
            .then(res => {
                setCommunitiesList(res.data);
            })
            .catch((err) => {
                console.log(err);
            })
    }

    socket.on('dbModified', () => {
        renderCommunityList();
    });

    useEffect(() => {
        renderCommunityList();
    }, []);

    return (
        <>
            <section>
                <MDBRow>
                    {communitiesList.map(community => {
                        return (
                            <CommunityList
                                community={community}
                                key={community._id}
                                deleteOnClick={() => { setDeleteModal(!deleteModal); setIdDelete(community._id); }}
                                editOnClick={() => { setCommunity(community); setEditAddModal(!editAddModal); }}
                            />
                        )
                    })}

                </MDBRow>
            </section>
            <section>
                <MDBBtn floating tag='a' className='add-property-btn bg-blue' onClick={() => { setEditAddModal(!editAddModal); setCommunity(''); }}>
                    <MDBIcon icon='plus' />
                </MDBBtn>
                <EditAddModal
                    editAddModal={editAddModal}
                    toggle={() => setEditAddModal(!editAddModal)}
                    community={community}
                    onChange={e => setCommunity({ ...community, [e.target.id]: e.target.value })}
                    // handleStateChange={(state) => setCommunity({ ...community, state: state })}
                    handleStateChange={(value) => handleStateChange(value)}
                />
                <DeleteModal
                    isOpen={deleteModal}
                    toggle={() => setDeleteModal(!deleteModal)}
                    idDelete={idDelete}
                    cancel={() => { setDeleteModal(!deleteModal); setIdDelete('empty'); }}
                />
            </section>
        </>
    )
}


export default Communities;
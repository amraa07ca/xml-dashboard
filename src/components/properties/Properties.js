import React, { useState, useEffect } from 'react';
import axios from 'axios';
import socketIOClient from "socket.io-client";

import './Properties.scss';

import DeleteModal from './DeleteModal';
import EditAddModal from './EditAddModal';
import PropertyList from './PropertyList';

import {
   MDBRow,
   MDBIcon,
   MDBBtn,
} from 'mdbreact';

const Properties = () => {
   const socket = socketIOClient('http://localhost:5000');

   const [editAddModal, setEditAddModal] = useState(false);
   const [deleteModal, setDeleteModal] = useState(false);
   const [idDelete, setIdDelete] = useState('');

   const [propertyList, setPropertyList] = useState([]);
   const [property, setProperty] = useState({});

   const renderPropertyList = () => {
      axios.get('/properties/' + localStorage.userID)
         .then(response => {
            setPropertyList(response.data);
         })
         .catch((error) => {
            console.log(error);
         })
   }

   socket.on('dbModified', () => {
      renderPropertyList();
   });

   useEffect(() => {
      renderPropertyList();
   }, [])

   const editOnClick = (val) => {
      setProperty(val);
      setEditAddModal(!editAddModal);
   }

   return (
      <>
         <section>
            <MDBRow>
               {propertyList.map(property => {
                  return (
                     <PropertyList
                        property={property}
                        key={property._id}
                        deleteOnClick={() => { setDeleteModal(!deleteModal); setIdDelete(property._id) }}
                        editOnClick={() => editOnClick(property)}
                     />
                  )
               })}
            </MDBRow>
         </section>
         <section>
            <MDBBtn floating tag='a' className='add-property-btn bg-blue' onClick={() => { setEditAddModal(!editAddModal); setProperty(''); }}>
               <MDBIcon icon='plus' />
            </MDBBtn>
            <EditAddModal
               editAddModal={editAddModal}
               toggle={() => setEditAddModal(!editAddModal)}
               property={property}
               onChange={e => setProperty({ ...property, name: e.target.value })}
            />
            <DeleteModal
               deleteModal={deleteModal}
               toggle={() => setDeleteModal(!deleteModal)}
               idDelete={idDelete}
               cancel={() => { setDeleteModal(false); setIdDelete('empty'); }}
            />
         </section>
      </>
   )
}

export default Properties;

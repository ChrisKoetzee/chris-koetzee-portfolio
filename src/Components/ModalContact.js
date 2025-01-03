import React, { useState, useRef } from 'react';
import {
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
  MDBInput,
} from 'mdb-react-ui-kit';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ModalContact() {
  const [formOpen, setFormOpen] = useState(false);
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    user_message: '',
  });

  const Form = useRef();

  const toggleModal = () => setFormOpen(!formOpen);

  const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_CONTACT_ID;
  const contactId = process.env.REACT_APP_EMAILJS_TEMPLATE_CONTACT_ID;
  const userId = process.env.REACT_APP_EMAILJS_USER_ID;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (!formData.user_name || !formData.user_email || !formData.user_message) {
      toast.info('Please complete all fields');
      return;
    }

    emailjs
      .sendForm(serviceId, contactId, Form.current, {
        publicKey: userId,
      })
      .then(
        () => {
          toast.success('Email sent successfully!', { autoClose: 2000 });
          setFormData({
            user_name: '',
            user_email: '',
            user_message: '',
          });
          toggleModal();
        },
        (error) => {
          console.error('Error sending email:', error.message);
          toast.error('Failed to send email.');
        },
      );
  };

  const submitForm = (e) => {
    e.preventDefault();
    sendEmail(e);
  };

  return (
    <div>
      <MDBBtn onClick={toggleModal}>Contact Me</MDBBtn>
      <MDBModal
        tabIndex="-1"
        open={formOpen}
        onClose={() => setFormOpen(false)}
      >
        <MDBModalDialog centered>
          <MDBModalContent style={{color: 'black', backgroundColor: '#7fff00' }}>
            <MDBModalHeader>
              <MDBModalTitle>Please complete the form below</MDBModalTitle>
            </MDBModalHeader>
            <MDBModalBody style={{color: 'black'}}>
              <form ref={Form} onSubmit={submitForm}>
                <MDBInput
                  className="mb-4"
                  type="text"
                  id="Name"
                  placeholder="Name and Surname"
                  name="user_name"
                  value={formData.user_name}
                  onChange={handleInputChange}
                />
                <MDBInput
                  className="mb-4"
                  type="email"
                  id="email"
                  placeholder="Email address"
                  name="user_email"
                  value={formData.user_email}
                  onChange={handleInputChange}
                />
                <MDBInput
                  wrapperClass="mb-4"
                  id="textarea"
                  rows={4}
                  placeholder="Message"
                  style={{
                    minHeight: '100px',
                    resize: 'vertical',
                  }}
                  name="user_message"
                  value={formData.user_message}
                  onChange={handleInputChange}
                />
                <MDBInput 
                  className="mb-4" 
                  type="submit" 
                  value="Send" 
                  style={{color: 'black', backgroundColor: '#efffde', fontSize: '1.5rem', fontWeight: 'bold' }} 
                />
              </form>
            </MDBModalBody>
            <MDBModalFooter >
              <h5>Thank you and enjoy your day.</h5>
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </div>
  );
}

export default ModalContact;

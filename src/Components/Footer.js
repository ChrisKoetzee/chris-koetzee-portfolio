import React, { useState, useEffect } from 'react';
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBBtn,
  MDBFooter,
} from 'mdb-react-ui-kit';
import { ToastContainer } from 'react-toastify';
import ModalContact from './ModalContact';
import 'react-toastify/dist/ReactToastify.css';

function Footer() {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <MDBFooter
      className="footer"
      style={{
        backgroundColor: '#000000',
        color: '#7FFF00',
      }}
    >
      <MDBContainer className="p-4">
        <MDBRow>
          <MDBCol>
            <div>
              <ModalContact />
              <ToastContainer />
            </div>
          </MDBCol>
          <MDBCol>
            <section className="m-4">
              <MDBBtn
                floating
                className="m-1"
                style={{ backgroundColor: '#0082ca' }}
                href="https://www.linkedin.com/in/christopherkoetzee/"
                aria-label="Link to LinkedIn profile page"
                role="button"
              >
                <MDBIcon fab icon="linkedin-in" />
              </MDBBtn>
              <MDBBtn
                floating
                className="m-1"
                style={{ backgroundColor: '#333333' }}
                href="https://github.com/ChrisKoetzee"
                aria-label="Link to my Github profile page"
                role="button"
              >
                <MDBIcon fab icon="github" />
              </MDBBtn>
            </section>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <MDBRow>
        <div
          className="text-center p-3"
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}
        >
          ©
          <span>{currentYear}</span>
          <span>Copyright:</span>
          <a className="text-white" href="https://chris-koetzee-my-portfolio.netlify.app/" aria-label="Link to My Portfolio page">
            TnT-Development
          </a>
        </div>
      </MDBRow>
    </MDBFooter>
  );
}

export default Footer;

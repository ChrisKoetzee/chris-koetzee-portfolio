import React from 'react';
import { Container } from 'react-bootstrap';
import {
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardText,
  MDBCardLink,
} from 'mdb-react-ui-kit';
import UmfaziImage from '../Images/ProjectImages/Umfazi.png';
import TVShows from '../Images/ProjectImages/TVShows.png';
import Recipes from '../Images/ProjectImages/Recipes.png';
import myFinalProject from '../Images/ProjectImages/myFinalProject.png';

function Projects() {
  return (
    <section 
      className="d-flex flex-column justify-content-space-between myProject" 
      id="myProjects" 
    >
      <Container 
        className="project-container">
        <div className="project-box">
          <h2>Projects</h2>
          <MDBRow className="p-3">
            <MDBCol className="p-3" xs={12} md={6} lg={6} xl={4}>
              <MDBCard className="project-cards">
                <MDBCardBody className="cards-body">
                  <a href="https://umfazicat.netlify.app/" aria-label="Link to Website" target="_blank" rel="noopener noreferrer">
                    <MDBCardImage className="project-img" position="top" alt="Umfazi Clean and Tidy" src={UmfaziImage} />
                  </a>
                  <h3><strong>Umfazi Clean and Tidy</strong></h3>
                  <MDBCardText>
                    This website, <strong>Umfazi Clean and Tidy</strong>, was developed for a community-based cleaning company.
                  </MDBCardText>
                  <MDBCardLink 
                    href="https://github.com/ChrisKoetzee/Clean-And-Tidy-Bros" 
                    aria-label="Link to Website Gitub link"
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    Github Link
                  </MDBCardLink>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>

            <MDBCol className="p-3" xs={12} md={6} lg={6} xl={4}>
              <MDBCard className="project-cards">
                <MDBCardBody className="cards-body">
                  <a href="https://netlify-errors--recipes-galore.netlify.app/" aria-label="Link to Website" target="_blank" rel="noopener noreferrer">
                    <MDBCardImage className="project-img" position="top" alt="Recipes Galore website" src={Recipes} />
                  </a>
                  <h3><strong>Recipes Galore Project</strong></h3>
                  <MDBCardText>
                    Recipes Galore offers a platform for users to share recipes with ingredients and videos all in the convenience of one place.
                  </MDBCardText>
                  <MDBCardLink 
                    href="https://github.com/ChrisKoetzee/Recipes-Galore"
                    aria-label="Link to Website Github link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Github Link
                  </MDBCardLink>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>

            <MDBCol className="p-3" xs={12} md={6} lg={6} xl={4}>
              <MDBCard className="project-cards">
                <MDBCardBody className="cards-body">
                  <a href="https://my-final-project-2.onrender.com/" aria-label="Link to Website" target="_blank" rel="noopener noreferrer">
                    <MDBCardImage className="project-img" position="top" alt="Final Project" src={myFinalProject} />
                  </a>
                  <h3><strong>My Final Project</strong></h3>
                  <MDBCardText>
                    Created for a school to manage tasks, involving collaboration with multiple developers using Agile methodology.
                  </MDBCardText>
                  <MDBCardLink 
                    href="https://github.com/ChrisKoetzee/my-final-project"
                    aria-label="Link to Website Github link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Github Link
                  </MDBCardLink>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>

            <MDBCol className="p-3" xs={12} md={6} lg={6} xl={4}>
              <MDBCard className="project-cards">
                <MDBCardBody className="cards-body">
                  <a href="https://cyf-chriskoetzee-tv.netlify.app/" aria-label="Link to Website" target="_blank" rel="noopener noreferrer">
                    <MDBCardImage className="project-img" position="top" alt="TV Shows Project" src={TVShows} />
                  </a>
                  <h3><strong>My TV Shows Project</strong></h3>
                  <MDBCardText>
                    A project using an API to pull TV show information using DOM manipulation.
                  </MDBCardText>
                  <MDBCardLink
                    href="https://github.com/ChrisKoetzee/tv-show-dom-project"
                    aria-label="Link to Website Github link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Github Link
                  </MDBCardLink>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </div>
      </Container>
    </section>
  );
}

export default Projects;


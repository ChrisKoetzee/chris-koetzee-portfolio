import React from 'react';
import {
  MDBContainer,
  MDBCarousel,
  MDBCarouselItem,
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
} from 'mdb-react-ui-kit';
import Image1 from '../Images/carouselImages/aboutMe.jpg';
import Image2 from '../Images/carouselImages/inBegin.jpg';
import Image3 from '../Images/carouselImages/finishLine.jpg';
import Image4 from '../Images/carouselImages/whatsNext.jpg';

function MyJourney() {
  return (
    <section id="myJourney">
      <MDBContainer
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',

        }}
      >
        <MDBCarousel
          className="carousel"
          style={{
            color: 'black',
            maxWidth: '1200px',
            margin: 'auto',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          showControls
          dark
          interval={30000}
        >
          <MDBCarouselItem itemId={1} className="img1">
            <MDBCard
              style={{
                height: '60%',
                width: '100%',
                backgroundColor: 'chartreuse',
                color: 'Black',
                maxWidth: '1200px',
                borderColor: 'white',
                borderWidth: '8px',
                borderStyle: 'solid',
                borderRadius: '30px',
              }}
            >
              <MDBCardBody>
                <MDBCardTitle>
                  <strong>About Me</strong>
                </MDBCardTitle>
                <MDBCardText>
                  Driven by a commitment to excellence with a desire to always
                  reach new heights, I approach every challenge with
                  determination and a continuous will to up-skill myself,
                  ensuring that I not only achieve the required results but also
                  exceed expectations. As a collaborative team player, I believe
                  in the power of teamwork. By recognizing and harnessing the
                  unique strengths of each team member, I inspire and motivate
                  others to excel, transforming tasks into opportunities for
                  outstanding performance.
                </MDBCardText>
                <MDBCardImage
                  position="top"
                  src={Image1}
                  alt="chris hanging"
                  className="mx-auto d-block"
                  style={{
                    height: '50%',
                    width: '60%',
                    justifyContent: 'center',
                    borderColor: 'yellow',
                    borderWidth: '5px',
                    borderStyle: 'solid',
                    borderRadius: '30px',
                  }}
                />
              </MDBCardBody>
            </MDBCard>
          </MDBCarouselItem>
          <MDBCarouselItem itemId={2} className="img2">
            <MDBCard
              style={{
                height: '60%',
                width: '100%',
                backgroundColor: 'chartreuse',
                color: 'Black',
                maxWidth: '1200px',
                borderColor: 'white',
                borderWidth: '8px',
                borderStyle: 'solid',
                borderRadius: '30px',
              }}
            >
              <MDBCardBody>
                <MDBCardTitle>
                  <strong>In the Beginning</strong>
                </MDBCardTitle>
                <MDBCardText>
                  My journey into coding began with the support and
                  encouragement of my wife, who recognized my natural aptitude
                  for it and introduced me to the field technology. From the
                  very start, I was deeply engaged, finding particular
                  satisfaction in the problem-solving challenges and the
                  creative design elements of coding. The sense of
                  accomplishment that comes with seeing a project through to
                  completion, especially when the creative and design aspects
                  come together, is truly rewarding.
                </MDBCardText>
                <MDBCardImage
                  position="top"
                  src={Image2}
                  alt="In the beginning"
                  className="mx-auto d-block"
                  style={{
                    height: '50%',
                    width: '60%',
                    justifyContent: 'center',
                    borderColor: 'yellow',
                    borderWidth: '5px',
                    borderStyle: 'solid',
                    borderRadius: '30px',
                  }}
                />
              </MDBCardBody>
            </MDBCard>
          </MDBCarouselItem>
          <MDBCarouselItem itemId={3} className="img3">
            <MDBCard
              style={{
                height: '60%',
                width: '100%',
                backgroundColor: 'chartreuse',
                color: 'Black',
                maxWidth: '1200px',
                borderColor: 'white',
                borderWidth: '8px',
                borderStyle: 'solid',
                borderRadius: '30px',
              }}
            >
              <MDBCardBody>
                <MDBCardTitle>
                  <strong>The finish line</strong>
                </MDBCardTitle>
                <MDBCardText>
                  As I look back, reaching the finish line, I can proudly
                  reflect on my journey from knowing nothing about coding to
                  being able to build a website from the ground up. The effort
                  and dedication required have been immense, and I am deeply
                  grateful to Code Your Future (CYF) for the opportunity they
                  provided. My next goal is to enter the tech industry, secure a
                  position in the field, and continue building my experience.
                  Additionally, I plan to volunteer at CYF to give back to the
                  community that has supported my growth.
                </MDBCardText>
                <MDBCardImage
                  position="top"
                  src={Image3}
                  alt="Finish Line"
                  className="mx-auto d-block"
                  style={{
                    height: '50%',
                    width: '60%',
                    justifyContent: 'center',
                    borderColor: 'yellow',
                    borderWidth: '5px',
                    borderStyle: 'solid',
                    borderRadius: '30px',
                  }}
                />
              </MDBCardBody>
            </MDBCard>
          </MDBCarouselItem>
          <MDBCarouselItem itemId={4} className="img4">
            <MDBCard
              style={{
                height: '60%',
                width: '100%',
                backgroundColor: 'chartreuse',
                color: 'Black',
                maxWidth: '1200px',
                borderColor: 'white',
                borderWidth: '8px',
                borderStyle: 'solid',
                borderRadius: '30px',
              }}
            >
              <MDBCardBody>
                <MDBCardTitle>
                  <strong>Whats next</strong>
                </MDBCardTitle>
                <MDBCardText>
                  One of my core beliefs, shaped by my experience with
                  basketball, is to support and mentor those who are interested
                  in the sport or are just beginning. I strive to use my
                  knowledge to help them achieve their goals. This philosophy
                  has carried over into my coding journey, where I am committed
                  to using the experience I’ve gained to support others who are
                  just starting out. Being connected with Code Your Future
                  provides me with an excellent platform to pursue this mission.
                </MDBCardText>
                <MDBCardImage
                  position="top"
                  src={Image4}
                  alt="What next"
                  className="mx-auto d-block"
                  style={{
                    height: '50%',
                    width: '60%',
                    justifyContent: 'center',
                    borderColor: 'yellow',
                    borderWidth: '5px',
                    borderStyle: 'solid',
                    borderRadius: '30px',
                  }}
                />
              </MDBCardBody>
            </MDBCard>
          </MDBCarouselItem>
        </MDBCarousel>
      </MDBContainer>
    </section>
  );
}

export default MyJourney;

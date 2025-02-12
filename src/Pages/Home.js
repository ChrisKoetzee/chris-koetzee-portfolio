import React, { useState, useEffect } from 'react';
import {
  Col,
  Row,
  Container,
  Image,
} from 'react-bootstrap';
import ChrisImg from '../Images/HomeImages/ChrisImg.png';

function Home() {
  const [imgIn, setImgIn] = useState(false);

  const handleScroll = () => {
    const imagePosition = document
      .getElementById('chris-img')
      .getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.5;

    if (imagePosition < screenPosition) {
      setImgIn(true);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section 
      id="home" 
      className="home"
      style={{
        height: '100vh',
      }}
    >
      <Container
        fluid
        className="d-flex flex-column justify-content-center home"
        style={{
          paddingTop: 'calc(5rem + 50px)',
          height: '100vh',

        }}
      >
        <Row
          className="w-100 p-6"
          style={{
            height: '100vh',
            width: '100%',
            paddingTop: 'calc(5rem + 0.2rem)',
          }}
        >
          <Col
            xs={12}
            sm={12}
            md={12}
            lg={12}
            xl={6}
            className="d-flex flex-column align-items-center justify-content-center text-center px-lg-5 px-md-4 px-sm-3 px-2"
          >
            <h1>Hi, my name is </h1>
            <h1>
              <strong>Christopher Koetzee</strong>
            </h1>
            <h1>I am a Full stack Developer !!!</h1>
            <h2>Welcome to my Portfolio Page</h2>
            <p style={{ color: 'yellow' }}>
              <strong>
                Motivated career changer with a creative flair and a hunger to learn
              </strong>
            </p>
          </Col>
          <Col
            xs={12}
            sm={12}
            md={12}
            lg={12}
            xl={6}
            className="d-flex flex-column align-items-center justify-content-center"
          >
            <Image
              id="chris-img"
              src={ChrisImg}
              alt="Image of Chris smiling in a greenery background"
              thumbnail
              className={imgIn ? 'slide-in' : 'slide-out'}
              style={{
                height: '50%',
                width: '30%',
                margin: '2rem',
                borderColor: '#7FFF00',
                borderWidth: '3px',
                borderStyle: 'solid', 
                borderRadius: '30px',
                transition: 'transform 1s ease-out',
              }}
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Home;

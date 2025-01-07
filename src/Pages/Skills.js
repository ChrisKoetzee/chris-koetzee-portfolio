import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Row, Col, Container } from 'react-bootstrap';
import WebDevelImg from '../Images/SkillsImages/WebDevelopment.png';
import HtmlImg from '../Images/SkillsImages/Html.png';
import CssImg from '../Images/SkillsImages/Css.png';
import JSImg from '../Images/SkillsImages/JavaScript.png';
import PgSQLImg from '../Images/SkillsImages/PostgreSQL.png';
import NodeImg from '../Images/SkillsImages/Node.png';
import ReactImg from '../Images/SkillsImages/React.png';
import ProblemSolIml from '../Images/SkillsImages/ProblemSolving.png';
import AgileImg from '../Images/SkillsImages/Agile.png';

function Skills() {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <section 
      className="d-flex flex-column align-items-center justify-content-center mySkill" 
      id="mySkills"
      style={{
        height: '100vh',
      }}
    >
      <Container className="skill-project-bx" >
        <Row>
          <Col>
            <div className="skill-box">
              <h2>Skills</h2>
              <Carousel
                responsive={responsive}
                infinite
                className="skill-slider"
                autoPlay
                autoPlaySpeed={2000}
                renderDotsOutside
              >
                <div className="item">
                  <img
                    className="item-img"
                    src={WebDevelImg}
                    alt="building a website"
                    style={{
                      height: '200px',
                      width: '200px',
                    }}
                  />
                  <h3>Web Development</h3>
                </div>
                <div className="item">
                  <img
                    className="item-img"
                    src={HtmlImg}
                    alt="HTML Icon"
                    style={{
                      height: '200px',
                      width: '200px',
                    }}
                  />
                  <h3>HTML</h3>
                </div>
                <div className="item">
                  <img
                    className="item-img"
                    src={CssImg}
                    alt="CSS Icon"
                    style={{
                      height: '200px',
                      width: '200px',
                    }}
                  />
                  <h3>CSS</h3>
                </div>
                <div className="item">
                  <img
                    className="item-img"
                    src={JSImg}
                    alt="JavaScript Icon"
                    style={{
                      height: '200px',
                      width: '200px',
                    }}
                  />
                  <h3>JavaScript</h3>
                </div>
                <div className="item">
                  <img
                    className="item-img"
                    src={NodeImg}
                    alt="Node.js Logo"
                    style={{
                      height: '200px',
                      width: '200px',
                    }}
                  />
                  <h3>Node.js</h3>
                </div>
                <div className="item">
                  <img
                    className="item-img"
                    src={PgSQLImg}
                    alt="PostgreSQL Logo"
                    style={{
                      height: '200px',
                      width: '200px',
                    }}
                  />
                  <h3>PostgreSQL</h3>
                </div>
                <div className="item">
                  <img
                    className="item-img"
                    src={ReactImg}
                    alt="React Logo"
                    style={{
                      height: '200px',
                      width: '200px',
                    }}
                  />
                  <h3>Reactjs</h3>
                </div>
                <div className="item">
                  <img
                    className="item-img"
                    src={ProblemSolIml}
                    alt="Man thinking"
                    style={{
                      height: '200px',
                      width: '200px',
                    }}
                  />
                  <h3>Problem solving</h3>
                </div>
                <div className="item">
                  <img
                    className="item-img"
                    src={AgileImg}
                    alt="Agile flow"
                    style={{
                      height: '200px',
                      width: '200px',
                    }}
                  />
                  <h3>Agile methodologies</h3>
                </div>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Skills;

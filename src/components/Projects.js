import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import RICE from "../assets/img/Rice-MolSSI.png";
import Lunabotics from "../assets/img/lunabotics-team.png"
import Brainlox from "../assets/img/brainlox.png"
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "NASA Lunabotics",
      description: " Construct a prototype robot that demonstrates technologies needed for long-term human presence on the Moon and other off-world locations",
      imgUrl: Lunabotics,
    },
    {
      title: "RICE MolSSI Workshop",
      description: " This workshop focused on scientific programming skills and applications in computational chemistry",
      imgUrl: RICE,
    },
    {
      title: "Brainlox",
      description: "Instruct kids from the ages of 7-14 on the fundamentals of Python ",
      imgUrl: Brainlox,
    }
    
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div>
                <h2>Experience</h2>
                {/*<p></p>*/}
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                          
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    
                  
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

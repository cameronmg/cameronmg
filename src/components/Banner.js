import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.svg";
import cameron from "../assets/img/cam-img.png"
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
  //define classes
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  //text to rotate
  const toRotate = [ "Web Dev"];
  //the time it takes for the text to rotate
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
            {/*if isVisible is true then the referene name is "animate__animated animate__fadeIn" else empty*/}             
              <div>
                <span className="tagline">Welcome to my website!</span>
                {/*text that is being rotated in banner*/}
                <h1>{`I am a`} <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Front End", "Web Dev ]'><span className="wrap">{text}</span></span></h1>
                  <p>Persistent overachiever who works great with group projects as well as individual projects. Leader who sets examples for thinking critically, acting with moral integrity, and always going the extra mile to accomplish tasks at hand.</p>
                  {/*<a href="https://www.linkedin.com/in/cameronmg/" >
                    <button onClick={() => console.log('connect')}>Let’s Connect <ArrowRightCircle size={25} /></button>
                  </a>*/}
              </div>
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
            {/*if is visible is true the change reference name to "animate__animated animate__zoomIn" else leave blank*/}
            {/*run the zoom in animation*/}
              <div >
                {/*image to the right on the banner*/}
                <img src={cameron} alt="Header Img"/>
              </div>
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

import React, { useEffect, useRef, useState } from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Confetti from "react-confetti";
import Typed from "typed.js";

const Birthday = (props) => {
  const currentText = useRef("");
  const [confetti, setConfetti] = useState(0);
  let quoteArr = [];

  props.quotes.forEach(quote => {
    quoteArr = [...quoteArr, quote.quote]
    return quoteArr
  });


  useEffect(() => {
    const timer = setTimeout(() => {
      setConfetti(true)
    }, 45000);
    
    const options = {
      strings: quoteArr,
      typeSpeed: 50,
      backSpeed: 30,
      loop: false,
      showCursor: true,
      cursorChar: "_",
    }
    
    const typed = new Typed("#texts", options);
    
    // typed.typingComplete ? setConfetti(true) : setConfetti(false);
    
    return () => {
      typed.destroy();
      clearTimeout(timer);
    }

  });


  return (
    <Container>
      <Row>
        <Col sm={3} className="center">
          <section id="texts" ref={currentText}></section>
          {(confetti === true) &&
            <Confetti />}
        </Col>
      </Row>
    </Container>
  )
}

export default Birthday;
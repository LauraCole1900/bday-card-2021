import React, { useEffect, useRef, useState } from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Confetti from "react-confetti";
import Typed from "typed.js";

const Birthday = (props) => {
  let quoteArr = [];
  const currentText = useRef("");
  const [confettiReady, setConfettiReady] = useState(false);

  props.quotes.forEach(quote => {
    quoteArr = [...quoteArr, quote.quote]
    return quoteArr
  });
  console.log({ quoteArr });


  useEffect(() => {
    const options = {
      strings: quoteArr,
      typeSpeed: 50,
      backSpeed: 30,
      loop: false,
      showCursor: true
    }
    console.log(options.strings);
    const typed = new Typed("#texts", options);

    
    if (currentText.current.innerHTML === quoteArr[quoteArr.length - 1]) {
      setConfettiReady(true);
    }
     
    return () => {
      typed.destroy();
    }
    
  }, [confettiReady])


  return (
    <Container>
      <Row>
        <Col sm={3} className="center">
          <section id="texts" ref={currentText}></section>
          {confettiReady === true &&
            <Confetti />}
        </Col>
      </Row>
    </Container>
  )
}

export default Birthday;
import {Container,Row,Col} from"react-bootstrap"
import FaqComponent from "../components/AboutMe"
const TestimonialPage = () => {
  return (
    <div className="testimonialPage">
      <div className="testimonial">
        <Container>
          <Row>
            <Col>
                <div className="d-flex justify-content-center fs-1">
                  This Part On Progress !!!
                </div>
            </Col>
          </Row>
        </Container>
      </div>
      <FaqComponent/>
    </div>
  )
}

export default TestimonialPage
import {Container,Row,Col} from "react-bootstrap"
import {Link} from "react-router-dom"
const FooterComponent = () => {
  return (
    <div className="footer py-5">
      <Container>
        <Row className="d-flex justify-content-between">
          <Col lg="5">
          <h3 className="fs-5 fw-bold">Rayhan<span className="ma">
            MA</span></h3>
            <p className="desc">Jangan pernah berhenti belajar. Dunia komputer terus berkembang dengan cepat, dan hanya dengan terus belajar kita dapat tetap relevan dan berkontribusi pada perubahan positif dalam dunia ini.</p>
            <div className="no mb-1 mt-4">
              <Link className="text-decoration-none">
              <i className="fa-brands fa-whatsapp"></i>
              <p className="m-0">+62 08743843294</p>
              </Link>
            </div>
            <div className="mail">
              <Link className="text-decoration-none">
              <i className="fa-regular fa-envelope"></i>
              <p className="m-0">rayhanma008@gmail.com</p>
              </Link>
            </div>
          </Col>
          <Col className="d-flex flex-column col-lg-2 col mt-lg-0 mt-5">
            <h5 className="fw-bold">Menu</h5>
            <Link to="">Home</Link>
            <Link to="project">Project</Link>
            <Link to="skill">Ability</Link>
          </Col>
          <Col lg="4" className="mt-lg-0 mt-5">
            <h5 className=" fw-bold">My Social</h5>
            <div className="social">
            <a href="https://www.facebook.com/rayhan.muhammad.9231/" target="blank"><i className="fa-brands fa-facebook"></i></a>
           <a href="https://www.instagram.com/rayhanma__/" target="blank"> <i className="fa-brands fa-instagram"></i></a>
            <a href="https://github.com/Mr22XX" target="blank"><i className="fa-brands fa-github"></i></a>
            <a href="https://www.linkedin.com/in/rayhan-muhammad-adha-867363261/" target="blank"><i className="fa-brands fa-linkedin"></i></a>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
          <p className="text-center px-md-0 px-3 ">&copy; Copyright {new Date().getFullYear()} by <span className="cp">Mr22XX/RayhanMa</span>, All Right Deserved</p>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default FooterComponent
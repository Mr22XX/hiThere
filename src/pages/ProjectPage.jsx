import {Container,Row,Col} from "react-bootstrap"
import {semuaKelas} from"../data/index"
import FaqComponent from "../components/AboutMe"
const KelasPage = () => {
  return (
    <div className="kelasPage">
    <div className="kelas min-vh-100">
      <Container>
        <Row>
          <Col>
            <h1 className="fw-bold text-center">Project</h1>
          </Col>
        </Row>
        <Row>
        {semuaKelas.map((kelas)=>{
                return <Col className="shadow rounded animate__animated animate__fadeInUp animate__delay-1s" delay={kelas.delay} key={kelas.id}>
                  <img src={kelas.image} alt="unsplash.com" className="mb-5 rounded-top" />
                  <h5 className="mb-5 px-3">{kelas.title}</h5>
                  <div className="ket d-flex justify-content-between align-items-center px-3 pb-3">
                    <p className="m-0 text-primary fw-bold">{kelas.price}</p>
                    <button key={kelas.id} onClick={()=> window.location.href = kelas.href}  className="btn btn-danger rounded-1">{kelas.buy}</button>
                  </div>
                </Col>;
              })}
        </Row>
      </Container>
    </div>
    <FaqComponent/>
    </div>
  )
}

export default KelasPage
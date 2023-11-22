import {Container, Row, Col} from "react-bootstrap"
import HeroImage from "../assets/img/hero.png"
import {kelasTerbaru,dataSwiper} from "../data/index"
import {useNavigate} from"react-router-dom"
import FaqComponent from "../components/AboutMe"
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination } from 'swiper/modules';

const HomePage = () => {
  let navigate = useNavigate();

  return (
    <div className="homepage">
        <header className="w-100 min-vh-100 d-flex align-items-center overflow-hidden">
          <Container>
            <Row className="header-box d-flex align-items-center pt-lg-5">
              <Col lg="6">
                <h1 className="mb-4 animate__animated animate__fadeInUp animate__delay-1s">Welcome <br />  <span>To My Portofolio</span> </h1>
                <p className="mb-4 animate__animated animate__fadeInUp ">Hi My name is Rayhan Muhammad Adha, Im Junior Developer. Student of Information Technology at University of Bengkulu. <span className="code">Enjoy Your Life</span></p>
                  <button className="btn btn-danger btn-lg rounded-1 me-2 mb-xs-0 mb-2 animate__animated animate__fadeInUp" onClick={()=> navigate("/project")}> Project</button>
                  <button className="btn btn-outline-danger btn-lg rounded-1 mb-xs-0 mb-2 animate__animated animate__fadeInUp  " onClick={()=> navigate("/sertif")}>Certificates</button>
              </Col>
              <Col lg="6" className="pt-lg-0 pt-5">
              <img src={HeroImage} alt="hero-img" className="animate__animated animate__fadeInUp rounded-circle " />
              </Col>
            </Row>
          </Container>
        </header>
        <div className="kelas w-100 min-vh-100">
          <Container>
            <Row>
              <Col>
                <h1 className="text-center fw-bold">Project</h1>
                <p className="text-center ">This is my Project, you can text me if you have Suggestion !!! </p>
              </Col>
            </Row>
            <Row>
              {kelasTerbaru.map((kelas)=>{
                return <Col className="shadow rounded"  data-aos="fade-up" data-aos-duration="1000" data-aos-delay={kelas.delay} key={kelas.id}>
                  <img src={kelas.image} alt="unsplash.com" className="mb-5 rounded-top" />
                 
                  <h5 className="mb-5 px-3">{kelas.title}</h5>
                  <div className="ket d-flex justify-content-between align-items-center px-3 pb-3">
                    <p className="m-0 text-primary fw-bold">{kelas.price}</p>
                    <button key={kelas.id} onClick={()=> window.location.href = kelas.href}  className="btn btn-danger rounded-1">{kelas.buy}</button>
                  </div>
                </Col>;
              })}
             
            </Row>
            <Row>
              <Col className="text-center">
                <button className="btn btn-success rounded-5 btn-lg" onClick={()=> navigate("/project")}>Lihat Semua Project  <i className="fa-solid fa-chevron-right ms-1"></i></button>
               
              </Col>
            </Row>
          </Container>
        </div>
        <div className="testimonial py-5">
          <Container>
            <Row>
              <Col>
                <h1 className="text-center fw-bold my-5">Ability</h1>
              </Col>
            </Row>
            <Row>
            <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          992: {
            slidesPerView: 2,
            spaceBetween: 50,
          },
          1200: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {dataSwiper.map((data)=>{
          return <SwiperSlide className="shadow-sm" key={data.id}>
            <p className="desc">{data.desc}</p>
            <div className="people">
              <div>
                <h5 className="mb-1">{data.name}</h5>
                <p className="m-0 fw-bold">{data.skill}</p>
              </div>
            </div>
          </SwiperSlide>;
        })}
        
       
      </Swiper>
            </Row>
          </Container>
        </div>

        {/* Faq */}
        <FaqComponent/>
    </div>
  )
}

export default HomePage
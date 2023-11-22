import {Routes, Route} from "react-router-dom"
import HomePage from "./pages/HomePage";
import ProjectPage from "./pages/ProjectPage";
import SertifPage from "./pages/SertifPage";
import NavbarComponent from "./components/NavbarComponent";


import FooterComponent from "./components/FooterComponent";




function App(){
  return( 
  <div>
    <NavbarComponent/>
    <Routes>
      <Route path="/" Component={HomePage}/>
      <Route path="/project" Component={ProjectPage}/>
      <Route path="/sertif" Component={SertifPage}/>
    </Routes>

    <FooterComponent/>
  </div>
  );
}
export default App;
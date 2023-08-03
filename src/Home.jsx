import MyNavbar from "./components/Navbar";
import rajat from "./assets/images/rajat-square.png";
import NavTab from "./components/NavTab";
import About from "./components/About";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Footer from "./components/Footer";

import "./css/home.css";

function Home() {
  return (
    <div className="home-div">
      <MyNavbar />
      <div style={{ marginTop: "6rem" }}></div>
      <div className="rajat-div">
        <img src={rajat} alt="rajat" className="rajat-img"></img>
        <h1 className="name">Rajat Jain</h1>
        <p className="desc">
          MBA candidate (Marketing/Finance) • Unlocking the complete potential
          of your property
        </p>
        <a className="resume-btn" href="/">
          Resume
        </a>
        <div className="tabs-div">
          <div className="row">
            <div className="col-lg-3 col-md-6 col-6">
              <NavTab text="About" />
            </div>
            <div className="col-lg-3 col-md-6 col-6">
              <NavTab text="Experience" />
            </div>
            <div className="col-lg-3 col-md-6 col-6">
              <NavTab text="Non tech skills" />
            </div>
            <div className="col-lg-3 col-md-6 col-6">
              <NavTab text="Technical skills" />
            </div>
          </div>
        </div>
        <About />
        <Experience />
        <Skills />
        <Footer />
      </div>
    </div>
  );
}

export default Home;

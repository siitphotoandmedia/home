import {
  HashRouter as Router,
  Route,
  Routes,
  Switch,
  useLocation,
} from "react-router-dom";
//BrowserRouter won't work for some reasons
import NavBar from "./component/NavBar";

import Gallery from "./component/gallery/gallery";
import FCTester from "./component/debug/flipcard_tester";
import About from "./component/about/about";

import "bootstrap/dist/css/bootstrap.min.css";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";

function App() {
  return (
    <Router baseline="/home">
      <div>
        <header>
          <NavBar />
        </header>
        <body>
          <Routes>
            <Route path="/" element={<Gallery />}></Route>
            <Route path="/gallery" element={<Gallery />}></Route>
            <Route path="/a" element={<Gallery />}></Route>
            {/* <Route path="./gallery" element={<Gallery />}></Route> */}

            {/* Add your Route here */}
            {/* <Route path="/about" element={<About />}></Route> */}
            {/* <Route path="./test" element={<FCTester />}></Route>
            <Route path="/test" element={<FCTester />}></Route> */}
          </Routes>
        </body>
      </div>
      <footer
        style={{
          backgroundColor: "#f8f9fa",
          textAlign: "center",
          padding: "10px",
        }}
      >
        <h3 style={{ color: "#777" }}>Contact</h3>
        <h5 style={{ color: "#777" }}>SIIT Photo and Media Club</h5>
        <p>SIIT Photo and Media Club Room, Student Activity, Rangsit Campus</p>
        <a href="https://www.facebook.com/SIITPhotoClub">
          <FacebookRoundedIcon />
        </a>

        <h5 style={{ color: "#777", marginTop: "20px" }}>
          Sirindhorn International Institute of Technology, Thammasat University
        </h5>
        <p>
          99 Moo 18, Km. 41 on Paholyothin Highway Khlong Luang, Pathum Thani
          12120, Thailand
        </p>
      </footer>
    </Router>
  );
}

export default App;


import { Route, Routes , Navigate } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Home from '../Home/Home';
import Tv from './../Tv/Tv';
import Movies from './../Movies/Movies';
import Projects from './../Projects/Projects';
import Login from './../Login/Login';
import Gallery from './../Gallery/Gallery';
import Register from './../../Register/Register';


function App() {
  const name = "kareem";
  const user = false;
  return (
    <>
    <Navbar/>
      <div className="container">
        <Routes>
        <Route path="/" element={<Navigate  to = "/home" />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/tv" element={<Tv />}></Route>
        {/* <Route path="/movies" element={<Movies />}></Route> */}
        <Route path="/movies" element={user ? <Home /> : <Movies />} />
        {/* <Route path="/movies" render={()=><Movies />} /> */}
        <Route path="/gallery" element={<Gallery />}></Route>
        <Route path="/projects" element={<Projects />}></Route>
        <Route path="/login" element={<Login />}></Route>
        {/*   render={(props)=><Register {...props}/>}*/}
        <Route path="/register" element={<Register name={name}/>} ></Route>
      
        <Route path="/logout" element={<Login />}></Route>
        </Routes>
      </div>
    </>
    
   
  );
}

export default App;

import React from 'react';
import './Navbar.css';
import { Navbar, Nav } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';
// import Home from '../Home/Home';

const Navigation = (props) => {
    // console.log(props);
    // const [time, setTime] = useState(new Date());
    // const [user, setUser] = useState();

    // useEffect(()=>{
    //     setInterval(()=>{
    //         setTime(time.toLocaleTimeString());
    //     },1000);
    // });

    // useEffect(() => {
    //     const loggedInUser = localStorage.getItem("user");
    //     if (loggedInUser) {
    //       const foundUser = JSON.parse(loggedInUser);
    //       setUser(foundUser);
    //     }
    //   }, []);
   return ( 
        <Navbar bg="primary" variant="dark">
            <Navbar.Brand href="#home">React Project</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/About">About</Nav.Link>
                    <Nav.Link href="/Contact">Contact</Nav.Link>
                    {/* <Nav.Link href="/Dashboard">Dashboard</Nav.Link> */}
                    <Nav.Link href="/Table">Table</Nav.Link>
                </Nav>
                
                {/* <Nav>hello {Home.props}</Nav>             */}
                <Nav className="justify-content-end"><Nav.Item>
                    <Nav.Link href="/">Logout</Nav.Link> </Nav.Item></Nav>
                <Nav className="float right" style={{color:"floralwhite"}}>
                    {new Date().toLocaleTimeString()}
                </Nav>
                {/* <Nav className="justify-content-end">Hello {user}</Nav>  */}
            </Navbar.Collapse>

        </Navbar>
    )
}

export default withRouter(Navigation);
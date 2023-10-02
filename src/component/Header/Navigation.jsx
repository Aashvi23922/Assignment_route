import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Navigation.css'
import { NavLink, useNavigate } from 'react-router-dom';
import { userAuth } from '../../Auth/Auth';

function Navigation() {

    const navigate = useNavigate();
    let { user, logout, setSearchData } = userAuth();

    return (
        <>
            <Navbar expand="lg">
                <Container fluid>
                    <Nav className='nav_link' style={{ marginRight: "290px", gap: "20px" }}>
                        <NavLink to={"/Ring"} style={{ color: "white" }}>RINGS</NavLink>
                        <NavLink to={"/Bracelate"} style={{ color: "white" }} >BRECELATE</NavLink>
                        <NavLink to={"/Earring"} style={{ color: "white" }} >EARRINGS</NavLink>
                        <NavLink to={"/Necklace"} style={{ color: "white" }} >NECKLACES</NavLink>
                    </Nav>
                    <Navbar.Brand style={{ marginRight: "290px"}}>CARATLANE</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Form className="d-flex">
                            <Nav className='nav_link2'>
                                <NavLink to={"/"} style={{ color: "white" }} >HOME</NavLink>
                                <NavLink style={{ color: "white" }} >ABOUT</NavLink>
                                <NavLink style={{ color: "white" }} >CONTACT</NavLink>
                            </Nav>
                            <input onChange={(e) => setSearchData(e.target.value)}
                                type="search"
                                className='in-nav'
                                placeholder="Search"
                                aria-label="Search"
                                style={{ fontSize: "20px", height: "42px", width: "120px", borderRadius: "9px", border: ".5px solid gray", outline: "none", paddingLeft: "15px",color:"white" }}
                            />
                            {user?.name ? (<span onClick={() => logout()} style={{ cursor: "pointer" }}><i class="fa-solid fa-power-off"></i></span>) : (<span onClick={() => navigate('/login')}zz ><i class="fa-solid fa-user"></i></span>)
                            }

                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>

    );
}

export default Navigation;
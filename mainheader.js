import { Container, Navbar, Row } from "react-bootstrap"
import { NavLink } from "react-router-dom"

const Mainheader = () => {
    return (
        <div>
            <Navbar bg="success" variant="light">
                <Container >
                    <h2>Email box</h2>
                    <ul style={{display:"flex",listStyle:"none",justifyContent:"space-around"}}>
                        <li>
                        <NavLink to="/auth">auth</NavLink>
                        </li>
                        <li>
                            <NavLink to="/home">home</NavLink>
                        </li>
                    </ul>
                </Container>
            </Navbar>
        </div>
    )
}

export default Mainheader;
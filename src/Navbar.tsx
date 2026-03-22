import { Link } from "react-router";
function Navbar(){
    return(
        <>
        <div className="Navbar">
        <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/services">Services</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/bookrequest">Book Request</Link>
        <Link to="/eventfeedback">Event Feedback</Link>
        </nav>
        </div>
        </>
    )
}
export default Navbar;
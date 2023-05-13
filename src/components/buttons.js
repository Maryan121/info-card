import "../App.css";
import { FaLinkedin,FaEnvelope } from "react-icons/fa"


function Buttons(){
    return(
        <div className="btnCont">
            <button className="email"><FaEnvelope /> email</button>
            <button className="btn2"><FaLinkedin className="btn2Icon"/> linkedln</button>
        </div>
    );
}

export default Buttons;
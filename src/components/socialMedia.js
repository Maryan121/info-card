import "../App.css"
import { FaFacebook,FaTwitter,FaInstagram,FaGithub } from "react-icons/fa"
function SocialMedia(){
    return(
        <div className="socilaMediaIcons">
            <FaTwitter className="icon"/>
            <FaFacebook className="icon"/>
            <FaInstagram className="icon"/>
            <FaGithub className="icon"/>
        </div>
    );
}

export default SocialMedia;
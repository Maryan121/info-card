import Header from "./header";
import Name from "./name";
import Buttons from "./buttons";
import Info from "./info";
import SocialMedia from "./socialMedia";
import "../App.css";

function Container(){
    return (
        <div className="container">
          <Header />
          <Name />
          <Buttons />
          <Info />
          <SocialMedia />
        </div>
      );
}

export default Container;
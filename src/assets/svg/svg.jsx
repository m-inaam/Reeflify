import Logo from "./Logo.svg"
import Homesvg from "./Home.svg"
import Mapsvg from "./Map.svg"
import Coralsvg from "./Coral.svg"
import CCoralsvg from "./CCoral.svg"
import Metasvg from "./Meta.svg"
import Eventsvg from "./Event.svg"
import Figmasvg from "./Figma.svg"
import CCoralBsvg from "./CCoralB.svg"
import CoralWhitesvg from "./CoralWhite.svg"
import NCoralsvg from "./NCoral.svg"




export const BrandLogo = () => {
    return <img src={Logo} alt="" />;
  };

  export const Home = ({className}) => {
    return <img className={className} src={Homesvg} alt="" />;
  };

  export const Map = ({className}) => {
    return <img className={className} src={Mapsvg} alt="" />;
  };

  export const Coral = ({className}) => {
    return <img className={className} src={Coralsvg} alt="" />;
  };

  export const CCoral = ({className}) => {
    return <img className={className} src={CCoralsvg} alt="" />;
  };


  export const Event = ({className}) => {
    return <img className={className} src={Eventsvg} alt="" />;
  };

  export const Meta = ({className}) => {
    return <img className={className} src={Metasvg} alt="" />;
  };


  export const Figma = ({className}) => {
    return <img className={className} src={Figmasvg} alt="" />;
  };
  

  export const CCoralB = ({className}) => {
    return <img className={className} src={CCoralBsvg} alt="" />;
  };

  export const CoralWhite = ({className}) => {
    return <img className={className} src={CoralWhitesvg} alt="" />;
  };

  export const NCoral = ({className}) => {
    return <img className={className} src={NCoralsvg} alt="" />;
  };

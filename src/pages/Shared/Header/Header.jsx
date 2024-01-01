import moment from "moment/moment";
import Logo from "../../../assets/logo.png"
const Header = () => {
    return (
      <div className="py-5">
        <img className="mx-auto" src={Logo} alt="" />
        <p className="text-center font-normal mt-5">
          Journalism Without Fear or Favour
        </p>
        <p className="text-center text-xl font-medium">{moment().format("dddd, MMMM D, YYYY")}</p>
      </div>
    );
};

export default Header;
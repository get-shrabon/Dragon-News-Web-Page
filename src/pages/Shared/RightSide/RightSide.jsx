import { FaFacebook, FaGoogle, FaInstagram, FaTwitter } from "react-icons/fa";
import zone1 from "../../../assets/qZone1.png";
import zone2 from "../../../assets/qZone2.png";
import zone3 from "../../../assets/qZone3.png";
import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const RightSide = () => {
  const { googleLogin, facebookLogin } = useContext(AuthContext);
  const handleGoogleLogin = () => {
    googleLogin()
      .then(() => {
        toast.success("Your Account Loggin Successful");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };
  const handleFacebookLogin = () => {
    facebookLogin()
      .then(() => {
        toast.success("Your Account Loggin Successful");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };
  return (
    <div>
      <div>
        <h3 className="font-bold text-xl text-slate-700">Login With</h3>
        <button
          onClick={handleGoogleLogin}
          className="btn w-full my-3 btn-outline btn-info"
        >
          <FaGoogle /> Login With Google
        </button>
        <button
          onClick={handleFacebookLogin}
          className="btn w-full btn-outline btn-success"
        >
          <FaFacebook /> Login With Facebook
        </button>
      </div>
      <ToastContainer theme="colored" />
      <div className="mt-4">
        <h3 className="font-bold mb-4 text-xl text-slate-700">Find us On</h3>
        <a
          className="text-lg border rounded-t-lg p-2 flex items-center gap-4"
          href="#"
        >
          <FaFacebook className="rounded-full text-slate-600 p-2 text-4xl bg-slate-100" />
          Facebook
        </a>
        <a className="text-lg border-x p-2 flex items-center gap-4" href="#">
          <FaTwitter className="rounded-full text-slate-600 p-2 text-4xl bg-slate-100" />
          Twitter
        </a>
        <a
          className="text-lg border rounded-b-lg p-2 flex items-center gap-4"
          href="#"
        >
          <FaInstagram className="rounded-full text-slate-600 p-2 text-4xl bg-slate-100" />
          Instagram
        </a>
      </div>
      <div className="mt-4 p-3 bg-slate-200 rounded">
        <h3 className="font-bold mb-4 text-xl text-slate-700">Q-Zone</h3>
        <img className="w-full" src={zone1} alt="" />
        <img className="w-full" src={zone2} alt="" />
        <img className="w-full" src={zone3} alt="" />
      </div>
    </div>
  );
};

export default RightSide;

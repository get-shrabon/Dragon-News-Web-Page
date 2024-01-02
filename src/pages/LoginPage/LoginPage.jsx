import { Link, useNavigate } from "react-router-dom";
import NavBar from "../Shared/NavBar/NavBar";
import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const LoginPage = () => {
    const {userLogin} = useContext(AuthContext)
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
    const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);
    setErrorMessage("");
    setSuccessMessage("");
    // Validation Form
    {
      if (password < 6) {
        setErrorMessage("Password must be at least 6 characters long");
        return;
      } else if (!/[A-Z]/.test(password)) {
        setErrorMessage("Password must contain at least one uppercase letter");
        return;
      } else if (!/[a-z]/.test(password)) {
        setErrorMessage("Password must contain at least one lowercase letter");
        return;
      }
    }
    // User Login
    userLogin(email,password)
    .then(() => {
        e.target.reset();
        setSuccessMessage("Your Account Create Successfull");
        navigate("/");
    })
    .catch(error => {
 setErrorMessage(error.message);
    })
  };
  return (
    <div className="h-[100vh]">
      <NavBar></NavBar>
      <div className="w-1/2 mx-auto p-10 rounded shadow mt-10">
        <div>
          <h2 className="text-4xl text-center font-semibold text-slate-600">
            Login your account
          </h2>
          <div className="divider"></div>
          <form onSubmit={handleLogin}>
            <div>
              <p className="font-semibold mb-3">Email Address</p>
              <input
                className="bg-[#f3f3f3] w-full outline-none  p-3 rounded"
                type="email"
                name="email"
                id="email"
                required
                placeholder="Enter Your Email Address"
              />
            </div>
            <div className="my-5">
              <p className="font-semibold mb-3">Password</p>
              <input
                className="bg-[#f3f3f3] w-full outline-none  p-3 rounded"
                type="password"
                name="password"
                id="password"
                required
                placeholder="Enter Your password"
              />
            </div>
            <div>
              {errorMessage && (
                <p className="text-error my-2">{errorMessage}</p>
              )}
              {successMessage && (
                <p className="text-success my-2">{successMessage}</p>
              )}
            </div>
            <button className="btn btn-primary text-white w-full">Login</button>
            <div className="flex items-center justify-center mt-5 gap-1">
              <p>Dont’t Have An Account ?</p>
              <Link to={`/signUp`} className="text-red-700 font-bold">
                Register
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

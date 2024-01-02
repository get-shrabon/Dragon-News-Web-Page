import { useContext, useState } from "react";
import NavBar from "../Shared/NavBar/NavBar";
import { AuthContext } from "../../Provider/AuthProvider";
import { useNavigate } from "react-router-dom";

const SignUpPage = () => {
  const { user, userCreate } = useContext(AuthContext);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const navigate = useNavigate();
  console.log(user);
  const handleSignUp = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const name = e.target.name.value;
    const image = e.target.image.value;
    const condition = e.target.terms.checked;
    console.log(email, password, name, image, condition);
    setErrorMessage("");
    setSuccessMessage("");
    // Validation Form
    {
      if (!condition) {
        setErrorMessage("Please Accept Our Conditions!");
        return;
      } else if (password < 6) {
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
    // User Creator
    userCreate(email, password)
      .then((result) => {
        e.target.reset();
        console.log(result.user);
        setSuccessMessage("Your Account Create Successfull");
        navigate("/");
      })
      .catch((error) => {
        setErrorMessage(error.message);
      });
  };
  return (
    <div className="pb-10 2xl:h-[100vh]">
      <NavBar></NavBar>
      <div className="w-1/2 mx-auto p-10 rounded shadow mt-10">
        <div>
          <h2 className="text-4xl text-center font-semibold text-slate-600">
            Login your account
          </h2>
          <div className="divider"></div>
          <form onSubmit={handleSignUp}>
            <div>
              <p className="font-semibold mb-3">Your Name</p>
              <input
                className="bg-[#f3f3f3] w-full outline-none  p-3 rounded"
                type="text"
                name="name"
                id="name"
                required
                placeholder="Enter Your Name"
              />
            </div>
            <div className="my-5">
              <p className="font-semibold mb-3">Photo URL</p>
              <input
                className="bg-[#f3f3f3] w-full outline-none  p-3 rounded"
                type="text"
                name="image"
                id="image"
                required
                placeholder="Enter Your Photo URL"
              />
            </div>
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
            <div className="flex items-center gap-2 mb-5">
              <input
                className="checkbox-warning checkbox"
                type="checkbox"
                name="condition"
                id="terms"
              />
              <label className="cursor-pointer" htmlFor="terms">
                {" "}
                Accept our Terms & Conditions
              </label>
            </div>
            <div>
              {errorMessage && (
                <p className="text-error my-2">{errorMessage}</p>
              )}
              {successMessage && (
                <p className="text-success my-2">{successMessage}</p>
              )}
            </div>
            <button className="btn btn-primary text-white w-full">
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;

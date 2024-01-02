import NavBar from "../Shared/NavBar/NavBar";

const SignUpPage = () => {
  const handleSignUp = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const name = e.target.name.value;
    const image = e.target.image.value;
    const condition = e.target.terms.checked;

    console.log(email, password, name, image,condition);
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

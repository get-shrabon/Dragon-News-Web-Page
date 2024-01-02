import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="bg-white w-full h-[100vh] flex items-center justify-center">
      <div className="container mx-auto text-center">
        <h1 className="text-3xl text-slate-600 font-bold">Oops!</h1>
        <h1 className="text-4xl font-medium">Page Not Found</h1>
        <Link to={`/`}>
          <button className="btn btn-error mt-3 text-white">
            <FaHome /> Go Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;

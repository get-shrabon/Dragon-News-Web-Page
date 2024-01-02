import moment from "moment/moment";
import PropTypes from "prop-types";
import { CiBookmark, CiShare2 } from "react-icons/ci";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { FaEye } from "react-icons/fa";

const SingleNews = ({ data }) => {
  const { title, author, image_url, details, total_view, rating } = data;
  const { img, name } = author;
  return (
    <div className="mb-7">
      <div className="flex items-center justify-between bg-slate-200 p-3 rounded-t">
        <div className="author__ flex items-center gap-3">
          <img className="rounded-full w-[50px]" src={img} alt="" />
          <div>
            <h5 className="font-semibold text-slate-600">{name}</h5>
            <p>{moment().format(" MMMM D, YYYY")}</p>
          </div>
        </div>
        <div className="flex items-center gap-3 text-2xl text-slate-600">
          <Link>
            <CiBookmark />
          </Link>
          <Link>
            <CiShare2 />
          </Link>
        </div>
      </div>
      <div className="p-3 border rounded-b">
        <h2 className="text-xl font-bold text-slate-600">{title}</h2>
        <img className="w-full my-4" src={image_url} alt="" />
        <p className="line-clamp-4"> {details} </p>
        <Link className="text-[#FF8C47] font-bold">Read More</Link>
        <div className="divider"></div>
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2 text-[#FF8C47]">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <p className="text-slate-400 mb-0 pb-0">{rating.number}</p>
          </div>
          <div className="flex items-center gap-2">
            <FaEye className="text-xl" />
            <p>{total_view}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleNews;
SingleNews.propTypes = {
  data: PropTypes.object.isRequired,
};

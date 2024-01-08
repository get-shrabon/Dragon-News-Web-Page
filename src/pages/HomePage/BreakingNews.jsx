
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
const BreakingNews = () => {
    
    return (
      <div className="p-2 bg-slate-200 flex">
        <button className="btn btn-error rounded-none">Latest</button>
        <Marquee pauseOnHover={true} autoFill={true}>
          <Link to="/" className="mx-5"> Match Highlights: Germany vs Spain — as it happened</Link>
          <Link to="/" className="mx-5"> Match Highlights: Germany vs Spain — as it happened</Link>
        </Marquee>
      </div>
    );
    
};

export default BreakingNews;

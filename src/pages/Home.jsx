import { Link, Route } from "react-router-dom";

function Home() {
  return (
    <div>
      <Link className="font-bold text-3xl text-blue-500 hover:text-orange-500" to="/portfolio">Go to Portfolio</Link>
    </div>
    
  );
}

export default Home;
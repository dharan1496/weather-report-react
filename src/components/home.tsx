import { Link, Outlet } from "react-router-dom";

export const Home = () => {
    return <div>
        <Link to="weather">Weather</Link>
        <Outlet />
    </div>;
}
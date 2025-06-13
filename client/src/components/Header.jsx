import { NavLink } from "react-router";
import { Link } from "react-router";

export default function Header() {
  return (
    <>
      <nav className="flex justify-center gap-4">
        <NavLink to={"/"}>Home</NavLink>
        <Link to={"/jobboard"}>Job board</Link>
        <Link to={"/profile"}>Profile</Link>
      </nav>
    </>
  );
}

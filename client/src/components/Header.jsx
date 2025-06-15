import { NavLink } from "react-router";

export default function Header() {
  return (
    <header className=" mx-3 md:mx-8 my-4 flex justify-between items-center bg-white px-6 py-3 rounded-3xl shadow-sm">
      <img
        src="./assets/logos/hirely-logo-text.svg"
        alt="Hirely logo"
        className="w-20 md:w-25"
      />
      <nav className="flex gap-4 md:gap-8 font-medium text-md md:text-lg">
        <NavLink to={"/"}>Dashboard</NavLink>
        <NavLink to={"/jobboard"}>Job board</NavLink>
      </nav>
    </header>
  );
}

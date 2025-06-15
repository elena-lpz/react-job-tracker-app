import { NavLink } from "react-router";

export default function Header() {
  return (
    <header className="mx-8 my-4 flex justify-between items-center bg-white px-6 py-3 rounded-3xl shadow-sm">
      <img src="./assets/logos/hirely-logo-text.svg" alt="Hirely logo" />
      <nav className="flex gap-8 font-medium text-lg">
        <NavLink to={"/"}>Dashboard</NavLink>
        <NavLink to={"/jobboard"}>Job board</NavLink>
      </nav>
    </header>
  );
}

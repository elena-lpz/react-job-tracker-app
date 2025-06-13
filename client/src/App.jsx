import { Routes, Route } from "react-router";
import "./App.css";
import JobBoard from "./components/JobBoard";
import Header from "./components/Header";
import Dashboard from "./components/Dashboard";
import Profile from "./components/Profile";

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path={"/"} element={<Dashboard />} />
        <Route path={"/jobboard"} element={<JobBoard />} />
        <Route path={"/profile"} element={<Profile />} />
      </Routes>
    </>
  );
}

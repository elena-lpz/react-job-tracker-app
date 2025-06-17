import { Routes, Route } from "react-router";
import "./App.css";
import JobBoard from "./components/JobBoard";
import Header from "./components/Header";
import Dashboard from "./components/Dashboard";
import NotFound from "./components/NotFound";

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path={"/"} element={<Dashboard />} />
        <Route path={"/jobboard"} element={<JobBoard />} />
        <Route path={"/*"} element={<NotFound />} />
      </Routes>
    </>
  );
}

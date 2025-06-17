import { Link } from "react-router";

export default function NotFound() {
  return (
    <div className="flex flex-wrap flex-col justify-start items-center gap-6 h-screen pt-5">
      <img
        className="bg-white rounded-2xl"
        src="./assets/misc/notfound.png"
        alt="not found image"
      />
      <div className="flex flex-col gap-4">
        <h2 className="text-xl md:text-2xl">Ooops, nothing to see here.</h2>
        <Link
          to={"/"}
          className="bg-neutral-900 text-white py-2 px-3 rounded-4xl flex justify-center text-md md:text-lg"
        >
          Go back to Dashboard
        </Link>
      </div>
    </div>
  );
}

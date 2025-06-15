import { IconMapPin, IconTrash } from "@tabler/icons-react";

const JobCard = ({ jobTitle, companyName, location, onClick, onDelete }) => {
  return (
    <div
      onClick={onClick}
      className="hover:cursor-pointer border border-gray-200 rounded-2xl shadow-sm p-6 my-2 bg-white hover:bg-gray-100 w-full"
    >
      <div className=" flex justify-between items-center text-lg font-semibold mb-4">
        <h2>{jobTitle}</h2>
        <IconTrash
          size={20}
          color="grey"
          onClick={(e) => {
            e.stopPropagation();
            onDelete();
          }}
        />
      </div>
      <div className="flex flex-row justify-between text-gray-700 text-sm ">
        <div className=" font-medium">{companyName} </div>
        <div className="flex justify-between gap-1 items-center">
          <IconMapPin size={16} color="grey" />
          {location}
        </div>
      </div>
    </div>
  );
};

export default JobCard;

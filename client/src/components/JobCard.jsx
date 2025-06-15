import { IconMapPin, IconBriefcase } from "@tabler/icons-react";

const JobCard = ({ jobTitle, companyName, location }) => {
  return (
    <div className="hover:cursor-pointer border border-gray-200 rounded-2xl shadow-md p-6 my-2 bg-white hover:bg-gray-100 w-full">
      <div className="text-lg font-semibold mb-4">{jobTitle}</div>
      <div className="flex flex-col sm:flex-row justify-between text-gray-700 text-sm ">
        <div className=" font-medium">{companyName}</div>
        <div className="flex justify-between gap-1 items-center">
          <IconMapPin size={16} color="grey" />
          {location}
        </div>
      </div>
    </div>
  );
};

export default JobCard;

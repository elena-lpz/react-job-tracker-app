const JobCard = ({ jobTitle, companyName, location }) => {
  return (
    <div className="hover:cursor-pointer border border-gray-300 rounded-lg p-4 my-2 bg-gray-100 hover:bg-gray-200 w-full">
      <div className="text-lg font-semibold mb-2">{jobTitle}</div>
      <div className="flex flex-col sm:flex-row justify-between text-gray-700 text-sm  gap-1">
        <div>{companyName}</div>
        <div>{location}</div>
      </div>
    </div>
  );
};

export default JobCard;

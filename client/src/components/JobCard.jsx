const JobCard = ({ jobTitle, companyName, location }) => {
  return (
    <div className="border border-gray-300 rounded-lg p-2 m-2 bg-gray-100 w-52">
      <div className="text-base font-base py-2">{jobTitle}</div>
      <div className="flex gap-4 justify-between py-2 text-gray-700 text-sm">
        <div>{companyName}</div>
        <div>{location}</div>
      </div>
    </div>
  );
};

export default JobCard;

import { FaLocationDot } from "react-icons/fa6";
import { HiCurrencyDollar } from "react-icons/hi";

const Job = ({ job }) => {
    const { id, company_name, job_title, location, logo, salary, job_type, remote_or_onsite } = job;
    console.log(job)
    return (
        <div className="border border-gray-300 p-6 space-y-4 rounded-md">
            <img src={logo} alt="" />
            <div>
                <h3 className="text-2xl font-semibold">{job_title}</h3>
                <p className="text-[#757575] font-semibold text-lg">{company_name}</p>
                <div className="py-4">
                    <button className="px-5 py-2 font-extrabold border rounded border-[#7E90FE] text-[#7E90FE] mr-4">{job_type}</button>
                    <button className="px-5 py-2 font-extrabold border rounded border-[#7E90FE] text-[#7E90FE]">{remote_or_onsite}</button>
                </div>
                <div className="flex gap-8">
                    <p className="flex items-center gap-2 text-[#757575] font-medium text-base"><FaLocationDot /> {location}</p>
                    <p className="flex items-center gap-2 text-[#757575] font-medium text-base"><HiCurrencyDollar /> {salary}</p>
                </div>
            </div>
            <button className="btn bg-[#7E90FE] text-white px-6 font-bold">View Details</button>
        </div>
    );
};

export default Job;
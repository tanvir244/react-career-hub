import { FaLocationDot } from "react-icons/fa6";
import { HiCurrencyDollar } from "react-icons/hi";

const JobList = ({ job }) => {
    const { id, company_name, job_title, location, logo, salary, job_type, remote_or_onsite } = job;

    return (
        <div className="w-[70%] mx-auto">
            
            <div className="p-4 border flex flex-col md:flex-row items-center justify-between mb-4">
                <div className="flex flex-col md:flex-row gap-4">
                    <div className="bg-[#F4F4F4] p-4 flex items-center">
                        <img src={logo} alt="" />
                    </div>
                    <div>
                        <h3 className="text-2xl font-semibold">{job_title}</h3>
                        <p className="text-[#757575] font-semibold text-lg">{company_name}</p>
                        <div className="py-4">
                            <button className="px-5 py-2 font-extrabold border rounded border-[#7E90FE] text-[#7E90FE] mr-4">{job_type}</button>
                            <button className="px-5 py-2 font-extrabold border rounded border-[#7E90FE] text-[#7E90FE]">{remote_or_onsite}</button>
                        </div>
                        <div className="flex flex-col md:flex-row gap-2 md:gap-8">
                            <p className="flex items-center gap-2 text-[#757575] font-medium text-base"><FaLocationDot /> {location}</p>
                            <p className="flex items-center gap-2 text-[#757575] font-medium text-base"><HiCurrencyDollar /> {salary}</p>
                        </div>
                    </div>
                </div>
                <button className="btn bg-[#7E90FE] text-white px-6 font-bold mt-4 md:mt-0">View Details</button>
            </div>
        </div>
    );
};

export default JobList;
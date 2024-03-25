import { useLoaderData, useParams } from "react-router-dom";
import { BiDollarCircle } from "react-icons/bi";
import { PiSubtitlesBold } from "react-icons/pi";
import { FaLocationDot } from "react-icons/fa6";
import { saveJobApplication } from "../Utility/Utility";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const JobDetails = () => {
    const jobs = useLoaderData();
    const { id } = useParams();
    const idInt = parseInt(id);
    const job = jobs.find(job => job.id === idInt);
    const { job_description, job_responsibility, educational_requirements, experiences, salary, job_title, contact_information } = job;

    const handleApplyJob = () => {
        saveJobApplication(idInt);
        toast("You have applied successfully!");
    }

    return (
        <div>
            {/* detail banner */}
            <div
                style={{
                    backgroundImage: `url(/src/assets/images/bg1.png)`,
                    backgroundRepeat: "no-repeat",
                }}
                className="py-20 text-center"
            >
                <h2 className="text-5xl font-bold">Job Details</h2>
            </div>
            {/* detail contents */}
            <div className="w-[85%] mx-auto py-8 grid gap-4 md:grid-cols-4">
                <div className="border md:col-span-3 space-y-12 p-8">
                    <p className="text-2xl text-center mt-4"><span className="font-bold">Job Id: </span>{idInt}</p>
                    <p className="text-[#757575]"><span className="font-bold text-black">Job Description: </span>{job_description}</p>
                    <p className="text-[#757575]"><span className="font-bold text-black">Job Description: </span>{job_responsibility}</p>
                    <p>
                        <p className="font-bold">Educational Requirement:</p>
                        <p className="text-[#757575]">{educational_requirements}</p>
                    </p>
                    <p>
                        <p className="font-bold">Experience</p>
                        <p className="text-[#757575]">{experiences}</p>
                    </p>
                </div>
                <div className="border md:col-span-1 bg-[#f3f2ff] p-6 space-y-4">
                    <div>
                        <h3 className="text-xl font-bold py-3 border-b-2 border-[#7E90FE] mb-4">Job Details</h3>
                        <p className="flex gap-2 py-1"><span className="text-[#7E90FE] text-xl"><BiDollarCircle /></span> <span className="font-bold">Salary: </span> {salary}</p>
                        <p className="flex gap-2 py-1"><span className="text-[#7E90FE] text-xl"><PiSubtitlesBold /></span> <span className="font-bold">JobTitle: </span> {job_title}</p>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold py-3 border-b-2 border-[#7E90FE] mb-4">Contact Information</h3>
                        <p className="flex gap-2 py-1"><span className="text-[#7E90FE] text-xl"><BiDollarCircle /></span> <span className="font-bold">Phone: </span> {contact_information.phone}</p>
                        <p className="flex gap-2 py-1"><span className="text-[#7E90FE] text-xl"><PiSubtitlesBold /></span> <span className="font-bold">Email:</span> {contact_information.email}</p>
                        <p className="flex gap-2 py-1"><span className="text-[#7E90FE] text-xl"><FaLocationDot /></span> <span className="font-bold">Address:</span> {contact_information.address}</p>
                    </div>
                    {/* <button onClick={() => handleApplyJob()} className="btn bg-[#7E90FE] text-white px-6 font-bold w-full">Apply Now</button> */}
                    <button onClick={handleApplyJob} className="btn bg-[#7E90FE] text-white px-6 font-bold w-full">Apply Now</button>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default JobDetails;
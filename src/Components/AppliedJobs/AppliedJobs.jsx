import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../Utility/Utility";
import JobList from "../JobList/JobList";

const AppliedJobs = () => {
    const jobs = useLoaderData();
    const [appliedJobs, setAppliedJobs] = useState([]);
    const [displayJobs, setDisplayJobs] = useState([]);

    const handleJobsFilter = filter => {
        if(filter === 'all'){
            setDisplayJobs(appliedJobs);
        } 
        else if(filter === 'remote'){
            const remoteJobs = appliedJobs.filter(job => job.remote_or_onsite === 'Remote');
            setDisplayJobs(remoteJobs);
        }
        else if(filter === 'onsite'){
            const onsiteJobs = appliedJobs.filter(job => job.remote_or_onsite === 'Onsite');
            setDisplayJobs(onsiteJobs);
        }
    }
    console.log(jobs);
    useEffect(() => {
        const storedJobIds = getStoredJobApplication();
        if (jobs.length > 0) {
            const jobsApplied = [];
            for (const id of storedJobIds) {
                const job = jobs.find(job => job.id === id);
                if (job) {
                    jobsApplied.push(job);
                }
            }
            setAppliedJobs(jobsApplied);
            setDisplayJobs(jobsApplied);
        }
    }, [jobs])

    return (
        <div>
            {/* detail banner */}
            <div
                style={{
                    backgroundImage: `url(/images/bg1.png)`,
                    backgroundRepeat: "no-repeat",
                }}
                className="py-20 text-center"
            >
                <h2 className="text-5xl font-bold">Applied Jobs</h2>
            </div>
            <div className="w-[70%] mx-auto flex justify-end mt-2 mb-4">
                <details className="dropdown">
                    <summary className="m-1 btn">Filter By</summary>
                    <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                        <li onClick={() => handleJobsFilter('all')}><a>All</a></li>
                        <li onClick={() => handleJobsFilter('remote')}><a>Remote</a></li>
                        <li onClick={() => handleJobsFilter('onsite')}><a>Onsite</a></li>
                    </ul>
                </details>
            </div>
            <div className="mb-12">
                {
                    displayJobs.map(job => <JobList
                        key={job.id}
                        job={job}
                    ></JobList>)
                }
            </div>
        </div>
    );
};

export default AppliedJobs;
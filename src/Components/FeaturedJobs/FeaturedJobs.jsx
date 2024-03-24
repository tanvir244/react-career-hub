import { useEffect, useState } from "react";
import Job from "../Job/Job";

const FeaturedJobs = () => {
    const [jobs, setJobs] = useState([]);
    const [dataLength, setDataLength] = useState(4);

    useEffect(() => {
        fetch('jobs.json')
            .then(res => res.json())
            .then(data => setJobs(data))
    }, [])

    return (
        <div className="w-[94%] md:max-w-6xl mx-auto my-6">
            <div className="text-center">
                <h2 className="text-4xl font-bold mb-4">Featured Jobs</h2>
                <p className="text-[#757575]">Explore thousands of job opportunities with all the information you need. Its your future.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                {
                    jobs.slice(0, dataLength).map(job => <Job
                        key={job.id}
                        job={job}
                    ></Job>)
                }
            </div>
            <div className={dataLength === jobs.length ? 'hidden' : 'text-center'}>
                <button
                    onClick={() => setDataLength(jobs.length)}
                    className="btn bg-[#7E90FE] text-white px-6 font-bold">Show All Jobs</button>
            </div>
        </div>
    );
};

export default FeaturedJobs;
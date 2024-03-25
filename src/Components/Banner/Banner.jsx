
const Banner = () => {
    return (
        <div className="bg-[#f9f9ff]">
            <div className="w-[94%] md:max-w-6xl mx-auto flex flex-col-reverse gap-4 md:flex-row justify-between items-center">
                <div className="w-full md:w-[40%] space-y-4 md:space-y-8 mb-4 md:mb-0">
                    <h2 className="text-4xl md:text-5xl font-bold md:space-y-4 md:leading-tight">One Step <br />Closer To Your <br /><span className="text-[#7E90FE]">Dream Job</span></h2>
                    <p className="text-[#757575]">Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                    <button className="bg-[#7E90FE] text-white font-semibold py-3 px-6 rounded-md">Get Started</button>
                </div>
                <div className="w-full md:w-[46%]">
                    <img src="/images/user.png" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Banner;
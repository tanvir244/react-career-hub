
const JobCategory = () => {
    return (
        <div className="w-[94%] md:max-w-6xl mx-auto text-center py-14">
            <h2 className="text-4xl font-bold mb-4">Job Category List</h2>
            <p className="text-[#757575]">Explore thousands of job opportunities with all the information you need. Its your future.</p>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-10">
                <div className="bg-[#f9f9ff] py-10 px-8 space-y-2 text-start">
                    <img src="/src/assets/icons/accounts.png" alt="" />
                    <h3 className="text-xl font-semibold">Account and Finance</h3>
                    <p className="text-base text-[#757575]">300 Jobs Available</p>
                </div>
                <div className="bg-[#f9f9ff] py-10 px-8 space-y-2 text-start">
                    <img src="/src/assets/icons/creative.png" alt="" />
                    <h3 className="text-xl font-semibold">Creative Design</h3>
                    <p className="text-base text-[#757575]">300 Jobs Available</p>
                </div>
                <div className="bg-[#f9f9ff] py-10 px-8 space-y-2 text-start">
                    <img src="/src/assets/icons/marketing.png" alt="" />
                    <h3 className="text-xl font-semibold">Marketing & Sales</h3>
                    <p className="text-base text-[#757575]">300 Jobs Available</p>
                </div>
                <div className="bg-[#f9f9ff] py-10 px-8 space-y-2 text-start">
                    <img src="/src/assets/icons/chip.png" alt="" />
                    <h3 className="text-xl font-semibold">Engineering Job</h3>
                    <p className="text-base text-[#757575]">300 Jobs Available</p>
                </div>
               
            </div>
        </div>
    );
};

export default JobCategory;
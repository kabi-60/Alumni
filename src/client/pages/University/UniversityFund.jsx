import React from 'react';
import UniversityMiniStatement from '../../components/University/UniveersityMiniStatement';
import UniversityTotalAlumini from './UniversityTotalAlumini';
import UniversityTotalJob from './UniversityTotalJob';
import UniversityFundresponse from './UniversityFundresponse';
import UniversityJobPosting from './UniversityJobPosting';


const UniversityFund = () => {
  // Define the class names for the grid items
  const gridItemClasses = `rounded-3xl bg-[#1E1E1E]  px-2  text-3xl font-bold`;
  const box = `rounded-3xl bg-[#1E1E1E]  h-[200px] w-[200px]  text-3xl font-bold`;
  return (
    <div className="flex h-[90vh] w-full flex-col items-center justify-center p-6  text-slate-400 xl:text-slate-400">
      <div className="grid h-full w-full grid-cols-3 gap-4">
        <div className="col-span-1 row-span-4">
          <div className="flex h-full w-full  gap-6 rounded-3xl bg-[#1E1E1E] px-12 text-">
         <UniversityFundresponse/>
          
          </div>
        </div>
        <div className="col-span- row-span-2">
          <div className="flex h-full w-full  gap-6 rounded-3xl bg-[#1E1E1E] px-12 ">
           <UniversityTotalAlumini/>
          </div>
        </div>
        
        <div className={`row-span-6  ${gridItemClasses}`}>
            <UniversityMiniStatement/>
        </div>
        <div className="col-span- row-span-2">
          <div className="flex h-full w-full gap-6 rounded-3xl bg-[#1E1E1E] px-12 ">
          <UniversityTotalJob/>
          </div>
        </div>
        <div className={`h-[15vh] col-span-2  text-white ${gridItemClasses}`}><UniversityJobPosting/></div>
        {/* <div className={`row-span-1  ${gridItemClasses}`}>Playtime Essentials</div> */}
        <div className={`row-span-1 col-span-2 grid grid-cols-5 gap-10 `}>
          

            <div className={`${gridItemClasses} flex justify-center items-center p-2 `}>
              <div className='flex-col justify-center'>

            <i class="fa-solid fa-award text-white text-center text-6xl"></i>
            <p className='text-[#87888C] text-lg font-medium upper'>Award</p>
              </div>
            </div>
            <div className={`${gridItemClasses} flex justify-center items-center p-2 `}>
            <div className='flex-col justify-center'>

            <i class="fa-solid fa-bullseye  text-white text-6xl"></i>
            <p className='text-[#87888C] text-lg font-medium upper ml-2'>Goals</p>

              </div>
            </div>

            <div className={`${gridItemClasses} flex justify-center items-center p-2 `}>
            <div className='flex-col justify-center'>
            <i class="fa-solid fa-trophy text-white ml-5 text-6xl"></i>
            <p className='text-[#87888C] text-lg font-medium upper'>Achievement</p>

            </div>
              
            </div>
            <div className={`${gridItemClasses} flex justify-center items-center p-2 `}>
            <div className='flex-col justify-center'>
            <i class="fa-solid fa-briefcase text-white ml-3 text-6xl"></i>
            <p className='text-[#87888C] text-lg font-medium upper'>Placement</p>

            </div>

            </div>
            <div className={`${gridItemClasses} flex justify-center items-center p-2 `}>
            <div className='flex-col justify-center'>

            <i class="fa-solid fa-comments text-white text-6xl ml-3"></i>
            <p className='text-[#87888C] text-lg font-medium upper'>Communication</p>

            </div>

            </div>
            </div>

      </div>
    </div>
  );
};

export default UniversityFund;

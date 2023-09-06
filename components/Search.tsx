'use client';

import { BiSearch } from 'react-icons/bi';

const Search = () => {
  return (
    <div
      className='w-full md:w-auto border-[1px] py-2 rounded-full shadow-sm hover:shadow-md transition cursor-pointer'
    >
      <div className='flex flex-row items-center justify-between'>
        <div className='text-sm font-semibold px-6'>Anywhere</div>
        <div className='hidden sm:block text-sm font-semibold px-6 flex-1 border-x-[1px] text-center'>Any Week</div>
        <div className='text-sm pl-6 pr-2 text-gray-600 flex flex-row gap-3 items-center'>
          <div className='hidden sm:block'>Any Guests</div>
          <div className='p-2 bg-rose-500 rounded-full text-white'>
            <BiSearch size={18} />
          </div>
        </div>
      </div>
    </div>
  )
};

export default Search;
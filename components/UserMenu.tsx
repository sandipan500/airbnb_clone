'use client';

import { AiOutlineMenu } from 'react-icons/ai';
import { useCallback, useState } from 'react';

import ItemMenu from './ItemMenu';
import Avatar from './Avatar';

const UserMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = useCallback(() => {
    setIsOpen((value) => !value);
  }, []);

  return (
    <div className='relative'>
      <div className='flex flex-row items-center gap-3'>
        <div
          onClick={() => {}}
          className='hidden md:block text-sm font-semibold px-4 py-3 rounded-full hover:bg-neutral-100 transition cursor-pointer'
        >
          Airbnb your home
        </div>
        <div
          onClick={toggleOpen}
          className='p-4 md:px-2 md:py-1 border-neutral-200 border-[1px] flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition'
        >
          <AiOutlineMenu />
          <div className='hidden md:block'>
            <Avatar />
          </div>
        </div>
      </div>

      {isOpen && (
        <div className='absolute rounded-xl shadow-md w-[40vw] md:w-3/4 bg-white overflow-hidden right-0 top-12 text-sm'>
          <div className='flex flex-col cursor-pointer'>
            <>
              <ItemMenu
                onClick={() => {}}
                label='My trips'
              />
              <ItemMenu
                onClick={() => {}}
                label='My favorites'
              />
              <ItemMenu
                onClick={() => {}}
                label='My reservations'
              />
              <ItemMenu
                onClick={() => {}}
                label='My properties'
              />
              <ItemMenu
                onClick={() => {}}
                label='Login'
              />
            </>
          </div>
        </div>
      )}
    </div>
  )
};

export default UserMenu;
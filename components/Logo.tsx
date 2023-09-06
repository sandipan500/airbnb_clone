'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

const Logo = () => {
  const router = useRouter();

  return (
    <Image
      onClick={() => {}}
      className='hidden md:block cursor-pointer'
      src='/logo.png'
      alt='logo'
      width='100'
      height='100'
    />
  )
};

export default Logo;
'use client';

interface ContainerProps {
  children: React.ReactNode;
};

const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <div className='mx-auto max-w-[2520px] xl:px-20 md:px-10 sm:px-2 px-4'>
      {children}
    </div>
  )
};

export default Container;
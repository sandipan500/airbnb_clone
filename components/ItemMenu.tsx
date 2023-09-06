'use client';

interface ItemMenuProps {
  onClick: () => void;
  label: string;
};

const ItemMenu: React.FC<ItemMenuProps> = ({ onClick, label }) => {
  return (
    <div
      onClick={onClick}
      className='px-4 py-3 hover:bg-neutral-100 font-semibold transition'
    >
      {label}
    </div>
  )
};

export default ItemMenu;
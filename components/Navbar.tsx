 import { useState } from 'react';
import React from 'react';
 import Link from 'next/link';

const Navbar = () => {
  const [activeItem, setActiveItem] = useState<string>('');
  const items :string []=['About','Project','Resume'];
  return (
    <div className='flex justify-between px-5 py-3 my-3'>
      <span className='font-bold text-green-500 text-lg border-b-4 border-green-500'>{activeItem}</span>
     <div className='flex space-x-3 text-lg'>
        
      {
        items.map((e:string)=>
        (
          <Link key={e} href={`/${e}`} onClick={() => setActiveItem(e)} className="hover:text-green-500">
         {e}
        </Link>          
        )
        )
       }
      </div>
    </div>
  );
}
export default Navbar




import React, { useEffect, useState } from 'react';
import { Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

const HomeBottomText = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formattedTime = `${time.getHours().toString().padStart(2, '0')}:${time.getMinutes().toString().padStart(2, '0')}:${time.getSeconds().toString().padStart(2, '0')}`;

  return (
    <div className='w-full relative'>
      <div>
        <p className='absolute right-0 bottom-32 w-full lg:w-70 lg:text-[1vw] font-[font1] leading-[1.3vw] px-2'>
          K72 est une agence qui pense chaque action pour nourrir la marque. Demain, dans 5 mois et dans 5 ans. On cherche la friction qui crée l’étincelle pour générer de l’émotion. Pour assurer une relation honnête, on est sans filtre, on dit ce qui doit être dit, on fait ce qui doit être fait.
        </p>
      </div>

      <div className='flex flex-col sm:flex-row justify-between items-end gap-6 sm:gap-10 px-2 mb-3'>
        <div className='flex items-center gap-4'>
          <Globe className='h-6 w-6' />
          <span className='font-mono text-xs sm:text-sm md:text-base uppercase'>
            Montreal_ <span>{formattedTime}</span>
          </span>
        </div>

        <div className='flex gap-4 sm:gap-10 font-[font2] '>
          <div className='border-2 hover:border-[#D3FD50] hover:text-[#D3FD50] flex items-center justify-center rounded-full uppercase'>
            <Link className='text-xs sm:text-lg md:text-xl lg:text-[5vw] px-6 sm:px-10' to='/projects'>Projects</Link>
          </div>
          <div className='border-2 hover:border-[#D3FD50] hover:text-[#D3FD50] flex items-center justify-center rounded-full uppercase'>
            <Link className='text-xs sm:text-lg md:text-xl lg:text-[5vw] px-10 sm:px-10' to='/agence'>Agence</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeBottomText;

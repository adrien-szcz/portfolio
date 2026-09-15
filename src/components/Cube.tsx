import { useState } from "react";

const Cube: React.FC = () => {

	const [isBig, setIsBig] = useState<boolean>(false);
	
	const testFunc = (): void => {
        setIsBig(!isBig);
    };

  return (
    <div className='size-60 lg:size-80 transition-all duration-300 perspective-distant'>
      <div className={`
          relative transform-3d origin-center 
					*:border *:border-soft-accent
          *:bg-accent/50 *:size-60 lg:*:size-80 *:absolute
					animate-rotate 
					*:hover:bg-accent-bg
					${isBig ?
									'scale-120 transition-all duration-500' :
									'scale-100 transition-all duration-500'}
        `}>
        <div onClick={() => testFunc()} className='translate-z-30 lg:translate-z-40'></div>
        <div onClick={() => testFunc()} className='-translate-x-30 lg:-translate-x-40 rotate-y-270'></div>
        <div onClick={() => testFunc()} className='translate-y-30 lg:translate-y-40 rotate-x-270'></div>
        <div onClick={() => testFunc()} className='-translate-y-30 lg:-translate-y-40 rotate-x-90'></div>
        <div onClick={() => testFunc()} className='translate-x-30 lg:translate-x-40 rotate-y-90'></div>
        <div onClick={() => testFunc()} className='-translate-z-30 lg:-translate-z-40 rotate-y-180'></div>
      </div>
    </div>
  );
};

export default Cube;
import type { LanguageAndPicture } from '../utils/type'

const Language: React.FC<LanguageAndPicture> = (props) => {

  return (
    <div className='border rounded-md p-4 flex flex-col bg-secondary-bg w-40 items-center'>
        <img className='size-10'
        src={`/public/${props.imgSource}`} 
        alt={`${props.text} logo`}/>

        <p>{props.text}</p>

    </div>
  );
};

export default Language;
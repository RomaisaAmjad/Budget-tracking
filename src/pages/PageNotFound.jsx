import ErrorImg from '../assets/404Error.png';
import WorriedKid from '../assets/WorriedKid.png';
import TypingEffect from '../Components/TypingEffect.jsx';

export default function PageNotFound() {
  return (
    <div className="  flex items-center min-h-screen bg-red-500 ">
        <div  className='flex flex-col justify-around items-center'
        > <img className='w-3/4 hover:cursor-pointer hover:animate-bounce' src={ErrorImg} alt="Error 404" />
        {/* <img  className='w-2/4 hover:cursor-pointer' src={WorriedKid} alt="Worried Kid" /> */}
        </div>
        <TypingEffect/>
     
    </div>
  );
}

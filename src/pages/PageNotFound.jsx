import ErrorImg from '../assets/404Error.png';
import WorriedKid from '../assets/worriedKid.png';

export default function PageNotFound() {
  return (
    <div className="  flex items-center min-h-screen bg-red-500 ">
        <div  className='flex flex-row justify-around items-center'
        > <img className='w-2/4 animate-bounce hover:cursor-pointer' src={ErrorImg} alt="Error 404" />
        <img  className='w-2/4 hover:animate-pulse hover:cursor-pointer' src={WorriedKid} alt="Worried Kid" /></div>
     
    </div>
  );
}

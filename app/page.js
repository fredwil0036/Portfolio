import myImage from './public/myImg.jpg';
import Image from "next/image";
import Skillz from '@/app/component/homepageComponent/Skills';


export default function Home() {
  return (
    <div>
      <div className='w-screen ' id='home'>
      <div className='w-full bg-red-400 '>
        <div className='h-auto grid grid-cols-1 lg:grid-cols-2 mr-32 ml-32'>
          <div className='w-full flex justify-center  m-auto'>
          <div className=' sm:pt-4'>
              <div className='pl-10'>
                <h1 className='text-4xl font-sans font-bold'>Hi,</h1>
                <h1 className="text-4xl">I'm <span className="animate-gradient-text bg-gradient-to-r from-yellow-500 via-green-300 to-yellow-500 bg-[length:200%] bg-clip-text text-transparent" id="name"> Fredwil Membrere </span> <br /> A Frontend & Backend Developer</h1>
                <p className='text-sm mt-10'>I'm a passionate Web Developer with a degree in Bachelor of Science in Information Technology from Urdaneta City University. I specialize in creating responsive, user-friendly web applications from front to back.</p>
              </div>
              {/* contacts */}
              <div className='w-full mt-2'>
                  <ul className='flex justify-center gap-4'>
                    <li >
                      <a href="#" className="fa fa-facebook"></a>
                    </li>
                    <li>
                      <a href="#" className="fa fa-twitter"></a>
                    </li>
                    <li>
                      <a href="#" className="fa fa-google"></a>
                    </li>
                    <li>
                      <a href="#" className="fa fa-linkedin"></a>
                    </li>
                    <li>
                      <a href="#" className="fa fa-instagram"></a>
                    </li>

                  </ul>
              </div>
          </div>
        </div>
        <div className='w-full  flex justify-center'>
          <div className='w-96 flex justify-center'>
          <Image className=' rounded-2xl object-cover pt-2 pb-2 w-full' src={myImage} alt="" />
          </div>
        </div>

        </div>
      </div>
    </div>
    </div>
    

  );
}

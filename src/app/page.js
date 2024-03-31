"use client";
import Image from "next/image";
import img1 from "@/assets/img1.png"
import img2 from "@/assets/img2.png"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Home() {

  const notify = () => toast("Hello World!");  

  return (
    <main className="bg-black w-screen h-screen flex flex-col items-center justify-between">

    <div className=" m-8 ">
      <div className=" p-2 text-white text-xl font-medium"> Loren Ipsum...</div>
      <div className=" text-gray-400 font-normal text-lg"> Loren Ipsum donor amet</div>
    </div>  

    <div className=" relative flex flex-col justify-center items-center">
      <Image alt="circle" src={img1}></Image>
      <Image alt="bell" src={img2} className=" absolute"></Image>
    </div>


    <ToastContainer />
      <div onClick={notify} className=" mb-20 sm:mb-8 md:mb-8" style={{background: 'transparent',
          backgroundImage: 'linear-gradient(90deg, rgba(157, 13, 61, 0) -13.1%, #DE502C 53.99%, #C6802C 113.76%), linear-gradient(90deg, rgba(157, 13, 61, 0) -13.1%, #DE502C 53.99%, #C6802C 113.76%)',
          backgroundClip: 'padding-box, border-box',
          backgroundOrigin: 'border-box',
          border: '5px solid transparent',
          borderRadius: '8px'}}>

        <div className="cursor-pointer w-80 h-11 flex items-center justify-center" style={{backgroundImage: 'linear-gradient(90deg, white, white)',
          backgroundClip: 'text',
          WebkitBackgroundClip: 'text',
          color: 'transparent',
          fontWeight: '600',
          fontSize: '1.25rem',
          lineHeight: '1.5rem',
          boxShadow: '0px 1px 2px 0px #0000001F' }} > 
          Send Notification
        </div>
      </div>
    </main>
  );
}







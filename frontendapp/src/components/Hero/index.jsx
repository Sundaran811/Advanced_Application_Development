import MainButton from "../Atoms/button";
import img1 from '../../assets/Citizen2.jpg';
import { Link } from "react-router-dom";
export default function Hero() {

  return (
    <div className="container mx-auto max-w-[1344px]" style={{backgroundColor:'white'}}>
      <div className="flex flex-col gap-[44px] p-5 py-6  min-h-screen h-auto justify-center md:p-0 lg:px-10 lg:pt-10 lg:pb-20 lg:min-h-fit lg:items-center lg:flex-row lg:justify-between lg:gap-5 overflow-hidden">
        <div className="flex flex-col items-center lg:items-start gap-8 lg:w-full lg:gap-[34px]">
          <section className="flex flex-col gap-5 sm:items-center text-center lg:text-left lg:gap-6 lg:items-start">
            <h1 className="text-[42px] leading-[52px] sm:w-4/5 md:text-5xl md:w-4/5 font-bold font-head text-primary-100 lg:text-6xl lg:leading-[70px]">
            Homecare Redefined: Where Wellness Begins...!
            </h1>
            <p className="text-lg font-body text-black-300 sm:w-4/5">
            Because those who made us deserve to age magnificently from the comfort of their own homes.
            </p>
          </section>
          <div className="w-full flex flex-col sm:w-4/5 md:flex-row justify-center gap-[18px] md:gap-[30px] lg:justify-start lg:w-4/5">
            <Link to="/booking"><MainButton primary={true}>Book Service</MainButton></Link>
          </div>
        </div>
        <div className="flex items-center justify-center lg:w-full">
          <img src="https://images.pexels.com/photos/6974995/pexels-photo-6974995.jpeg" style={{borderRadius:'20px',width:'60%'}} />
        </div>
      </div>
    </div>
  );
}

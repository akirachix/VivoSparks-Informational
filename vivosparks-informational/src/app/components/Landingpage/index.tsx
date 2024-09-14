import Image from 'next/image';
import Link from 'next/link';

const Landingpage = () => {
  return (
    <div id="home" className="relative w-full h-screen overflow-hidden"> 
  
      <Image src="/images/landing.png" alt="Landing Image" layout="fill" objectFit="cover" />

      <div className="absolute inset-0 flex flex-col justify-center items-center text-yellow-500 text-center px-4">
        <p className="text-[48px] md:text-[64px] font-extrabold mb-8 px-4 md:px-12 lg:px-20 text-center max-w-[1200px] text-customYellow font-nunito">
          Empower Your Financial <br /> Future with Investika
        </p>

        <Link href="#home" passHref>
          <button
            className="px-6 py-3 mt-8 md:mt-20 text-base md:text-lg bg-customBlue text-customDarkBlue rounded-custom hover:bg-blue-700 transition duration-300 font-nunito"
          >
            Get Started
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Landingpage;

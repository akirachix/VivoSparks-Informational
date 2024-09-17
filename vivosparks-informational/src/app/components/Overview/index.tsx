"use client";
import Image from 'next/image';

const Overview = () => {
  return (
    <div id='overview' className="px-[20px] mb-10">
      <div className="flex flex-col md:flex-row justify-around mt-20">
        <div className="lg:w-1/2 w-full flex flex-col md:m-12 nest-hub:mx-4 nest-hub-max:mx-4 lg:mt-[10%]">
          <h1 className="text-4xl lg:text-5xl font-bold text-[#1573B2] mt-4 font-nunito text-center lg:text-left nest-hub:leading-tight nest-hub:mt-2 nest-hub:text-2xl nest-hub-max:leading-loose nest-hub-max:mt-2 nest-hub-max:text-3xl ml-3">
            Empowering Your Financial Future
          </h1>
          <p className="text-lg lg:text-2xl text-black mt-5 leading-loose lg:leading-loose text-justify lg:text-left px-2 ipad-air:px-5 nest-hub:leading-normal nest-hub:text-xl nest-hub-max:leading-loose  nest-hub-max:text-xl">
            At Investika, we believe in the power of financial education. Our mission is to equip young professionals with the knowledge and tools necessary for informed investment decisions. Through our engaging finance game apps, we break down complex financial concepts into bite-sized, accessible lessons, making the process of learning about money management, investing, and risk assessment enjoyable and easy to understand.
          </p>
        </div>

        <div className="flex justify-start lg:min-h-fit mt-10 lg:mt-0 lg:w-1/2 md:mt-8 md:pl-6 overflow-hidden nest-hub:pt-2 nest-hub-max:pt-3">
          <div className="nest-hub:mr-5 nest-hub-max:mr-4 nest-hub:mt-11 nest-hub-max:mt-40 nest-hub-max:w-[620px]" >
            <Image
              src="/Images/investment.png"
              alt="Empowering Financial Future"
              width={800}
              height={400}
              className=" rounded-2xl object-cover sm:w-[755px] nest-hub:w-[800px] nest-hub-max:rounded-3xl nest-hub:h-[450px] nest-hub:rounded-3xl ipad-air:px-1 ipad-air:ml-2.5 nest-hub-max:w-[800px] nest-hub-max:h-[300px] sm:-ml-0"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;

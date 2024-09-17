import Image from 'next/image';


const About = () => {
    return (
        <div id='about' className='flex flex-col md:flex-row justify-around px-4 lg:px-24 mt-20 md:px-5 nest-hub:px-4 mt-6nest-hub-max:px-4'>
            <div className="lg:w-1/2 w-full lg:pr-6 flex flex-col md:m-12%] mt-20">
                <h1 className="text-4xl lg:text-5xl font-bold text-[#001d3d] mt-4 font-nunito text-center lg:text-left nest-hub:leading-tight nest-hub:mt-2 nest-hub:text-2xl nest-hub-max:leading-loose nest-hub-max:mt-10 nest-hub-max:text-3xl ml-3">
                    Fun. Entertaining. Amusing
                </h1>
                <h2 className="text-2xl lg:text-3xl font-semibold text-[#1573b2] mt-10 font-nunito text-center lg:text-left nest-hub:text-2xl nest-hub:mt-2 nest-hub:leading-tight nest-hub-max:leading-tight nest-hub-max:mt-2 nest-hub-max:text-2xl ml-3 sm:text-2xl">
                    A sweet adventure to earning wealth
                </h2>
                <p className="text-lg lg:text-2xl mt-10 leading-loose lg:leading-loose font-nunito text-justify lg:text-left px-2 nest-hub:leading-normal nest-hub:mt-8 nest-hub:text-xl nest-hub-max:leading-loose nest-hub-max:mt-10 nest-hub-max:text-xl sm:text-2xl">
                    Embark on a thrilling journey where investing meets adventure! Investika transforms the often daunting
                    world of financial investments into an exhilarating game designed just for you.
                </p>
                <p className="text-lg lg:text-2xl mt-10 leading-loose lg:leading-loose font-nunito text-justify lg:text-left px-2 nest-hub:leading-normal nest-hub:mt-8 nest-hub:text-xl nest-hub-max:leading-loose nest-hub-max:mt-10 nest-hub-max:text-xl sm:text-2xl">
                    Imagine navigating through vibrant landscapes filled with challenges, quests, and surprises as you learn
                    how to build your wealth. With every decision, you'll unlock new skills, discover exciting investment
                    opportunities, and gather rewards that boost your financial process.
                </p>
            </div>


            <div className="flex justify-center lg:justify-end min-h-fit mt-10 lg:mt-0 lg:w-1/2 md:mt-8 md:pl-6 overflow-hidden nest-hub:pt-2 nest-hub-max:pt-2">
                <Image
                    src="/images/dragon.png"
                    alt="Dragon guarding treasure"
                    width={685}
                    height={696}
                    className="rounded-lg object-cover sm:w-[755px] nest-hub:w-[800px] nest-hub:h-[450px] nest-hub-max:w-[1000px] nest-hub-max:h-[500px] nest-hub:rounded-[40px] nest-hub-max:rounded-[40px] mt-20"
                />
            </div>

        </div>
    );
};


export default About;

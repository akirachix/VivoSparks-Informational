import Image from 'next/image';

const Features = () => {
  return (
    <div id="features" className="w-full py-12 px-5 bg-white font-nunito">
      <div className="w-full mx-auto">
        <h1 className="text-3xl md:text-5xl font-extrabold text-center mb-12 text-customTextBlue font-nunito">
          Discover What Awaits You
        </h1>

        {/* Flex container with wrapping based on screen size */}
        <div className="flex flex-col md:flex-row lg:flex-wrap justify-between gap-10 w-full">

          {/* Card 1 */}
          <div className="flex-1  bg-white shadow-lg rounded-lg p-6 text-center border border-gray-200 flex flex-col items-center">
            <Image
              src="/images/wizard.png"
              alt="Get Financial Advice"
              width={350}
              height={350}
              className="rounded-xl object-cover"
            />
            <h2 className="mt-6 text-2xl font-semibold italic text-black">
              Get Financial Advice
            </h2>
            <p className="mt-3 text-black text-lg  px-5">
              We make gaining financial advice an exciting part of your adventure! Through interactive quests,
              you'll learn essential concepts like stocks, and risk management in a fun way.
            </p>
          </div>

          {/* Card 2 */}
          <div className="flex-1 bg-white shadow-lg rounded-lg p-6 text-center border border-gray-200 flex flex-col items-center">
            <Image
              src="/images/market-insights.png"
              alt="Real-Time Market Insights"
              width={350}
              height={500}
              className="rounded-xl object-cover"
            />
            <h2 className="mt-6 text-2xl font-semibold italic text-black">
              Real-Time Market Insights
            </h2>
            <p className="mt-3 text-black text-lg px-5">
              We bring real market insights to life in a fun and engaging manner! Through dynamic game features,
              you'll explore interactive challenges that simulate real market scenarios.
            </p>
          </div>

          {/* Card 3 */}
          <div className="flex-1 bg-white shadow-lg rounded-lg p-6 text-center border border-gray-200 flex flex-col items-center">
            <Image
              src="/images/progress.png"
              alt="Track Your Progress"
              width={340}
              height={540}
              className="rounded-xl object-cover"
            />
            <h2 className="mt-6 text-2xl font-bold italic text-black">
              Track Your Progress
            </h2>
            <p className="mt-3 text-black text-lg px-5">
              Each completed quest and challenge unlocks rewards, providing instant feedback on your growth.
              This gamified progress tracking keeps you motivated and empowered.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Features;

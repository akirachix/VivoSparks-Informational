import Image from "next/image";

export default function Characters() {
  return (
    <div className="nunito">
      <div className="text-center">
        <h1
          className="font-extrabold mt-8 text-blue-600 text-4xl sm:text-4xl md:text-4xl lg:text-4xl xl:text-[50px]">
          A Sweet Adventure In-Game
        </h1>
        <h2
          className="font-extrabold mt-20 text-gray-800 text-4xl sm:text-2xl md:text-4xl lg:text-4xl xl:text-[48px]">
          Characters
        </h2>
      </div>

      <section
        className="relative text-center py-12 bg-cover bg-center mt-24"
        style={{
          backgroundImage: "url('/images/Forest.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "100vh",
        }}w-full
      >
        <div className="text-center mt-24">
          <h1
            className="font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[40px]"
            style={{
              color: "#FFF6F6",
              fontWeight: "800",
              fontSize: "32px", 
            }}
          >
            Choose And Play Your <br /> Character
          </h1>
        </div>

        <div className="flex flex-wrap justify-center gap-10 sm:gap-12 md:gap-16 lg:gap-20 xl:gap-24 mt-24 px-4 sm:px-10 lg:px-20">
          {["ShadowClaw", "ThunderWing", "MysticFlare"].map((character, index) => (
            <div
              key={index}
              className="text-center mt-12 flex flex-col items-center w-full sm:w-auto"
              style={{ maxWidth: "350px", margin: "20px" }}
            >
              <img
                src={`/images/${character}.png`}
                alt={character}
                className="object-cover w-32 h-32 sm:w-40 sm:h-40 md:w-52 md:h-52 lg:w-64 lg:h-64 xl:w-72 xl:h-72 rounded-full mx-auto"
              />
              <h3
                className="mt-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-medium"
                style={{
                  color: "#F8BD00",
                  fontWeight: "800",
                  fontSize: "24px", 
                }}
              >
                {character}
              </h3>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

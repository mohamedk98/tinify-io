import React from "react";

function Home(props) {
  return (
    <main className="flex flex-col md:flex-row justify-center items-center mt-5">
      <div className="flex flex-col  items-center space-y-5">
        <h1 className="font-extrabold text-4xl md:text-5xl lg:text-6xl  ">
          Short links, big results
        </h1>

        <h2 className="text-center font-thin md:text-xl text-lg">
          A URL shortener built with powerful tools to help you grow and protect
          your brand.
        </h2>
      </div>
      <img src="/imgs/baby-boy.png" className="md:h-64 md:w-64 h-52 w-52" alt="brand" />
    </main>
  );
}

export default Home;

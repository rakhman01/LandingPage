import React from "react";

const Slider = () => {
  const data = [
    {
      images: "",
      title: "",
      descrptions: "",
    },
    {
      images: "",
      title: "",
      descrptions: "",
    },
  ];

  return (
    <div className="w-full h-auto lg:h-96 flex justify-center items-center">
      <div className="w-full sm:w-5/6 h-4/5 items-start flex flex-col">
        <h2 className="font-Poppins font-semibold text-lg">Editor,Picks</h2>
        <div className="w-full h-4/5 flex flex-col lg:flex-row">
          <div className="w-full lg:w-1/2 h-full flex flex-col sm:flex-row justify-between items-center mb-2 lg:mb-0 bg-white">
            <div className="sm:w-2/5 h-full flex  flex-col justify-center cursor-pointer">
              <img
                src={require("../img/slider/slider1.jpg")}
                width={850}
                height={500}
              />
            </div>
            <div className="w-full sm:w-2/3 h-11/12 flex justify-center items-center mt-4">
              <div className="w-11/12 h-3/4 flex flex-col">
                <div className="w-full h-3/4 flex flex-col justify-around">
                  <h2 className="font-serif font-bold text-lg sm:text-sm xl:text-lg text-gray-800">
                    Serological surveys are being conducted to test for
                    coronavirus antibodies. How useful are they?
                  </h2>
                  <p className="font-Nunito font-light text-base sm:text-xs xl:text-base">
                    The authorities are hoping to find that a substantial
                    proportion of the population has already been infected with
                    the virus – and so is immune.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2 h-full flex flex-col sm:flex-row justify-between items-center mb-2 lg:mb-0 bg-white">
            <div className="sm:w-2/5 h-full flex  flex-col justify-center cursor-pointer">
              <img
                src={require("../img/slider/slider2.jpg")}
                width={850}
                height={500}
              />
            </div>
            <div className="w-full sm:w-2/3 h-11/12 flex justify-center items-center mt-4">
              <div className="w-11/12 h-3/4 flex flex-col ml-0 lg:ml-10">
                <div className="w-full h-3/4 flex flex-col justify-around">
                  <h2 className="font-serif font-bold text-lg sm:text-sm xl:text-lg text-gray-800">
                    Making a mark in Asia: East Bengal’s 2003 Asean Cup win – a
                    defining moment for Indian club football
                  </h2>
                  <p className="font-Nunito font-light text-base sm:text-xs xl:text-base">
                    Beating some of the finest teams from South Asia, East
                    Bengal became the first Indian club to win an officially
                    recognised Asian football tournament.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;

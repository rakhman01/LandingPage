import React from "react";

const TrendingCard = () => {
  return (
    <div className="w-full h-screen bg-white flex justify-center">
      <div className="w-full lg:h-3/4 xl:h-5/6 flex flex-col justify-center items-center bg-whitek">
        <div className="w-full h-5/6 flex flex-row justify-center">
          <div className="w-full flex flex-col lg:w-4/5 lg:flex-row h-full items-center lg:justify-between">
            <div className="w-11/12 sm:w-2/3 lg:w-1/2 h-full lg:flex  lg:flex-col">
              <img
                src={require("../img/Mask Group.jpg")}
                width={850}
                height={500}
              />
            </div>
            <div className="w-11/12 md:w-4/5 lg:w-1/2 h-5/6 flex justify-center items-center">
              <div className="w-4/5 lg:w-11/12 md:h-4/5 lg:h-3/4 flex flex-col ml-10">
                <div className="w-full flex xl:justify-between xl:mt-4">
                  <p className="font-Poppins font-semibold text-sm text-red-700">
                    Trending
                  </p>
                  <div className="flex">
                    <a href="#" className="mx-2">
                      <svg
                        width="18"
                        height="16"
                        viewBox="0 0 18 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M9 16C9 16 0 7.64952 0 4.68445C0 1.52744 1.64587 0 5.0625 0C6.75 0 9 2.5811 9 2.5811C9 2.5811 11.25 0 12.9375 0C16.3541 0 18 1.52644 18 4.68445C18 7.64952 9 16 9 16ZM12.9375 1.03264C12.0499 1.03264 9 3.61179 9 3.61179C9 3.61179 5.949 1.03264 5.0625 1.03264C2.07225 1.03264 1.125 2.15932 1.125 4.82149C1.125 7.32371 9 14.4504 9 14.4504C9 14.4504 16.875 7.32371 16.875 4.82149C16.875 2.15932 15.9278 1.03264 12.9375 1.03264Z"
                          fill="#2A2A2A"
                        />
                      </svg>
                    </a>
                    <a href="#" className="mx-2">
                      <svg
                        width="14"
                        height="16"
                        viewBox="0 0 13 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M12 16H1C0.447 16 0 15.553 0 15.001V5C0 4.448 0.447 4 1 4H2.5V5H1.5C1.224 5 1 5.225 1 5.5V14.5C1 14.777 1.224 15.001 1.5 15.001H11.5C11.775 15.001 12 14.777 12 14.5V5.5C12 5.225 11.775 5 11.5 5H10.5V4H12C12.552 4 13 4.448 13 5V15.001C13 15.553 12.552 16 12 16ZM8.66602 3.35693L7 1.69092V11.5C7 11.776 6.775 12 6.5 12C6.224 12 6 11.776 6 11.5V1.69092L4.33301 3.35693C4.14301 3.54793 3.83294 3.54793 3.64294 3.35693C3.45294 3.16793 3.45294 2.85697 3.64294 2.66797L6.11304 0.196899C6.11604 0.192899 6.122 0.191012 6.125 0.187012C6.136 0.174012 6.13204 0.154968 6.14404 0.141968C6.16304 0.123968 6.18996 0.129967 6.20996 0.115967C6.28396 0.0559668 6.36995 0.0149346 6.47095 0.00793457C6.47895 0.00793457 6.48604 0.00292969 6.49304 0.00292969C6.49604 0.00292969 6.49798 0 6.50098 0C6.50398 0 6.50603 0.00192969 6.50903 0.00292969C6.51503 0.00192969 6.51902 0.00598145 6.52502 0.00598145C6.64402 0.0119814 6.75196 0.0589346 6.83496 0.132935C6.84196 0.139935 6.85301 0.136944 6.85901 0.142944C6.86501 0.150944 6.86202 0.161969 6.86902 0.167969C6.87302 0.171969 6.87198 0.179937 6.87598 0.184937L9.35803 2.66797C9.54903 2.85697 9.54903 3.16793 9.35803 3.35693C9.16603 3.54893 8.85702 3.54893 8.66602 3.35693Z"
                          fill="#2A2A2A"
                        />
                      </svg>
                    </a>
                    <a href="#" className="mx-2">
                      <svg
                        width="10"
                        height="16"
                        viewBox="0 0 10 16"
                        fill="white"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M5 12L0 16V1C0 0.447715 0.447715 0 1 0H9C9.55228 0 10 0.447715 10 1V16L5 12ZM9 2C9 1.44772 8.55229 1 8 1H2C1.44772 1 1 1.44772 1 2V14L5 10.5L9 14V2Z"
                          fill="#2A2A2A"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
                <div className="w-full h-3/4 flex flex-col justify-around">
                  <h2 className="font-serif font-semibold md:text-base xl:text-xl 2xl:text-3xl text-gray-800">
                    Cake meme reflects coronavirus absurdity in a world where
                    nothing is what it seems
                  </h2>
                  <p className="font-Poppins font-normal md:text-sm lg:text-base">
                    Earlier this month, a viral video depicting hyper-realistic
                    cakes as everyday items had folks on social media
                    double-guessing every other post, and sometimes even their
                    own realities, effectively launching the next meme : “Is
                    this real or is this cake?”
                  </p>
                  <div className="w-3/5 flex justify-between">
                    <p className="font-Poppins font-normal text-xs">
                      2 hours ago
                    </p>
                    <p className="font-Poppins font-normal text-xs text-gray-700">
                      By Lucy Hiddleston | 4min read
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-11/12 sm:w-4/5 h-16 bg-red-700 flex justify-center">
          <div className="w-full lg:w-3/4 xl:w-3/5 h-full flex justify-evenly items-center">
            <p className="font-Poppins hidden sm:block sm:font-normal text-xs lg:text-sm xl:text-base text-red-800 border-2 lg:p-2 bg-white cursor-pointer hover:bg-slate-400">
              Breaking News
            </p>
            <p className="font-Poppins font-normal sm:font-medium text-xs lg:text-sm xl:text-base text-white">
              Kanye West says he's running for president in 2020.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrendingCard;

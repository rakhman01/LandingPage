import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Slider from "../components/Slider";
import TrendingCard from "../components/TrendingCard";

const Home = () => {
  const data = [
    {
      title:
        "Jon Lewis to make final journey across Edmund Pettus Bridge in procession",
      image: require("../img/images/images1.jpg"),
      descriptions:
        "The body of the late US Rep. John Lewis on Sunday will make the final journey across the famous bridge in Selma, Alabama, where he helped lead a march for voting rights in 1965.",
      time: "2 hours ago",
      createdby: "By Lucy Hiddleston  |  4min read",
    },
    {
      title:
        "John Lewis, civil rights giant, crosses infamous Selma bridge one final time",
      image: require("../img/images/images2.jpg"),
      descriptions:
        "Solemn crowds watch as Lewis, who died earlier this month at the age of 80, is borne by caisson over Edmund Pettus Bridge",
      time: "4 hours ago",
      createdby: "By Caroline Casey  |  4min read",
    },
    {
      title: "Tornado and tide warnings as Storm Hanna lashes Texas",
      image: require("../img/images/images3.jpg"),
      descriptions:
        "The body of the late US Rep. John Lewis on Sunday will make the final journey across the famous bridge in Selma, Alabama, where he helped lead a march for voting rights in 1965.",
      time: "5 hours ago",
      createdby: "By Lucy Hiddleston  |  4min read",
    },
    {
      title:
        "20 Years Ago, Steve Jobs Built the ‘Coolest Computer Ever.’ It Bombed",
      image: require("../img/images/images4.jpg"),
      descriptions:
        "This month marks the 20th anniversary of the Power Mac G4 Cube, which debuted July 19, 2000. It also marks the 19th anniversary of Apple’s announcement that it was putting the Cube on ice.",
      time: "12 hours ago",
      createdby: "By Lucy Hiddleston  |  4min read",
    },
  ];

  console.log(data, "lalal");

  return (
    <div>
      <Navbar />
      <TrendingCard />
      <div className="w-full h-auto flex justify-center">
        <div className="w-11/12 sm:w-5/6 h-auto flex flex-col items-center sm:flex-row justify-evenly">
          <div className="w-11/12 sm:w-3/5 h-full bg-white">
            <div className="w-full h-10 flex justify-between items-center bg-gray-200">
              <div className="w-11/12 sm:w-3/5 md:w-1/2 lg:w-1/3 2xl:w-1/4 flex justify-evenly sm:justify-between ml-2">
                <h2 className="text-sm cursor-pointer hover:text-base hover:text-red-600">
                  Latest Stories
                </h2>
                <h2 className="text-sm cursor-pointer hover:text-base hover:text-red-600">
                  Think
                </h2>
                <h2 className="text-sm cursor-pointer hover:text-base hover:text-red-600">
                  health
                </h2>
              </div>
              <div className="flex">
                <a href="#" className="mx-2">
                  <svg
                    width="28"
                    height="24"
                    viewBox="0 0 28 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M11.9992 24H1.71417C0.766232 24 0 23.2321 0 22.2858V18.8558C0 17.9096 0.766232 17.1417 1.71417 17.1417H11.9992C12.9454 17.1417 13.7133 17.9096 13.7133 18.8558V22.2858C13.7133 23.2321 12.9454 24 11.9992 24ZM11.9992 19.7129C11.9992 19.2415 11.6135 18.8558 11.1421 18.8558H2.57125C2.09814 18.8558 1.71417 19.2415 1.71417 19.7129V21.4271C1.71417 21.9019 2.09814 22.2858 2.57125 22.2858H11.1421C11.6135 22.2858 11.9992 21.9019 11.9992 21.4271V19.7129ZM11.9992 15.4275H1.71417C0.766232 15.4275 0 14.6613 0 13.7133V10.285C0 9.33878 0.766232 8.57083 1.71417 8.57083H11.9992C12.9454 8.57083 13.7133 9.33878 13.7133 10.285V13.7133C13.7133 14.6613 12.9454 15.4275 11.9992 15.4275ZM11.9992 11.1421C11.9992 10.6707 11.6135 10.285 11.1421 10.285H2.57125C2.09814 10.285 1.71417 10.6707 1.71417 11.1421V12.8562C1.71417 13.3311 2.09814 13.7133 2.57125 13.7133H11.1421C11.6135 13.7133 11.9992 13.3311 11.9992 12.8562V11.1421ZM11.9992 6.85834H1.71417C0.766232 6.85834 0 6.09211 0 5.14417V1.71417C0 0.769661 0.766232 0 1.71417 0H11.9992C12.9454 0 13.7133 0.769661 13.7133 1.71417V5.14417C13.7133 6.09211 12.9454 6.85834 11.9992 6.85834ZM11.9992 2.57125C11.9992 2.09985 11.6135 1.71417 11.1421 1.71417H2.57125C2.09814 1.71417 1.71417 2.09985 1.71417 2.57125V4.28709C1.71417 4.7602 2.09814 5.14417 2.57125 5.14417H11.1421C11.6135 5.14417 11.9992 4.7602 11.9992 4.28709V2.57125Z"
                      fill="black"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M25.7124 23.9983H18.8558C17.9078 23.9983 17.1416 23.2321 17.1416 22.2858V1.71584C17.1416 0.767906 17.9078 0 18.8558 0H25.7124C26.6587 0 27.4266 0.767906 27.4266 1.71584V22.2858C27.4266 23.2321 26.6587 23.9983 25.7124 23.9983ZM25.7124 2.57125C25.7124 2.09985 25.3267 1.71584 24.8553 1.71584H19.7129C19.2397 1.71584 18.8558 2.09985 18.8558 2.57125V21.4271C18.8558 21.9002 19.2397 22.2858 19.7129 22.2858H24.8553C25.3267 22.2858 25.7124 21.9002 25.7124 21.4271V2.57125Z"
                      fill="black"
                    />
                  </svg>
                </a>
              </div>
            </div>
            <div className="w-full h-auto flex justify-center sm:justify-between flex-wrap mt-2 ">
              {data.map((value) => (
                <div className="border w-96 hover:bg-slate-100 flex flex-col justify-between mt-4 drop-shadow-xl">
                  <div className="w-full h-96 ">
                    <img src={value.image} className="cursor-pointer" />
                    <div>
                      <div className="w-full h-3/4 flex flex-col justify-around ml-3 mt-3">
                        <h2 className="font-serif font-semibold text-lg text-gray-800 mr-2">
                          {value.title}
                        </h2>
                        <p className="font-Nunito font-normal text-sm mr-3 my-2">
                          {value.descriptions}
                        </p>
                        <div className="w-11/12 flex justify-between">
                          <p className="font-Nunito font-normal text-xs">
                            {value.time}
                          </p>
                          <p className="font-Nunito font-normal text-xs">
                            {value.createdby}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-full h-10 flex justify-center items-center">
                    <div className="w-3.4 h-full ">
                      <div className="flex justify-center items-center ">
                        <a href="https://github.com/rakhman01" className="mx-2">
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
                        <p>28</p>
                        <a
                          href="https://ultramsg.com/m/3pQCbxr"
                          className="mx-2"
                        >
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
                        <p>72</p>
                        <a href="https://twitter.com/wakhidhr" className="mx-2">
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
                  </div>
                </div>
              ))}
            </div>
            <div className="w-full h-20 flex justify-center items-center">
              <button className="p-2 rounded bg-gray-200 text-red-600">
                View More
              </button>
            </div>
          </div>
          <div className="w-full sm:w-1/4 h-full flex justify-center">
            <div className="w-11/12 sm:w-full sm:h-1/4 md:h-1/4 2xl:h-3/5  flex flex-col justify-between items-center mt-10">
              <div className="">
                <h2 className="font-Poppins font-bold text-lg text-red-700 my-2">
                  Live
                </h2>
                <img src={require("../img/face.jpg")} alt="images" />
                <p className="font-serif font-semibold text-base sm:text-xs md:font-bold md:text-sm xl:text-lg mt-4">
                  Beloved Arizona coach loses battle with coronavirus
                </p>
              </div>
              <div className="sm:mt-3 md:mt-4 w-11/12 lg:w-64 lg:mt-8 xl:w-72 2xl:w-80 h-60">
                <p className="font-Poppins font-semibold text-lg sm:text-sm md:text-lg mt-4 sm:mt-0">
                  location News
                </p>
                <div className="w-full sm:w-11/12 h-40 bg-white mt-2 shadow-lg">
                  <form className="h-full flex flex-col items-start justify-evenly ml-3">
                    <label
                      for="imputLocation"
                      className="text-lg sm:text-sm md:text-lg"
                    >
                      Get Location specific News
                    </label>
                    <input
                      type={"text"}
                      name="imputLocation"
                      placeholder="Enter Your Location"
                      className="w-5/6 h-9 font-Nunito font-normal text-sm"
                    />
                    <button
                      className="text-white items-center bg-red-700  cursor-pointer p-1"
                      value={"submit"}
                    >
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Slider />
      <Footer />
    </div>
  );
};

export default Home;

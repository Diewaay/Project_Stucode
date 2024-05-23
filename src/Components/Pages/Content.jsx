/* eslint-disable no-unused-vars */
import React from "react";
import { useParams } from "react-router-dom";
import Footer from "../Footer";
import Course_Desain from "../../../public/Course_Desain.png";

const Content = () => {
  const { title } = useParams();

  return (
    <div>
      <div className="min-h-screen top-0 left-0 mt-10 container mx-auto p-4 flex flex-col md:flex-row">
        {/* Left section */}
        <div className="md:w-2/3 p-4">
          <h1 className="text-3xl font-bold mb-4">Kursus {title}</h1>
          <h2 className="text-xl mb-2">Kurikulum</h2>
          <div className="space-y-2">
            {Array.from({ length: 7 }, (_, i) => (
              <div
                key={i}
                className="flex justify-between items-center p-4 bg-white rounded-lg shadow-md"
              >
                <span>Chapter {i + 1} :</span>
                <span>&#9662;</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right section */}
        <div className="md:w-1/3 p-4 flex justify-center items-center">
          <img
            src={Course_Desain}
            alt={title}
            className="rounded-lg shadow-md"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Content;

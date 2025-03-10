import React from "react";

export default function HeaderCstm(){
  return (
    <div className="flex flex-col items-center justify-center gap-[15px] relative">

      <p className="relative font-geist font-semibold text-transparent text-h2 md:text-[100px] text-center tracking-[0] leading-[45px] md:leading-[100px] ">
        <span className="text-midnight-blue">
          Vi åpner snart dørene til
          <br />
        </span>

        <span className="text-[#4551fb]">GründerCampus</span>
      </p>

      <div className="flex items-center justify-center gap-2.5 relative">
        <p className="relative font-geist font-medium text-midnight-blue text-lg md:text-3xl text-center tracking-[0] leading-[normal] w-4/6">
          Et lavterskel møtested for studenter i Bergen med en idé – et sted å
          møtes, teste og utvikle
        </p>
      </div>
    </div>
  );
};

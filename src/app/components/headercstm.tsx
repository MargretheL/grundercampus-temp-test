import React from "react";

export default function HeaderCstm(){
  return (
    <div className="flex flex-col items-center justify-center relative">

      <p className="relative font-geist font-semibold text-transparent text-h2 lg:text-6xl  text-center tracking-[0] leading-[45px] lg:leading-[60px] xl:leading-[80px]">
        <span className="text-midnight-blue z-10">
          Vi åpner snart dørene til
          <br />
        </span>

        <span className="text-[#4551fb]">GründerCampus</span>
      </p>

      <div className="flex items-center justify-center gap-2.5 relative">
        <p className="relative font-geist text-midnight-blue text-sm lg:text-xl text-center tracking-[0]  w-4/6">
          Et lavterskel møtested for studenter i Bergen med en idé – et sted å
          møtes, teste og utvikle
        </p>
      </div>
    </div>
  );
};

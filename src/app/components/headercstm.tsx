import React from "react";

export default function HeaderCstm(){
  return (
    <div className="flex flex-col items-center justify-center gap-[15px] relative">

      <p className="relative w-[356px] font-geist font-semibold text-transparent text-[40px] text-center tracking-[0] leading-[45px]">
        <span className="text-midnight-blue">
          Vi åpner snart dørene til
          <br />
        </span>

        <span className="text-[#4551fb]">GründerCampus</span>
      </p>

      <div className="flex w-[356px] h-[99px] items-center justify-center gap-2.5 relative">
        <p className="relative w-[320] font-geist font-medium text-midnight-blue text-lg text-center tracking-[0] leading-[normal]">
          Et lavterskel møtested for studenter i Bergen med en idé – et sted å
          møtes, teste og utvikle
        </p>
      </div>
    </div>
  );
};

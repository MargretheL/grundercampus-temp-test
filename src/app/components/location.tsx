
type LocationProps = {
    text: string;
};


export default function Location({ text }: LocationProps) {
    return (
        <div className="flex w-[152px] h-[34px] items-center justify-center gap-[5px] p-[5px] relative rounded-[20px] border-2 border-solid border-[#ff8c42]">
        <img
          className="relative w-[26px] h-6"
          alt="Location logo"
          src="/images/location.svg"  
        />
  
        <div className="relative w-fit font-red-hat font-medium text-midnight-blue text-xs tracking-[0] leading-[normal]">
          <p>{text}</p>
        </div>
      </div>
    );
}
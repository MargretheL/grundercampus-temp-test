
type LocationProps = {
    text: string;
};


export default function Location({ text }: LocationProps) {
    return (
      <a href="https://www.google.com/maps/place/Solheimsgaten+7C,+5058+Bergen" target="_blank" rel="noreferrer">
        <div className="flex items-center justify-center gap-[5px]  py-1.5 relative rounded-[30px] border-2 md:border-[3px] border-solid border-pumpkin">
        <img
          className="relative w-[7%]"
          alt="Location logo"
          src="/images/location.svg"  
        />
  
        <div className="relative w-fit font-red-hat font-medium text-midnight-blue text-xs tracking-[0] leading-[normal]">
          <p>{text}</p>
        </div>
      </div>
      </a>
    );
}
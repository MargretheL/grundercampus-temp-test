
type BtnRoundProps = {
    text: string;
};


export default function BtnRound({ text }: BtnRoundProps) {
    return (
        <div className="flex items-center justify-center gap-2.5 p-2.5 relative bg-pumpkin rounded-[20px] md:rounded-[40px] px-5 md:px-[30]">
            <div className="relative w-fit font-red-hat text-midnight-blue text-md lg:text-lg xl:text-xl tracking-[0] leading-[normal]">
                <p>{text}</p>
            </div>
        </div>
    );
}

type BtnRoundProps = {
    text: string;
};


export default function BtnRound({ text }: BtnRoundProps) {
    return (
        <div className="flex items-center justify-center gap-2.5 p-2.5 relative bg-pumpkin rounded-[20px]">
            <div className="relative w-fit font-red-hat text-midnight-blue text-body tracking-[0] leading-[normal]">
                <p>{text}</p>
            </div>
        </div>
    );
}
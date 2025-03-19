
export default function FooterCstm() {
    return (
        <div className="flex flex-col items-center relative">
            <p className="font-geist font-bold text-midnight-blue">FØLG OSS</p>
            <div className="flex items-center justify-center relative h-10">
                <a href="https://www.instagram.com/grundercampus/">
                    <img src="/images/instagram.svg" className="scale-60" alt="instagram" />
                </a>
                <a href="https://www.linkedin.com/company/gr%C3%BCndercampus/">
                    <img src="/images/linkedin.svg" className="scale-60" alt="linkedin" />
                </a>
            </div>
            <a href="mailto:kontakt@grundercampus.no">
                <div className="flex flex-row justify-between gap-1.5">
                    <img src="/images/mail.svg" alt="logo" />
                    <p className="font-geist text-midnight-blue">kontakt@grundercampus.no</p>
                </div>
            </a>
        </div>
    );
}
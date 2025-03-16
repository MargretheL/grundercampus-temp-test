
export default function FooterCstm() {
    return (
        <div className="flex flex-col items-center relative">
            <p className="font-geist font-bold text-midnight-blue">FØLG OSS</p>
            <div className="flex items-center justify-center relative h-10">
                <a href="https://www.google.com">
                    <img src="/images/instagram.svg" className="scale-60" alt="instagram" />
                </a>
                <a href="https://www.google.com">
                    <img src="/images/facebook.svg" className="scale-60" alt="facebook" />
                </a>
                <a href="https://www.google.com">
                    <img src="/images/linkedin.svg" className="scale-60" alt="linkedin" />
                </a>
            </div>
            <a href="https://www.google.com">
                <div className="flex flex-row justify-between gap-1.5">
                    <img src="/images/mail.svg" alt="logo" />
                    <p className="font-geist text-midnight-blue">kontakt@grundercampus.no</p>
                </div>
            </a>
        </div>
    );
}
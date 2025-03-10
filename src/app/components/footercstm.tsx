
export default function FooterCstm() {
    return (
        <div className="flex flex-col items-center justify-center gap-2.5 relative">
            <p className="font-geist font-bold text-midnight-blue">Følg oss</p>
            <div className="flex items-center justify-center gap-2.5 relative">
                <a href="https://www.google.com">
                    <img src="/images/instagram.svg" alt="instagram" />
                </a>
                <a href="https://www.google.com">
                    <img src="/images/facebook.svg" alt="facebook" />
                </a>
                <a href="https://www.google.com">
                    <img src="/images/linkedin.png" alt="linkedin" />
                </a>
            </div>
            <a href="https://www.google.com">
                <div className="flex flex-row justify-between">
                    <img src="/images/mail.png" alt="logo" />
                    <p className="font-geist font-bold text-midnight-blue">grundercampus.no</p>
                </div>
            </a>
        </div>
    );
}
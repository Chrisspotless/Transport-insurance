function Footer() {
    return (
        <footer className="bg-[#2a2a2a] w-full py-10 px-4 sm:py-12 sm:px-6 md:py-16 box-border">
            <div className="max-w-2xl mx-auto text-center flex flex-col items-center gap-8">

                <p className="text-[#c8c8c8] text-sm leading-7 max-w-lg m-0">
                    Your trusted partner for transport insurance solutions. Drive with confidence, covered every mile.
                </p>

                <div className="w-full h-px bg-white/10" />

                <p className="text-[#999] text-sm m-0">
                    <a
                        href="#"
                        id="footer-templates-link"
                        className="text-[#c9a227] underline underline-offset-2 transition-colors duration-200 hover:text-[#f0c040]"
                    >
                        Website Templates
                    </a>
                    {" "}created with{" "}
                    <a
                        href="#"
                        id="footer-builder-link"
                        className="text-[#c9a227] underline underline-offset-2 transition-colors duration-200 hover:text-[#f0c040]"
                    >
                        Website Builder Software
                    </a>.
                </p>

            </div>
        </footer>
    );
}

export default Footer;

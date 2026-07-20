import carImg from "./assets/car.png";

function Car() {
    return (
        <section className="bg-[#0a0a0a] w-full overflow-hidden self-stretch">
            <div className="flex flex-col md:flex-row items-center justify-center max-w-7xl mx-auto min-h-[260px] md:min-h-[340px]">

                <div className="w-full md:flex-[0_0_58%] overflow-hidden">
                    <img
                        src={carImg}
                        alt="Sleek black luxury sports car"
                        className="w-full h-full object-cover block brightness-95 contrast-105 transition-transform duration-700 hover:scale-[1.025]"
                    />
                </div>

                <div className="w-full md:flex-[0_0_42%] px-6 sm:px-10 md:px-12 py-8 md:py-10 flex items-center justify-start md:justify-start justify-center text-center md:text-left">
                    <p className="text-white text-xl sm:text-2xl md:text-[1.6rem] font-bold leading-[1.65] tracking-[0.01em] m-0">
                        Safe. Relaxing.<br />
                        Good to ride in.<br />
                        Subtly decorated.
                    </p>
                </div>

            </div>
        </section>
    );
}

export default Car;

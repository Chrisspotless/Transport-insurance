import bg from "./assets/bg.png";

function Best() {
  return (
    <section className="bg-black w-full text-white">
        <div className="px-4 sm:px-8 pt-8 pb-2">
            <h1 className="font-bold text-4xl sm:text-5xl md:text-7xl leading-tight">
                The Best Insurance <br /> Companies for 2021
            </h1>
        </div>
        <div className="text-right font-bold text-xl sm:text-2xl md:text-3xl px-4 sm:px-8 pb-4">
            <p>you're in <span className="text-orange-500">good hands</span></p>
        </div>

        <div className="mt-6 flex flex-col md:flex-row gap-8 px-4 sm:px-8 pb-10 justify-evenly items-start">
            <div className="w-full md:max-w-[600px] lg:max-w-[700px] text-sm sm:text-base leading-relaxed">
                The Best Car Insurance Companies for 2021.
                We looked at claims processes, transparency, complaints and more
                to find and rank the best car insurance companies.
                Many or all of the products featured here are from our partners
                who compensate us. This may influence which products we write about
                and where and how the product appears on a page. However, this does
                not influence our evaluations. Our opinions are our own.

                <span className="text-orange-500 block mt-4">
                    The best car insurance companies give their customers more than just
                    coverage they want at a reasonable price — merely good companies can do
                    that. On top of that, the best auto insurance companies provide a customer-
                    first experience from quote to claim, including a headache-free way to manage
                    policies and make payments.
                </span>
            </div>

            <div className="w-full md:w-auto flex justify-center md:justify-end">
                <img
                    src={bg}
                    alt="Insurance"
                    className="h-64 w-64 sm:h-80 sm:w-80 rounded-full object-cover shadow-2xl"
                />
            </div>
        </div>
    </section>
  );
}

export default Best;
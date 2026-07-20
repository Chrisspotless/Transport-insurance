import {
    ArrowRight,
    Download,
    Mail,
} from "lucide-react";
import bg from "./assets/bg.png";
import { ChevronRight } from "lucide-react";
import View from "./View";
import Best from "./Best";
import Car from "./Car";
import FAQ from "./FAQ";
import PreContact from "./PreContact";

function Home() {
    return (
        <section
            className="bg-contain bg-center flex flex-col items-center justify-center"
            style={{
                backgroundImage: `url(${bg})`,
            }}
        >
            <div className="text-center text-white mt-24 sm:mt-32 md:mt-40 lg:mt-50 px-4 sm:px-8 max-w-4xl mx-auto">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
                    Finding the best car insurance <br className="hidden sm:block" /> company for you
                </h1>
                <p className="mt-4 text-sm sm:text-base leading-relaxed">
                    Pricing and discounts made up a portion of each insurer's score,
                    but we know that cost is the top factor for many auto insurance
                    shoppers. Since pricing is based on personal factors including your
                    age, location, vehicle and credit history and gender (in most cases),
                    it's important to shop around for car insurance quotes.
                </p>
                <p className="font-bold mt-4 text-sm sm:text-base leading-relaxed">
                    If price is the most important factor in your search, comparing car insurance quotes
                    can help you find the cheapest rate. But your shopping experience will also shed light
                    on a company's customer service standards.
                </p>
            </div>

            <div className="place-items-center flex text-orange-500 p-4 mx-auto">
                <ChevronRight size={40} color="orange" strokeWidth={2} />
                <ChevronRight size={40} color="orange" strokeWidth={2} />
                <ChevronRight size={40} color="orange" strokeWidth={2} />
            </div>

            <View />
            <Best />
            <FAQ />
            <Car />
            <PreContact />
        </section>
    );
};
export default Home;

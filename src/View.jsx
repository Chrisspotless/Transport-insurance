import React from 'react';
import { Link } from "react-router";
import bg from "./assets/bg.png";
import { Users, Smartphone, Lightbulb } from "lucide-react";


function View() {
  return (    
    <section className="mt-16 sm:mt-24 md:mt-32 lg:mt-70 w-full">
        <div className="mx-auto px-4 sm:px-6 py-12 bg-black text-white">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-center leading-tight">
                Insurance and investing for your many sides
            </h2>
            <p className="text-center text-sm sm:text-base">
                We've been protecting people, businesses and futures for more than 90 years.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 place-items-center gap-8 mt-10">
                <div className="items-center w-full max-w-xs">
                    <div className="place-items-center bg-orange-500 rounded-full w-15 h-15 p-4 mx-auto">
                        <Users size={40} color="white" strokeWidth={2} />
                    </div>
                    <h2 className="text-xl font-bold text-center mt-3">For you and your family</h2>
                    <p className="mt-2 text-center text-sm">We protect vehicles, property, pets and events.</p>
                    <div className="flex justify-center">
                        <button className="bg-orange-500 rounded-xl text-white px-6 py-3 hover:bg-gray-600 flex items-center mt-4 gap-2 text-sm">
                            Read More
                        </button>
                    </div>
                </div>

                <div className="w-full max-w-xs">
                    <div className="place-items-center bg-orange-500 rounded-full w-15 h-15 p-4 mx-auto">
                        <Smartphone size={40} color="white" strokeWidth={2} />
                    </div>
                    <h2 className="text-xl font-bold text-center mt-3">For your business</h2>
                    <p className="mt-2 text-center text-sm">We protect businesses and employees, as well as company property and vehicles.</p>
                    <div className="flex justify-center">
                        <button className="bg-orange-500 rounded-xl text-white px-6 py-3 hover:bg-gray-600 flex items-center mt-4 gap-2 text-sm">
                            Read More
                        </button>
                    </div>
                </div>

                <div className="w-full max-w-xs">
                    <div className="place-items-center bg-orange-500 rounded-full w-15 h-15 p-4 mx-auto">
                        <Lightbulb size={40} color="white" strokeWidth={2} />
                    </div>
                    <h2 className="text-xl font-bold text-center mt-3">For your future</h2>
                    <p className="mt-2 text-center text-sm">We protect investments, retirements and financial dreams.</p>
                    <div className="flex justify-center">
                        <button className="bg-orange-500 rounded-xl text-white px-6 py-3 hover:bg-gray-600 flex items-center mt-4 gap-2 text-sm">
                            Read More
                        </button>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 mx-auto">
                <div className="p-4 sm:p-8 text-sm sm:text-base leading-relaxed">
                    <h2 className="text-xl font-bold mb-3">
                        Finding the best car insurance company for you
                    </h2>
                    Pricing and discounts made up a portion of each insurer's score, but we know that cost is the top factor
                    for many auto insurance shoppers. Since pricing is based on personal factors including your age, location,
                    vehicle and credit history and gender (in most cases), it's important to shop around for car insurance quotes.

                    <p className="mt-3">
                        If price is the most important factor in your search, comparing car insurance quotes can help you find the cheapest rate.
                        But your shopping experience will also shed light on a company's customer service standards.
                    </p>
                </div>
                <div>
                    <div className="text-sm sm:text-base bg-orange-500 p-6 sm:p-8 leading-relaxed">
                        To find the top car insurance companies:
                        <ul className="mt-3 space-y-2 list-none">
                            <li>1. Visit your state insurance commissioner's website to find complaints and other information about companies in your area.</li>
                            <li>2. Ask your agent or a customer service representative any questions you have to make sure you're getting all the coverage you need — and nothing you don't want.</li>
                            <li>3. Consider smaller insurance companies, too. Small companies offer rates well below large competitors in many locations.</li>
                            <li>4. If you've had tickets, DUIs or other violations, be sure to shop three and five years after the incident, when surcharges can drop significantly.</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-6 justify-evenly items-center">
                <img src={bg} alt="Insurance" className="h-48 sm:h-60 md:h-70 w-full sm:w-72 md:w-90 rounded-xl object-cover shadow-2xl" />
                <img src={bg} alt="Insurance" className="h-48 sm:h-60 md:h-70 w-full sm:w-72 md:w-90 rounded-xl object-cover shadow-2xl hidden sm:block" />
                <img src={bg} alt="Insurance" className="h-48 sm:h-60 md:h-70 w-full sm:w-72 md:w-90 rounded-xl object-cover shadow-2xl hidden md:block" />
            </div>
        </div>
    </section>
  );
};
export default View;
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
    {
        question: "What's included in the quoted daily rate?",
        answer:
            "Answer. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id suscipit ex. Suspendisse rhoncus laoreet purus quis elementum. Phasellus sed efficitur dolor, et ultricies sapien. Quisque fringilla sit amet dolor commodo efficitur. Aliquam et sem odio. In ullamcorper nisi nunc, et molestie ipsum iaculis sit amet.",
    },
    {
        question: "What is the rental's mileage plan?",
        answer:
            "Our mileage plan offers unlimited miles on most vehicle rentals. Certain specialty vehicles or long-term rentals may have mileage caps — these will be clearly stated in your rental agreement before you confirm your booking.",
    },
    {
        question: "What are your extra insurance options?",
        answer:
            "We offer several supplemental insurance options including Collision Damage Waiver (CDW), Liability Protection, Personal Accident Insurance, and Personal Effects Coverage. You can add these at checkout or speak to a representative for guidance on what's best for your trip.",
    },
];

function FAQ() {
    const [openIndex, setOpenIndex] = useState(0);

    const toggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="bg-black w-full py-12 px-4 sm:py-16 sm:px-6 md:py-20 self-stretch box-border">
            <div className="max-w-4xl mx-auto">

                <h2 className="text-center text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">
                    Faq
                </h2>
                <p className="text-center text-gray-400 text-sm mb-12 leading-relaxed">
                    Have questions? We've got answers. Browse through our most frequently asked
                    questions below.
                </p>

                <div className="flex flex-col">
                    {faqs.map((faq, index) => {
                        const isOpen = openIndex === index;
                        return (
                            <div key={index} className="w-full">
                                <button
                                    id={`faq-btn-${index}`}
                                    aria-expanded={isOpen}
                                    onClick={() => toggle(index)}
                                    className={`flex items-center justify-between w-full px-6 py-5 font-bold text-base text-white cursor-pointer border-none transition-colors duration-250 ${
                                        isOpen
                                            ? "bg-orange-500 rounded-t"
                                            : "bg-transparent rounded hover:bg-orange-500/10"
                                    }`}
                                >
                                    <span>{faq.question}</span>
                                    <ChevronDown
                                        size={22}
                                        className={`flex-shrink-0 text-white transition-transform duration-300 ${
                                            isOpen ? "rotate-180" : ""
                                        }`}
                                    />
                                </button>


                                <div className={`faq-answer-wrapper ${isOpen ? "faq-answer-wrapper--open" : ""}`}>
                                    <p className="px-6 py-7 text-gray-300 text-sm leading-7 m-0">
                                        {faq.answer}
                                    </p>
                                </div>

                                {!isOpen && <div className="h-px bg-white/15 mx-1" />}
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

export default FAQ;

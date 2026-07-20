import { useState } from "react";
import { Globe, Share2, MessageCircle } from "lucide-react";

function PreContact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
    };

    return (
        <section className="bg-black w-full self-stretch py-16 px-16">
            <div className="max-w-[1100px] mx-auto flex flex-col md:flex-row gap-16 items-start">
                <div className="md:w-[42%] w-full">
                    <p className="text-white text-sm font-semibold mb-3 tracking-wide">
                        Ready to talk?
                    </p>
                    <h2 className="text-white text-4xl font-extrabold mb-6 leading-tight">
                        Contact Us
                    </h2>

                    <p className="text-orange-400 text-sm leading-7 mb-5">
                        Massa tempor nec feugiat nisl pretium fusce id velit. Accumsan tortor
                        posuere ac ut. Aenean pharetra magna ac placerat vestibulum lectus.
                        Praesent semper feugiat nibh sed pulvinar. Lorem sed risus ultricies{" "}
                        <span className="font-semibold">tristique.</span>
                    </p>

                    <p className="text-white text-sm leading-7">
                        Dictumst vestibulum rhoncus est pellentesque elit ullamcorper. Amet
                        dictum sit amet justo donec enim diam vulputate. Ut morbi tincidunt
                        augue interdum velit euismod in pellentesque. Volutpat lacus laoreet
                        non <span className="underline">curabitur.</span>
                    </p>
                </div>
                <div className="flex-1 w-full">
                    <form onSubmit={handleSubmit} className="flex flex-col" noValidate>
                        <div className="border-b border-gray-600 mb-2">
                            <input
                                id="contact-name"
                                type="text"
                                name="name"
                                placeholder="Enter your Name"
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full bg-transparent border-none outline-none text-gray-300 text-sm py-3 px-0 placeholder:text-gray-500 font-sans"
                                required
                            />
                        </div>

                        <div className="border-b border-gray-600 mb-2">
                            <input
                                id="contact-email"
                                type="email"
                                name="email"
                                placeholder="Enter a valid email address"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full bg-transparent border-none outline-none text-gray-300 text-sm py-3 px-0 placeholder:text-gray-500 font-sans"
                                required
                            />
                        </div>

                        <div className="border-b border-gray-600 mb-8">
                            <textarea
                                id="contact-message"
                                name="message"
                                placeholder="Enter your message"
                                value={formData.message}
                                onChange={handleChange}
                                className="w-full bg-transparent border-none outline-none text-gray-300 text-sm py-3 px-0 placeholder:text-gray-500 font-sans resize-none min-h-[90px]"
                                rows={4}
                                required
                            />
                        </div>

                        <div className="mb-8">
                            <button
                                id="contact-submit"
                                type="submit"
                                className="bg-transparent border-2 border-orange-500 text-orange-500 text-xs font-bold tracking-widest uppercase px-8 py-3 rounded-full cursor-pointer transition-all duration-200 hover:bg-orange-500 hover:text-white"
                            >
                                SUBMIT
                            </button>
                        </div>


                        <div className="flex gap-5 items-center">
                            <a
                                href="#"
                                id="social-facebook"
                                aria-label="Facebook"
                                className="text-orange-500 hover:text-orange-300 transition-colors duration-200"
                            >
                                <Globe size={20} />
                            </a>
                            <a
                                href="#"
                                id="social-twitter"
                                aria-label="Twitter"
                                className="text-orange-500 hover:text-orange-300 transition-colors duration-200"
                            >
                                <MessageCircle size={20} />
                            </a>
                            <a
                                href="#"
                                id="social-instagram"
                                aria-label="Instagram"
                                className="text-orange-500 hover:text-orange-300 transition-colors duration-200"
                            >
                                <Share2 size={20} />
                            </a>
                        </div>

                    </form>
                </div>

            </div>
        </section>
    );
}

export default PreContact;

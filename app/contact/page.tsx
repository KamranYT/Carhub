"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";

interface InfoItem {
  icon: JSX.Element;
  title: string;
  description: string;
}

const info: InfoItem[] = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "(+92) 331 300 7384",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "mk7275374@gmail.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Address",
    description: "Malir, Karachi",
  },
];

const Contact = (): JSX.Element => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0.2, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6 bg-white" // Setting the section background to white
    >
      <div className="container mx-auto mt-20">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/* Form */}
          <div className="xl:w-[54%] order-2 xl:order-none">
            <form className="flex flex-col gap-6 p-10 bg-gray-100 rounded-xl shadow-lg">
              <h3 className="text-4xl text-primary-blue">{`Let's work together`}</h3>
              <p className="text-gray-700">
                Ready to bring your ideas to life? Let’s collaborate to create
                something exceptional. Whether you need a sleek design, a custom
                website, or an innovative solution, I’m here to turn your vision
                into reality. Let’s work together and make it happen!
              </p>
              {/* Input Fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  type="text"
                  placeholder="Firstname"
                  className="bg-white border border-gray-300 text-gray-800"
                />
                <Input
                  type="text"
                  placeholder="Lastname"
                  className="bg-white border border-gray-300 text-gray-800"
                />
                <Input
                  type="email"
                  placeholder="Email"
                  className="bg-white border border-gray-300 text-gray-800"
                />
                <Input
                  type="tel"
                  placeholder="Phone number"
                  className="bg-white border border-gray-300 text-gray-800"
                />
              </div>
              
              {/* Textarea */}
              <Textarea
                className="h-[200px] bg-white border border-gray-300 text-gray-800"
                placeholder="Type your message here."
              />
              {/* Button */}
              <Button
                size="md"
                className="bg-primary-blue text-white hover:bg-primary-blue-dark"
              >
                Send message
              </Button>
            </form>
          </div>

          {/* Info Section */}
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => {
                return (
                  <li key={index} className="flex items-center gap-6">
                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-gray-200 text-primary-blue rounded-md flex items-center justify-center">
                      <div className="text-[28px]">{item.icon}</div>
                    </div>
                    <div className="flex-1">
                      <p className="text-gray-500">{item.title}</p>
                      <h3 className="text-xl text-gray-800">{item.description}</h3>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;

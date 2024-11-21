"use client";

import { CustomButton } from "@/components";
import Link from "next/link";
// import Navbar from "@/components/Navbar";
import React from "react";

const TermsAndConditions: React.FC = () => {
  return (
    <main className="overflow-hidden">
      {/* <Navbar /> */}

      <div className="terms-container px-8 py-12 max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mt-10 mb-12 text-center text-primary-blue">
          Terms & Conditions
        </h1>

        {/* Introduction Section */}
        <section className="mb-10 p-8 rounded-lg bg-blue-100 shadow-lg">
          <h2 className="text-3xl font-semibold mb-4 text-primary-blue">Introduction</h2>
          <p className="text-gray-800 leading-7">
            Welcome to Car Hub! These terms and conditions outline the rules and regulations for the
            use of our website and services. By accessing this website, you accept these terms and
            conditions. Please read them carefully before using our service.
          </p>
        </section>

        {/* Booking Terms Section */}
        <section className="mb-10 p-8 rounded-lg bg-green-100 shadow-lg">
          <h2 className="text-3xl font-semibold mb-4 text-green-800">Booking Terms</h2>
          <p className="text-gray-800 leading-7">
            To make a booking with Car Hub, you must be at least 21 years old and possess a valid
            driver’s license. When booking a vehicle, you agree to the terms provided at the time of
            booking and acknowledge that all information provided is accurate.
          </p>
        </section>

        {/* Cancellation Policy Section */}
        <section className="mb-10 p-8 rounded-lg bg-yellow-100 shadow-lg">
          <h2 className="text-3xl font-semibold mb-4 text-yellow-800">Cancellation Policy</h2>
          <p className="text-gray-800 leading-7">
            You may cancel your booking without any penalty if done 24 hours before the scheduled
            pick-up time. Cancellations made within 24 hours may incur a cancellation fee. Please
            refer to our <a href="/cancellation" className="text-primary-blue hover:underline">Cancellation Policy</a> for more details.
          </p>
        </section>

        {/* Use of Service Section */}
        <section className="mb-10 p-8 rounded-lg bg-purple-100 shadow-lg">
          <h2 className="text-3xl font-semibold mb-4 text-purple-800">Use of Service</h2>
          <p className="text-gray-800 leading-7">
            Our vehicles are to be used solely for lawful purposes. You agree not to use the car for
            any illegal activities, and you must adhere to all traffic rules and regulations while
            operating the vehicle. Any damage caused to the vehicle due to negligence may result in
            additional charges.
          </p>
        </section>

        {/* Privacy Section */}
        <section className="mb-10 p-8 rounded-lg bg-teal-100 shadow-lg">
          <h2 className="text-3xl font-semibold mb-4 text-teal-800">Privacy</h2>
          <p className="text-gray-800 leading-7">
            At Car Hub, we respect your privacy and are committed to protecting your personal
            information. Our Privacy Policy outlines how we collect, use, and safeguard your data.
            Please review our <a href="/privacy-policy" className="text-primary-blue hover:underline">Privacy Policy</a> for further information.
          </p>
        </section>

        {/* Payment Section */}
        <section className="mb-10 p-8 rounded-lg bg-red-100 shadow-lg">
          <h2 className="text-3xl font-semibold mb-4 text-red-800">Payment</h2>
          <p className="text-gray-800 leading-7">
            Payments for rentals must be made via our secure online platform. We accept major credit
            cards, debit cards, and other payment methods as specified during booking. All payment
            details are encrypted for security.
          </p>
        </section>

        {/* Liability Section */}
        <section className="mb-10 p-8 rounded-lg bg-pink-100 shadow-lg">
          <h2 className="text-3xl font-semibold mb-4 text-pink-800">Liability</h2>
          <p className="text-gray-800 leading-7">
            Car Hub is not liable for any indirect, incidental, or consequential damages that may
            arise from the use of our vehicles. We are responsible only for the conditions explicitly
            stated in the rental agreement. Ensure you understand all terms before renting.
          </p>
        </section>

        {/* Governing Law Section */}
        <section className="mb-10 p-8 rounded-lg bg-indigo-100 shadow-lg">
          <h2 className="text-3xl font-semibold mb-4 text-indigo-800">Governing Law</h2>
          <p className="text-gray-800 leading-7">
            These terms are governed by the laws of the country where Car Hub operates. Any disputes
            arising from or related to these terms shall be resolved in the jurisdiction of our
            headquarters.
          </p>
        </section>

        {/* Contact Us Section */}
        <section className="mb-10 p-8 rounded-lg bg-gray-100 shadow-lg">
          <h2 className="text-3xl font-semibold mb-4 text-gray-800">Contact Us</h2>
          <p className="text-gray-800 leading-7">
            If you have any questions or concerns regarding these Terms & Conditions, feel free to
            <a href="/contact" className="text-primary-blue hover:underline"> contact us</a>. Our team is here to assist you.
          </p>
        </section>
        {/* <Link href='/' passHref>
      <CustomButton
      title="Back"
      btnType="button"
      containerStyles="bg-primary-blue text-white hover:bg-primary-blue-hover  border-white rounded-full min-w-[130px]"
      />
      </Link> */}
      </div>
    </main>
  );
};

export default TermsAndConditions;

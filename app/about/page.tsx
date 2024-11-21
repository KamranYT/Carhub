"use client";

import Navbar from "@/components/Navbar";
import React from "react";
import Image from "next/image";

const About: React.FC = () => {
  return (
    <main className="overflow-hidden">
      <Navbar />

      <div className="about-container px-8 py-12 max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mt-10 mb-2 text-center text-primary-blue">
          About Car Hub
        </h1>

        {/* Who We Are Section */}
        <section className="mb-10 flex flex-col md:flex-row items-center gap-6">
          <div className="flex-1">
            <h2 className="text-2xl font-semibold mb-4 text-primary-blue">Who We Are</h2>
            <p className="text-gray-700 leading-7">
              Welcome to <strong>Car Hub</strong>—your trusted partner for car rentals! We aim to make car rental
              services convenient, reliable, and affordable for everyone. Whether you’re planning a
              weekend getaway, a business trip, or just need a temporary vehicle, Car Hub offers a
              hassle-free booking experience with a diverse selection of cars to meet your needs.
            </p>
          </div>
          <div className="flex-1">
            <Image
              src="/who.png" 
              alt="Who We Are"
              width={400}
              height={300}
              className="rounded-lg shadow-md object-cover"
            />
          </div>
        </section>

        {/* Our Mission Section */}
        <section className="mb-10 flex flex-col md:flex-row items-center gap-6">
          <div className="flex-1">
            <h2 className="text-2xl font-semibold mb-4 text-primary-blue">Our Mission</h2>
            <p className="text-gray-700 leading-7">
              At Car Hub, our mission is to revolutionize the car rental industry by making the process
              seamless, transparent, and accessible to everyone. We are committed to providing
              high-quality service, an easy booking process, and a wide range of vehicles to choose from
              so that you can drive with peace of mind.
            </p>
          </div>
          <div className="flex-1">
            <Image
              src="/mission1.png" 
              alt="Our Mission"
              width={450}
              height={300}
              className="rounded-lg shadow-md object-cover"
            />
          </div>
        </section>

        {/* What We Offer Section */}
        <section className="mb-10 flex flex-col md:flex-row items-center gap-6">
          <div className="flex-1">
            <h2 className="text-2xl font-semibold mb-4 text-primary-blue">What We Offer</h2>
            <ul className="list-disc list-inside text-gray-700 leading-7">
              <li>Easy online booking with real-time availability.</li>
              <li>A wide range of cars from economy to luxury models.</li>
              <li>Competitive rates with no hidden fees.</li>
              <li>Flexible rental durations, from short-term to long-term.</li>
              <li>24/7 customer support to assist you whenever you need it.</li>
            </ul>
          </div>
          <div className="flex-1">
            <Image
              src="/offer1.png" 
              alt="What We Offer"
              width={400}
              height={300}
              className="rounded-lg shadow-md object-cover"
            />
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="mb-10 flex flex-col md:flex-row items-center gap-6">
          <div className="flex-1">
            <h2 className="text-2xl font-semibold mb-4 text-primary-blue">Why Choose Us</h2>
            <p className="text-gray-700 leading-7">
              Our customers are at the heart of everything we do. We strive to provide exceptional
              customer service and prioritize your satisfaction.
            </p>
          </div>
          <div className="flex-1">
            <Image
              src="/why.png" 
              alt="Why Choose Us"
              width={400}
              height={300}
              className="rounded-lg shadow-md object-cover"
            />
          </div>
        </section>

        {/* Our Values Section */}
        <section className="mb-10 flex flex-col md:flex-row items-center gap-6">
          <div className="flex-1">
            <h2 className="text-2xl font-semibold mb-4 text-primary-blue">Our Values</h2>
            <ul className="list-disc list-inside text-gray-700 leading-7">
              <li><strong>Integrity</strong> - We operate with honesty and uphold ethical standards in every aspect of our business.</li>
              <li><strong>Excellence</strong> - We are committed to providing high-quality service to every customer.</li>
              <li><strong>Innovation</strong> - We constantly improve our services to meet the needs of a changing market.</li>
              <li><strong>Sustainability</strong> - We are dedicated to environmentally responsible practices to protect our planet.</li>
            </ul>
          </div>
          <div className="flex-1">
            <Image
              src="/values.png" 
              alt="Our Values"
              width={400}
              height={300}
              className="rounded-lg shadow-md object-cover"
            />
          </div>
        </section>
      </div>
    </main>
  );
};

export default About;


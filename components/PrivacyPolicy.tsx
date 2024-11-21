"use client";
import Link from "next/link";
import { CustomButton } from "./CustomButton";
import React from "react";

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="privacy-policy-container px-8 py-12 max-w-5xl mx-auto ">
      <h1 className="text-4xl font-bold mt-6 text-center">Privacy & Policy</h1>

      <section className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
        <p className="text-gray-700 leading-7">
          Welcome to Car Hub! We are committed to safeguarding your privacy. This Privacy Policy
          outlines how we collect, use, and protect your information when you use our website and
          services. By accessing our services, you agree to the terms described in this policy.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">2. Information We Collect</h2>
        <p className="text-gray-700 leading-7">
          We collect various types of information to provide better services to all our users.
          This includes:
        </p>
        <ul className="list-disc list-inside mt-4 text-gray-700 leading-7">
          <li>Personal information you provide (e.g., name, email, phone number).</li>
          <li>Vehicle rental preferences and booking history.</li>
          <li>
            Payment information for processing transactions, handled securely by third-party
            payment processors.
          </li>
          <li>Browser and device information collected through cookies and analytics tools.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">3. How We Use Your Information</h2>
        <p className="text-gray-700 leading-7">
          We use the collected information for the following purposes:
        </p>
        <ul className="list-disc list-inside mt-4 text-gray-700 leading-7">
          <li>To facilitate car rental bookings and related services.</li>
          <li>To personalize your experience and show relevant content.</li>
          <li>To process transactions securely.</li>
          <li>To communicate with you, including sending booking confirmations and updates.</li>
          <li>To improve our website and services based on user feedback and analytics.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">4. Sharing of Information</h2>
        <p className="text-gray-700 leading-7">
          We do not sell, trade, or otherwise transfer your personal information to third parties
          without your consent, except as necessary to provide our services. This may include:
        </p>
        <ul className="list-disc list-inside mt-4 text-gray-700 leading-7">
          <li>Trusted partners and service providers who assist in operating our website.</li>
          <li>Legal and regulatory authorities, if required by law.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">5. Cookies & Tracking Technologies</h2>
        <p className="text-gray-700 leading-7">
          Our website uses cookies and similar tracking technologies to improve user experience,
          analyze traffic, and understand visitor behavior. You can control cookie settings through
          your browser preferences.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">6. Data Security</h2>
        <p className="text-gray-700 leading-7">
          We implement various security measures to maintain the safety of your personal
          information. Your data is stored on secure servers and protected from unauthorized
          access.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">7. Third-Party Links</h2>
        <p className="text-gray-700 leading-7">
          Our website may contain links to third-party websites. We are not responsible for the
          privacy practices of those websites. We recommend reviewing their privacy policies
          before providing any personal information.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">8. Your Rights</h2>
        <p className="text-gray-700 leading-7">
          You have the right to access, update, or delete your personal information. If you wish
          to exercise any of these rights, please contact us at support@carhub.com.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">9. Changes to This Privacy Policy</h2>
        <p className="text-gray-700 leading-7">
          We may update this Privacy Policy from time to time. Any changes will be posted on this
          page, and we encourage you to review the policy periodically.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">10. Contact Us</h2>
        <p className="text-gray-700 leading-7">
          If you have any questions about this Privacy Policy, please contact us at:
          support@carhub.com.
        </p>
      </section>
    </div>
  );
};

export default PrivacyPolicy;

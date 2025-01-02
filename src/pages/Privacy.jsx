import React from 'react';
import Header from '../components/Header';

const PrivacyPolicyPage = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-8 px-4 md:px-16">
        <Header />
      <div className="bg-white shadow rounded-lg p-6">
        <h1 className="text-3xl font-bold mb-4 text-center">Privacy Policy</h1>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
          <p className="text-gray-700">
            At LearningHub, we respect your privacy and are committed to protecting the personal information you share with us. This Privacy Policy explains how we collect, use, and protect your personal data.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Information We Collect</h2>
          <p className="text-gray-700">
            We collect personal information such as your name, email address, and other account-related details. We may also collect usage data and technical information about your interactions with our platform.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">How We Use Your Information</h2>
          <p className="text-gray-700">
            We use your information to provide and improve our services, communicate with you, personalize your experience, and fulfill legal obligations.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Data Retention</h2>
          <p className="text-gray-700">
            We retain your personal data for as long as your account is active or as needed to provide our services, comply with legal obligations, and resolve disputes.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Your Rights and Choices</h2>
          <p className="text-gray-700">
            You have the right to access, update, and delete your personal information. You can also opt-out of receiving marketing communications at any time.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Security</h2>
          <p className="text-gray-700">
            We take reasonable measures to protect your personal data from unauthorized access, alteration, or disclosure.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Changes to the Privacy Policy</h2>
          <p className="text-gray-700">
            We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated revision date.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
          <p className="text-gray-700">
            If you have any questions or concerns about this Privacy Policy, please contact us at support@learninghub.com.
          </p>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;

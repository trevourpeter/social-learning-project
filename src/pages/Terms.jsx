import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const TermsOfServicePage = () => {
    return (
        <div className="bg-gray-50 min-h-screen flex flex-col">
            <Header />
            <div className="flex-grow py-8 px-4 md:px-16">
                <div className="bg-white shadow rounded-lg p-6">
                    <h1 className="text-3xl font-bold mb-4 text-center">Terms of Service</h1>
                    
                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
                        <p className="text-gray-700">
                            By using the LearningHub platform, you agree to abide by these Terms of Service. If you do not agree, please do not use the platform.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4">Acceptance of Terms</h2>
                        <p className="text-gray-700">
                            By accessing or using LearningHub, you accept and agree to these Terms of Service and our Privacy Policy.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4">Use of the Service</h2>
                        <p className="text-gray-700">
                            You are granted a non-exclusive, non-transferable right to use the platform for personal and educational purposes.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4">User Responsibilities</h2>
                        <p className="text-gray-700">
                            You are responsible for maintaining the confidentiality of your account information and for all activities that occur under your account.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4">Prohibited Uses</h2>
                        <p className="text-gray-700">
                            You may not use LearningHub for any unlawful activities or to infringe on the rights of others.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4">Termination</h2>
                        <p className="text-gray-700">
                            We reserve the right to suspend or terminate your access to the platform for violating these Terms of Service.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4">Limitation of Liability</h2>
                        <p className="text-gray-700">
                            We are not liable for any direct or indirect damages arising from the use of our platform.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4">Changes to the Terms of Service</h2>
                        <p className="text-gray-700">
                            We may update these Terms of Service at any time. Changes will be posted on this page with an updated revision date.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
                        <p className="text-gray-700">
                            If you have any questions about these Terms of Service, please contact us at support@learninghub.com.
                        </p>
                    </section>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default TermsOfServicePage;

import React from 'react';
import { Link } from 'react-router-dom';
import { FileText, AlertCircle, CheckCircle, XCircle, Scale } from 'lucide-react';

const TermsOfServicePage = () => {
    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8 sm:p-12">
                {/* Header */}
                <div className="text-center mb-12">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                        <Scale className="w-8 h-8 text-blue-600" />
                    </div>
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">Terms of Service</h1>
                    <p className="text-gray-600">Last updated: January 7, 2026</p>
                </div>

                {/* Content */}
                <div className="prose prose-lg max-w-none">
                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                            <FileText className="w-6 h-6 text-blue-600" />
                            Agreement to Terms
                        </h2>
                        <p className="text-gray-700 leading-relaxed">
                            By accessing and using SewaYatra's bus ticketing platform, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services. We reserve the right to modify these terms at any time, and your continued use constitutes acceptance of any changes.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                            <CheckCircle className="w-6 h-6 text-blue-600" />
                            User Responsibilities
                        </h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            As a user of SewaYatra, you agree to:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                            <li>Provide accurate and complete information during registration and booking</li>
                            <li>Maintain the confidentiality of your account credentials</li>
                            <li>Use the platform only for lawful purposes</li>
                            <li>Not attempt to gain unauthorized access to our systems</li>
                            <li>Not engage in any activity that disrupts or interferes with our services</li>
                            <li>Comply with all applicable laws and regulations</li>
                            <li>Be present at the boarding point at least 30 minutes before departure</li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Booking and Tickets</h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            When you make a booking through SewaYatra:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                            <li>You are entering into a contract with the bus operator, not SewaYatra</li>
                            <li>All bookings are subject to availability and confirmation</li>
                            <li>You must present valid identification and your booking confirmation when boarding</li>
                            <li>Tickets are non-transferable unless explicitly stated otherwise</li>
                            <li>Seat assignments are subject to bus operator policies</li>
                            <li>Children above 5 years require a full ticket</li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Payment Terms</h2>
                        <p className="text-gray-700 leading-relaxed">
                            All payments must be made in full at the time of booking. We accept payments through various methods including eSewa, Khalti, credit/debit cards, and bank transfers. Payment processing is handled by secure third-party payment gateways. Service fees and taxes are non-refundable even if the booking is cancelled.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Cancellations and Modifications</h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            Cancellation and modification policies vary by bus operator:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                            <li>Cancellations made 24+ hours before departure: 80% refund</li>
                            <li>Cancellations made 12-24 hours before departure: 50% refund</li>
                            <li>Cancellations made less than 12 hours before departure: No refund</li>
                            <li>No-shows are not eligible for refunds</li>
                            <li>Modifications are subject to availability and may incur additional charges</li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                            <XCircle className="w-6 h-6 text-blue-600" />
                            Prohibited Activities
                        </h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            You may not:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                            <li>Use automated systems or software to extract data from our platform</li>
                            <li>Resell tickets for profit without authorization</li>
                            <li>Impersonate another person or entity</li>
                            <li>Upload malicious code or viruses</li>
                            <li>Interfere with security features of the platform</li>
                            <li>Use the platform for fraudulent purposes</li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                            <AlertCircle className="w-6 h-6 text-blue-600" />
                            Limitation of Liability
                        </h2>
                        <p className="text-gray-700 leading-relaxed">
                            SewaYatra acts as an intermediary between customers and bus operators. We are not responsible for:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 mt-4">
                            <li>Delays, cancellations, or schedule changes by bus operators</li>
                            <li>Quality of service provided by bus operators</li>
                            <li>Loss or damage to personal belongings during travel</li>
                            <li>Injuries or accidents during travel</li>
                            <li>Acts of God, natural disasters, or unforeseen circumstances</li>
                        </ul>
                        <p className="text-gray-700 leading-relaxed mt-4">
                            Our total liability shall not exceed the amount paid for the booking in question.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Intellectual Property</h2>
                        <p className="text-gray-700 leading-relaxed">
                            All content on the SewaYatra platform, including text, graphics, logos, and software, is the property of SewaYatra or its licensors and is protected by copyright and other intellectual property laws. You may not reproduce, distribute, or create derivative works without our express written permission.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Dispute Resolution</h2>
                        <p className="text-gray-700 leading-relaxed">
                            Any disputes arising from these terms or your use of our services shall be resolved through good faith negotiations. If a resolution cannot be reached, disputes shall be subject to the exclusive jurisdiction of the courts in Kathmandu, Nepal.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Information</h2>
                        <p className="text-gray-700 leading-relaxed">
                            For questions about these Terms of Service, please contact us:
                        </p>
                        <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                            <p className="text-gray-700"><strong>Email:</strong> support@sewayatra.com</p>
                            <p className="text-gray-700"><strong>Phone:</strong> +977-9800000000</p>
                            <p className="text-gray-700"><strong>Address:</strong> Kathmandu, Nepal</p>
                        </div>
                    </section>
                </div>

                {/* Back to Home */}
                <div className="mt-12 text-center">
                    <Link
                        to="/"
                        className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
                    >
                        Back to Home
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default TermsOfServicePage;

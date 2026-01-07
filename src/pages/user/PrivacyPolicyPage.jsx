import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Lock, Eye, Database, UserCheck, FileText } from 'lucide-react';

const PrivacyPolicyPage = () => {
    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8 sm:p-12">
                {/* Header */}
                <div className="text-center mb-12">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-100 rounded-full mb-4">
                        <Shield className="w-8 h-8 text-emerald-600" />
                    </div>
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
                    <p className="text-gray-600">Last updated: January 7, 2026</p>
                </div>

                {/* Content */}
                <div className="prose prose-lg max-w-none">
                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                            <FileText className="w-6 h-6 text-emerald-600" />
                            Introduction
                        </h2>
                        <p className="text-gray-700 leading-relaxed">
                            Welcome to SewaYatra. We are committed to protecting your personal information and your right to privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our bus ticketing platform.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                            <Database className="w-6 h-6 text-emerald-600" />
                            Information We Collect
                        </h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            We collect information that you provide directly to us when using our services:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                            <li><strong>Personal Information:</strong> Name, email address, phone number</li>
                            <li><strong>Booking Information:</strong> Travel dates, routes, seat preferences</li>
                            <li><strong>Payment Information:</strong> Payment method details (processed securely through third-party providers)</li>
                            <li><strong>Account Information:</strong> Username, password (encrypted), and profile preferences</li>
                            <li><strong>Usage Data:</strong> Information about how you interact with our platform</li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                            <Eye className="w-6 h-6 text-emerald-600" />
                            How We Use Your Information
                        </h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            We use the information we collect for the following purposes:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                            <li>To process and manage your bus ticket bookings</li>
                            <li>To communicate with you about your bookings and account</li>
                            <li>To send booking confirmations and travel updates</li>
                            <li>To improve our services and user experience</li>
                            <li>To prevent fraud and ensure platform security</li>
                            <li>To comply with legal obligations and resolve disputes</li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                            <Lock className="w-6 h-6 text-emerald-600" />
                            Data Security
                        </h2>
                        <p className="text-gray-700 leading-relaxed">
                            We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. Your payment information is encrypted using SSL technology and processed through secure payment gateways. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                            <UserCheck className="w-6 h-6 text-emerald-600" />
                            Your Rights
                        </h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            You have the following rights regarding your personal information:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                            <li><strong>Access:</strong> Request access to your personal data</li>
                            <li><strong>Correction:</strong> Request correction of inaccurate data</li>
                            <li><strong>Deletion:</strong> Request deletion of your personal data</li>
                            <li><strong>Objection:</strong> Object to processing of your data</li>
                            <li><strong>Data Portability:</strong> Request transfer of your data</li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Information Sharing</h2>
                        <p className="text-gray-700 leading-relaxed">
                            We do not sell your personal information. We may share your information with:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 mt-4">
                            <li>Bus operators to fulfill your booking</li>
                            <li>Payment processors to complete transactions</li>
                            <li>Service providers who assist in operating our platform</li>
                            <li>Law enforcement when required by law</li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Data Retention</h2>
                        <p className="text-gray-700 leading-relaxed">
                            We retain your personal information for as long as necessary to provide our services and comply with legal obligations. Booking records are typically retained for 3 years for accounting and legal purposes.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
                        <p className="text-gray-700 leading-relaxed">
                            If you have any questions about this Privacy Policy or our data practices, please contact us at:
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
                        className="inline-block px-6 py-3 bg-emerald-600 text-white font-semibold rounded-lg hover:bg-emerald-700 transition-colors"
                    >
                        Back to Home
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default PrivacyPolicyPage;

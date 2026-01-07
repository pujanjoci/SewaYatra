import React from 'react';
import { Link } from 'react-router-dom';
import { Cookie, Settings, Eye, Shield, CheckSquare } from 'lucide-react';

const CookiePolicyPage = () => {
    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8 sm:p-12">
                {/* Header */}
                <div className="text-center mb-12">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full mb-4">
                        <Cookie className="w-8 h-8 text-orange-600" />
                    </div>
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">Cookie Policy</h1>
                    <p className="text-gray-600">Last updated: January 7, 2026</p>
                </div>

                {/* Content */}
                <div className="prose prose-lg max-w-none">
                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">What Are Cookies?</h2>
                        <p className="text-gray-700 leading-relaxed">
                            Cookies are small text files that are placed on your device (computer, smartphone, or tablet) when you visit our website. They help us provide you with a better experience by remembering your preferences and understanding how you use our platform.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                            <Eye className="w-6 h-6 text-orange-600" />
                            How We Use Cookies
                        </h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            SewaYatra uses cookies for the following purposes:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                            <li><strong>Authentication:</strong> To keep you logged in during your session</li>
                            <li><strong>Preferences:</strong> To remember your language and display settings</li>
                            <li><strong>Security:</strong> To protect your account and prevent fraud</li>
                            <li><strong>Analytics:</strong> To understand how visitors use our platform</li>
                            <li><strong>Performance:</strong> To improve loading times and user experience</li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Types of Cookies We Use</h2>

                        <div className="space-y-6">
                            <div className="p-4 bg-blue-50 border-l-4 border-blue-500 rounded-r-lg">
                                <h3 className="font-bold text-blue-900 mb-2 flex items-center gap-2">
                                    <Shield className="w-5 h-5" />
                                    Essential Cookies
                                </h3>
                                <p className="text-blue-800 mb-2">
                                    These cookies are necessary for the website to function properly. They enable core functionality such as security, network management, and accessibility.
                                </p>
                                <p className="text-sm text-blue-700">
                                    <strong>Examples:</strong> Session cookies, authentication tokens, security cookies
                                </p>
                                <p className="text-sm text-blue-700 mt-1">
                                    <strong>Duration:</strong> Session or up to 30 days
                                </p>
                            </div>

                            <div className="p-4 bg-green-50 border-l-4 border-green-500 rounded-r-lg">
                                <h3 className="font-bold text-green-900 mb-2 flex items-center gap-2">
                                    <Settings className="w-5 h-5" />
                                    Functional Cookies
                                </h3>
                                <p className="text-green-800 mb-2">
                                    These cookies allow us to remember choices you make and provide enhanced, personalized features.
                                </p>
                                <p className="text-sm text-green-700">
                                    <strong>Examples:</strong> Language preferences, recent searches, display settings
                                </p>
                                <p className="text-sm text-green-700 mt-1">
                                    <strong>Duration:</strong> Up to 1 year
                                </p>
                            </div>

                            <div className="p-4 bg-purple-50 border-l-4 border-purple-500 rounded-r-lg">
                                <h3 className="font-bold text-purple-900 mb-2 flex items-center gap-2">
                                    <Eye className="w-5 h-5" />
                                    Analytics Cookies
                                </h3>
                                <p className="text-purple-800 mb-2">
                                    These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously.
                                </p>
                                <p className="text-sm text-purple-700">
                                    <strong>Examples:</strong> Google Analytics, page visit tracking, user behavior analysis
                                </p>
                                <p className="text-sm text-purple-700 mt-1">
                                    <strong>Duration:</strong> Up to 2 years
                                </p>
                            </div>
                        </div>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Third-Party Cookies</h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            We may also use third-party cookies from trusted partners:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                            <li><strong>Payment Processors:</strong> eSewa, Khalti, and payment gateways use cookies to process transactions securely</li>
                            <li><strong>Analytics Providers:</strong> Google Analytics helps us understand user behavior</li>
                            <li><strong>Social Media:</strong> Social media plugins may set cookies when you share content</li>
                        </ul>
                        <p className="text-gray-700 leading-relaxed mt-4">
                            These third parties have their own privacy policies and cookie policies.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                            <CheckSquare className="w-6 h-6 text-orange-600" />
                            Managing Cookies
                        </h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            You have the right to decide whether to accept or reject cookies. You can exercise your cookie preferences by:
                        </p>

                        <div className="bg-gray-50 p-4 rounded-lg mb-4">
                            <h3 className="font-bold text-gray-900 mb-3">Browser Settings</h3>
                            <p className="text-gray-700 mb-2">Most web browsers allow you to control cookies through their settings:</p>
                            <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4 text-sm">
                                <li><strong>Chrome:</strong> Settings → Privacy and Security → Cookies</li>
                                <li><strong>Firefox:</strong> Options → Privacy & Security → Cookies</li>
                                <li><strong>Safari:</strong> Preferences → Privacy → Cookies</li>
                                <li><strong>Edge:</strong> Settings → Privacy → Cookies</li>
                            </ul>
                        </div>

                        <p className="text-gray-700 leading-relaxed">
                            Please note that if you choose to block or delete cookies, some features of our website may not function properly, and you may not be able to access certain areas of the site.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Do Not Track Signals</h2>
                        <p className="text-gray-700 leading-relaxed">
                            Some browsers include a "Do Not Track" feature that signals to websites you visit that you do not want to have your online activity tracked. Currently, there is no industry standard for how to respond to Do Not Track signals, and we do not currently respond to these signals.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Updates to This Policy</h2>
                        <p className="text-gray-700 leading-relaxed">
                            We may update this Cookie Policy from time to time to reflect changes in technology, legislation, or our business practices. We will notify you of any significant changes by posting the new policy on this page with an updated "Last Updated" date.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
                        <p className="text-gray-700 leading-relaxed">
                            If you have questions about our use of cookies:
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
                        className="inline-block px-6 py-3 bg-orange-600 text-white font-semibold rounded-lg hover:bg-orange-700 transition-colors"
                    >
                        Back to Home
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default CookiePolicyPage;

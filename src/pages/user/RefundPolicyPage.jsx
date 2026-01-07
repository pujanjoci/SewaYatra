import React from 'react';
import { Link } from 'react-router-dom';
import { DollarSign, Clock, CheckCircle, XCircle, AlertTriangle } from 'lucide-react';

const RefundPolicyPage = () => {
    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8 sm:p-12">
                {/* Header */}
                <div className="text-center mb-12">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                        <DollarSign className="w-8 h-8 text-green-600" />
                    </div>
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">Refund Policy</h1>
                    <p className="text-gray-600">Last updated: January 7, 2026</p>
                </div>

                {/* Content */}
                <div className="prose prose-lg max-w-none">
                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Overview</h2>
                        <p className="text-gray-700 leading-relaxed">
                            At SewaYatra, we understand that travel plans can change. This Refund Policy outlines the conditions under which refunds are processed for bus ticket cancellations. Please read this policy carefully before making a booking.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                            <CheckCircle className="w-6 h-6 text-green-600" />
                            Refund Eligibility
                        </h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            Refunds are available for cancelled bookings based on the following timeline:
                        </p>

                        <div className="space-y-4">
                            <div className="p-4 bg-green-50 border-l-4 border-green-500 rounded-r-lg">
                                <h3 className="font-bold text-green-900 mb-2">24+ Hours Before Departure</h3>
                                <p className="text-green-800">80% refund of the ticket price</p>
                                <p className="text-sm text-green-700 mt-1">Service fees and taxes are non-refundable</p>
                            </div>

                            <div className="p-4 bg-yellow-50 border-l-4 border-yellow-500 rounded-r-lg">
                                <h3 className="font-bold text-yellow-900 mb-2">12-24 Hours Before Departure</h3>
                                <p className="text-yellow-800">50% refund of the ticket price</p>
                                <p className="text-sm text-yellow-700 mt-1">Service fees and taxes are non-refundable</p>
                            </div>

                            <div className="p-4 bg-red-50 border-l-4 border-red-500 rounded-r-lg">
                                <h3 className="font-bold text-red-900 mb-2">Less Than 12 Hours Before Departure</h3>
                                <p className="text-red-800">No refund available</p>
                                <p className="text-sm text-red-700 mt-1">Cancellations made within 12 hours are not eligible for refunds</p>
                            </div>
                        </div>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                            <XCircle className="w-6 h-6 text-green-600" />
                            Non-Refundable Items
                        </h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            The following are not refundable under any circumstances:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                            <li>Service fees and convenience charges</li>
                            <li>Payment processing fees</li>
                            <li>Government taxes and levies</li>
                            <li>No-show bookings (failure to board the bus)</li>
                            <li>Partially used tickets</li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                            <Clock className="w-6 h-6 text-green-600" />
                            Refund Processing Time
                        </h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            Once your cancellation is confirmed, refunds are processed according to the following timeline:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                            <li><strong>eSewa/Khalti:</strong> 3-5 business days</li>
                            <li><strong>Credit/Debit Card:</strong> 7-10 business days</li>
                            <li><strong>Bank Transfer:</strong> 10-15 business days</li>
                        </ul>
                        <p className="text-gray-700 leading-relaxed mt-4">
                            Please note that the actual time may vary depending on your bank or payment provider's processing time.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Request a Refund</h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            To cancel your booking and request a refund:
                        </p>
                        <ol className="list-decimal list-inside space-y-2 text-gray-700 ml-4">
                            <li>Log in to your SewaYatra account</li>
                            <li>Navigate to "My Tickets"</li>
                            <li>Select the booking you wish to cancel</li>
                            <li>Click on "Cancel Booking"</li>
                            <li>Confirm the cancellation</li>
                            <li>You will receive a cancellation confirmation via email</li>
                        </ol>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                            <AlertTriangle className="w-6 h-6 text-green-600" />
                            Special Circumstances
                        </h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            Refunds may be processed differently in the following situations:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                            <li><strong>Bus Operator Cancellation:</strong> Full refund including all fees</li>
                            <li><strong>Significant Delay (2+ hours):</strong> Full refund if you choose not to travel</li>
                            <li><strong>Route Change:</strong> Full refund if the new route doesn't meet your needs</li>
                            <li><strong>Medical Emergency:</strong> Case-by-case review with supporting documentation</li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Refund Method</h2>
                        <p className="text-gray-700 leading-relaxed">
                            Refunds will be processed using the same payment method used for the original booking. If the original payment method is no longer available, please contact our support team to arrange an alternative refund method.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Dispute Resolution</h2>
                        <p className="text-gray-700 leading-relaxed">
                            If you believe your refund was processed incorrectly or have any concerns about the refund amount, please contact our customer support team within 7 days of receiving the refund. We will review your case and respond within 3-5 business days.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
                        <p className="text-gray-700 leading-relaxed">
                            For questions about refunds or to request assistance:
                        </p>
                        <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                            <p className="text-gray-700"><strong>Email:</strong> support@sewayatra.com</p>
                            <p className="text-gray-700"><strong>Phone:</strong> +977-9800000000</p>
                            <p className="text-gray-700"><strong>Support Hours:</strong> 9 AM - 6 PM (Nepal Time)</p>
                        </div>
                    </section>
                </div>

                {/* Back to Home */}
                <div className="mt-12 text-center">
                    <Link
                        to="/"
                        className="inline-block px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors"
                    >
                        Back to Home
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default RefundPolicyPage;

import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Send, Clock, HelpCircle, ArrowRight } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { useToast } from '../../context/ToastContext';
import { Link } from 'react-router-dom';

const Contact = () => {
    const { user } = useAuth();
    const { success, error } = useToast();

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        subject: 'general',
        message: ''
    });

    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    // Auto-fill form for logged-in users
    useEffect(() => {
        if (user) {
            const nameParts = user.name ? user.name.split(' ') : ['', ''];
            setFormData(prev => ({
                ...prev,
                firstName: nameParts[0] || '',
                lastName: nameParts.slice(1).join(' ') || '',
                email: user.email || '',
                phone: user.phone || ''
            }));
        }
    }, [user]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
        // Clear error for this field when user starts typing
        if (errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: ''
            }));
        }
    };

    const validateForm = () => {
        const newErrors = {};

        if (!formData.firstName.trim()) {
            newErrors.firstName = 'First name is required';
        }

        if (!formData.lastName.trim()) {
            newErrors.lastName = 'Last name is required';
        }

        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = 'Please enter a valid email address';
        }

        if (!formData.message.trim()) {
            newErrors.message = 'Message is required';
        } else if (formData.message.trim().length < 10) {
            newErrors.message = 'Message must be at least 10 characters long';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!validateForm()) {
            error('Please fix the errors in the form');
            return;
        }

        setIsSubmitting(true);

        // Simulate form submission
        setTimeout(() => {
            success('Thank you for contacting us! We will get back to you within 24 hours.');

            // Reset form if user is not logged in
            if (!user) {
                setFormData({
                    firstName: '',
                    lastName: '',
                    email: '',
                    phone: '',
                    subject: 'general',
                    message: ''
                });
            } else {
                // Only reset message and subject for logged-in users
                setFormData(prev => ({
                    ...prev,
                    subject: 'general',
                    message: ''
                }));
            }

            setIsSubmitting(false);
        }, 1000);
    };

    const faqs = [
        {
            question: "How do I book a ticket?",
            answer: "Search for your route, select your seat, and complete the payment."
        },
        {
            question: "Can I cancel my booking?",
            answer: "Yes, you can cancel up to 2 hours before departure for a full refund."
        },
        {
            question: "How do I get my ticket?",
            answer: "Your ticket will be sent to your email and available in 'My Tickets' section."
        },
        {
            question: "What payment methods do you accept?",
            answer: "We accept all major credit/debit cards and mobile wallets."
        }
    ];

    return (
        <div className="min-h-screen bg-gray-50 py-12 md:py-20 px-4">
            <div className="container mx-auto max-w-6xl">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Get in Touch</h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Have a question or need assistance? We're here to help you 24/7.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 rounded-3xl overflow-hidden shadow-2xl bg-white mb-16">
                    {/* Contact Info Sidebar */}
                    <div className="bg-gradient-to-br from-emerald-600 to-green-700 p-10 md:p-12 text-white flex flex-col justify-between relative overflow-hidden">
                        {/* Decor blobs */}
                        <div className="absolute top-0 right-0 w-40 h-40 bg-emerald-500 rounded-full blur-2xl transform translate-x-1/2 -translate-y-1/2 opacity-50"></div>
                        <div className="absolute bottom-0 left-0 w-40 h-40 bg-green-600 rounded-full blur-2xl transform -translate-x-1/2 translate-y-1/2 opacity-50"></div>

                        <div className="relative z-10">
                            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                            <p className="text-emerald-100 mb-10 leading-relaxed">
                                Fill up the form and our team will get back to you within 24 hours.
                            </p>

                            <div className="space-y-8">
                                <div className="flex items-start gap-4">
                                    <MapPin className="w-6 h-6 text-emerald-300 mt-1 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-semibold text-lg mb-1">Our Office</h4>
                                        <p className="text-emerald-100 leading-relaxed">123 Thamel Marg,<br />Kathmandu 44600, Nepal</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <Mail className="w-6 h-6 text-emerald-300 mt-1 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-semibold text-lg mb-1">Email Us</h4>
                                        <p className="text-emerald-100">support@sewayatra.com</p>
                                        <p className="text-emerald-100">info@sewayatra.com</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <Phone className="w-6 h-6 text-emerald-300 mt-1 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-semibold text-lg mb-1">Call Us</h4>
                                        <p className="text-emerald-100">+977-9800000000</p>
                                        <p className="text-emerald-100">+977-01-4400000</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <Clock className="w-6 h-6 text-emerald-300 mt-1 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-semibold text-lg mb-1">Working Hours</h4>
                                        <p className="text-emerald-100">Monday - Friday: 6:00 AM - 10:00 PM</p>
                                        <p className="text-emerald-100">Saturday - Sunday: 7:00 AM - 9:00 PM</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="relative z-10 mt-12">
                            <h4 className="font-semibold text-lg mb-4">Quick Actions</h4>
                            <div className="space-y-3">
                                <Link
                                    to="/buses"
                                    className="flex items-center justify-between bg-white/10 hover:bg-white/20 backdrop-blur-sm px-4 py-3 rounded-lg transition-all group"
                                >
                                    <span className="font-medium">Book a Ticket</span>
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </Link>
                                <Link
                                    to="/my-tickets"
                                    className="flex items-center justify-between bg-white/10 hover:bg-white/20 backdrop-blur-sm px-4 py-3 rounded-lg transition-all group"
                                >
                                    <span className="font-medium">View My Tickets</span>
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="lg:col-span-2 p-10 md:p-12 bg-white">
                        <form onSubmit={handleSubmit} className="space-y-8">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-gray-700 uppercase tracking-wider">
                                        First Name <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="firstName"
                                        value={formData.firstName}
                                        onChange={handleChange}
                                        className={`w-full border-b ${errors.firstName ? 'border-red-500' : 'border-gray-300'} py-2 focus:border-emerald-600 outline-none transition-colors text-gray-800 placeholder-gray-400`}
                                        placeholder="John"
                                    />
                                    {errors.firstName && <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>}
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-gray-700 uppercase tracking-wider">
                                        Last Name <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="lastName"
                                        value={formData.lastName}
                                        onChange={handleChange}
                                        className={`w-full border-b ${errors.lastName ? 'border-red-500' : 'border-gray-300'} py-2 focus:border-emerald-600 outline-none transition-colors text-gray-800 placeholder-gray-400`}
                                        placeholder="Doe"
                                    />
                                    {errors.lastName && <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>}
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-gray-700 uppercase tracking-wider">
                                        Email <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className={`w-full border-b ${errors.email ? 'border-red-500' : 'border-gray-300'} py-2 focus:border-emerald-600 outline-none transition-colors text-gray-800 placeholder-gray-400`}
                                        placeholder="john@example.com"
                                    />
                                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-gray-700 uppercase tracking-wider">Phone</label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className="w-full border-b border-gray-300 py-2 focus:border-emerald-600 outline-none transition-colors text-gray-800 placeholder-gray-400"
                                        placeholder="+977 98..."
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-gray-700 uppercase tracking-wider">Subject</label>
                                <div className="flex flex-wrap items-center gap-4 mt-2">
                                    <label className="flex items-center gap-2 cursor-pointer">
                                        <input
                                            type="radio"
                                            name="subject"
                                            value="general"
                                            checked={formData.subject === 'general'}
                                            onChange={handleChange}
                                            className="text-emerald-600 focus:ring-emerald-500 accent-emerald-600"
                                        />
                                        <span className="text-gray-600">General Inquiry</span>
                                    </label>
                                    <label className="flex items-center gap-2 cursor-pointer">
                                        <input
                                            type="radio"
                                            name="subject"
                                            value="support"
                                            checked={formData.subject === 'support'}
                                            onChange={handleChange}
                                            className="text-emerald-600 focus:ring-emerald-500 accent-emerald-600"
                                        />
                                        <span className="text-gray-600">Support</span>
                                    </label>
                                    <label className="flex items-center gap-2 cursor-pointer">
                                        <input
                                            type="radio"
                                            name="subject"
                                            value="feedback"
                                            checked={formData.subject === 'feedback'}
                                            onChange={handleChange}
                                            className="text-emerald-600 focus:ring-emerald-500 accent-emerald-600"
                                        />
                                        <span className="text-gray-600">Feedback</span>
                                    </label>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-gray-700 uppercase tracking-wider">
                                    Message <span className="text-red-500">*</span>
                                </label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows="4"
                                    className={`w-full border-b ${errors.message ? 'border-red-500' : 'border-gray-300'} py-2 focus:border-emerald-600 outline-none transition-colors text-gray-800 placeholder-gray-400 resize-none`}
                                    placeholder="Write your message here..."
                                ></textarea>
                                {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
                            </div>

                            <div className="pt-4">
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="bg-gradient-to-r from-emerald-600 to-green-700 hover:from-emerald-700 hover:to-green-800 text-white font-bold py-4 px-8 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    <Send className="w-5 h-5" />
                                    {isSubmitting ? 'Sending...' : 'Send Message'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>

                {/* FAQ Section */}
                <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-100 rounded-full mb-4">
                            <HelpCircle className="w-8 h-8 text-emerald-600" />
                        </div>
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
                        <p className="text-gray-600">Quick answers to common questions</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {faqs.map((faq, index) => (
                            <div key={index} className="bg-gray-50 p-6 rounded-xl border border-gray-100 hover:border-emerald-200 hover:shadow-md transition-all">
                                <h3 className="font-bold text-gray-900 mb-2 flex items-start gap-2">
                                    <span className="text-emerald-600 mt-1">Q:</span>
                                    <span>{faq.question}</span>
                                </h3>
                                <p className="text-gray-600 ml-6">{faq.answer}</p>
                            </div>
                        ))}
                    </div>
                    <div className="text-center mt-8">
                        <p className="text-gray-600">
                            Can't find what you're looking for?{' '}
                            <button
                                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                                className="text-emerald-600 hover:text-emerald-700 font-semibold"
                            >
                                Contact us directly
                            </button>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;

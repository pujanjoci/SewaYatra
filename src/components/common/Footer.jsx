import { Link } from 'react-router-dom';
import { Bus, Facebook, Twitter, Instagram, Mail, Phone, MapPin, Send } from 'lucide-react';
import SewaYatra from '../../assets/sewayatra.svg';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-300 mt-auto border-t border-gray-700">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 py-12 lg:py-16">
                    {/* Brand Section */}
                    <div className="lg:col-span-1">
                        <Link to="/" className="flex items-center gap-2 mb-4 group">
                            <img src={SewaYatra} alt="Sewa Yatra" className="w-12 h-12" />
                            <span className="text-2xl font-bold">
                                Sewa<span className="text-emerald-500">Yatra</span>
                            </span>
                        </Link>
                        <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-xs">
                            Nepal's most trusted online bus ticketing platform. Making your travels simple, secure, and smart.
                        </p>

                        {/* Social Links */}
                        <div className="flex gap-3">
                            <a
                                href="#"
                                className="p-2.5 bg-gray-800 rounded-lg hover:bg-blue-600 hover:text-white transition-all duration-300 transform hover:scale-110"
                                aria-label="Facebook"
                            >
                                <Facebook size={18} />
                            </a>
                            <a
                                href="#"
                                className="p-2.5 bg-gray-800 rounded-lg hover:bg-sky-500 hover:text-white transition-all duration-300 transform hover:scale-110"
                                aria-label="Twitter"
                            >
                                <Twitter size={18} />
                            </a>
                            <a
                                href="#"
                                className="p-2.5 bg-gray-800 rounded-lg hover:bg-pink-600 hover:text-white transition-all duration-300 transform hover:scale-110"
                                aria-label="Instagram"
                            >
                                <Instagram size={18} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-white font-bold text-lg mb-6 relative inline-block">
                            Quick Links
                            <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-emerald-500"></span>
                        </h4>
                        <ul className="space-y-3">
                            <li>
                                <Link to="/" className="text-gray-400 hover:text-emerald-500 transition-colors duration-200 flex items-center group">
                                    <span className="w-0 group-hover:w-2 h-0.5 bg-emerald-500 mr-0 group-hover:mr-2 transition-all duration-200"></span>
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link to="/about" className="text-gray-400 hover:text-emerald-500 transition-colors duration-200 flex items-center group">
                                    <span className="w-0 group-hover:w-2 h-0.5 bg-emerald-500 mr-0 group-hover:mr-2 transition-all duration-200"></span>
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link to="/routes" className="text-gray-400 hover:text-emerald-500 transition-colors duration-200 flex items-center group">
                                    <span className="w-0 group-hover:w-2 h-0.5 bg-emerald-500 mr-0 group-hover:mr-2 transition-all duration-200"></span>
                                    Routes
                                </Link>
                            </li>
                            <li>
                                <Link to="/buses" className="text-gray-400 hover:text-emerald-500 transition-colors duration-200 flex items-center group">
                                    <span className="w-0 group-hover:w-2 h-0.5 bg-emerald-500 mr-0 group-hover:mr-2 transition-all duration-200"></span>
                                    Bus Listings
                                </Link>
                            </li>
                            <li>
                                <Link to="/contact" className="text-gray-400 hover:text-emerald-500 transition-colors duration-200 flex items-center group">
                                    <span className="w-0 group-hover:w-2 h-0.5 bg-emerald-500 mr-0 group-hover:mr-2 transition-all duration-200"></span>
                                    Contact Support
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Legal */}
                    <div>
                        <h4 className="text-white font-bold text-lg mb-6 relative inline-block">
                            Legal
                            <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-emerald-500"></span>
                        </h4>
                        <ul className="space-y-3">
                            <li>
                                <Link to="/privacy-policy" className="text-gray-400 hover:text-emerald-500 transition-colors duration-200 flex items-center group">
                                    <span className="w-0 group-hover:w-2 h-0.5 bg-emerald-500 mr-0 group-hover:mr-2 transition-all duration-200"></span>
                                    Privacy Policy
                                </Link>
                            </li>
                            <li>
                                <Link to="/terms-of-service" className="text-gray-400 hover:text-emerald-500 transition-colors duration-200 flex items-center group">
                                    <span className="w-0 group-hover:w-2 h-0.5 bg-emerald-500 mr-0 group-hover:mr-2 transition-all duration-200"></span>
                                    Terms of Service
                                </Link>
                            </li>
                            <li>
                                <Link to="/refund-policy" className="text-gray-400 hover:text-emerald-500 transition-colors duration-200 flex items-center group">
                                    <span className="w-0 group-hover:w-2 h-0.5 bg-emerald-500 mr-0 group-hover:mr-2 transition-all duration-200"></span>
                                    Refund Policy
                                </Link>
                            </li>
                            <li>
                                <Link to="/cookie-policy" className="text-gray-400 hover:text-emerald-500 transition-colors duration-200 flex items-center group">
                                    <span className="w-0 group-hover:w-2 h-0.5 bg-emerald-500 mr-0 group-hover:mr-2 transition-all duration-200"></span>
                                    Cookie Policy
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-white font-bold text-lg mb-6 relative inline-block">
                            Get In Touch
                            <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-emerald-500"></span>
                        </h4>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3 text-gray-400">
                                <MapPin className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                                <span className="text-sm">Kathmandu, Nepal</span>
                            </li>
                            <li className="flex items-start gap-3 text-gray-400">
                                <Phone className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                                <a href="tel:+9779800000000" className="text-sm hover:text-emerald-500 transition-colors">
                                    +977-9800000000
                                </a>
                            </li>
                            <li className="flex items-start gap-3 text-gray-400">
                                <Mail className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                                <a href="mailto:support@sewayatra.com" className="text-sm hover:text-emerald-500 transition-colors">
                                    support@sewayatra.com
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-gray-800 py-6">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-sm text-gray-500 text-center md:text-left">
                            &copy; {currentYear} SewaYatra. All rights reserved.
                        </p>
                        <div className="flex items-center gap-6 text-sm text-gray-500">
                            <span>Made with ❤️ in Nepal</span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

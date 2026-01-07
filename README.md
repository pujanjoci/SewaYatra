# 🚌 Sewa Yatra - Bus Booking Platform

A modern, full-featured bus booking platform built with React, Vite, and Tailwind CSS. Sewa Yatra provides a seamless experience for users to search, book, and manage bus tickets, along with a comprehensive admin portal for managing the entire system.

[![Live Demo](https://img.shields.io/badge/demo-live-green.svg)](https://pujanjoci.github.io/SewaYatra/)
[![React](https://img.shields.io/badge/React-19.2.0-blue.svg)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-6.0.0-purple.svg)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0.0-cyan.svg)](https://tailwindcss.com/)

## 🌟 Features

### User Features
- 🔍 **Smart Search**: Search buses by route, date, and preferences
- 🪑 **Interactive Seat Selection**: Visual seat map with real-time availability
- 💳 **Secure Checkout**: Streamlined booking process with passenger details
- 🎫 **Ticket Management**: View and manage your bookings in "My Tickets"
- 👤 **User Authentication**: Secure login and registration system
- 📱 **Responsive Design**: Fully optimized for mobile, tablet, and desktop
- 🌙 **Modern UI**: Clean, professional interface with smooth animations

### Admin Features
- 📊 **Dashboard**: Overview of bookings, revenue, and system statistics
- 🚌 **Bus Management**: Add, edit, and delete bus information
- 🛣️ **Route Management**: Manage routes, schedules, and pricing
- 📋 **Booking Management**: View and manage all customer bookings
- 👥 **User Management**: Manage user accounts and permissions
- 🔐 **Secure Admin Portal**: Protected admin routes with session management

### Additional Pages
- 📖 **About Us**: Learn about Sewa Yatra's mission and values
- 📞 **Contact**: Get in touch with customer support
- 📄 **Privacy Policy**: Data protection and privacy information
- 📜 **Terms of Service**: User agreement and terms
- 💰 **Refund Policy**: Clear refund and cancellation policies
- 🍪 **Cookie Policy**: Cookie usage and preferences

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/pujanjoci/SewaYatra.git
   cd SewaYatra
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   ```
   http://localhost:5173
   ```

## 📜 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint |
| `npm run deploy` | Deploy to GitHub Pages |

## 🏗️ Project Structure

```
SewaYatra/
├── public/              # Static assets
├── src/
│   ├── assets/          # Images, icons, and media files
│   ├── components/      # Reusable UI components
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── BusCard.jsx
│   │   └── ...
│   ├── context/         # React Context providers
│   │   ├── AuthContext.jsx
│   │   ├── BookingContext.jsx
│   │   └── AdminContext.jsx
│   ├── data/            # Mock data and constants
│   │   ├── buses.js
│   │   └── routes.js
│   ├── hooks/           # Custom React hooks
│   ├── pages/           # Page components
│   │   ├── user/        # User-facing pages
│   │   │   ├── Home.jsx
│   │   │   ├── BusList.jsx
│   │   │   ├── SeatSelection.jsx
│   │   │   ├── Checkout.jsx
│   │   │   ├── MyTickets.jsx
│   │   │   └── ...
│   │   └── admin/       # Admin portal pages
│   │       ├── AdminDashboard.jsx
│   │       ├── ManageBuses.jsx
│   │       ├── ManageRoutes.jsx
│   │       └── ...
│   ├── routes/          # Route configuration
│   │   └── AppRoutes.jsx
│   ├── utils/           # Utility functions
│   ├── App.jsx          # Main app component
│   └── main.jsx         # Entry point
├── index.html           # HTML template
├── vite.config.js       # Vite configuration
├── tailwind.config.js   # Tailwind CSS configuration
└── package.json         # Project dependencies
```

## 🎨 Tech Stack

- **Frontend Framework**: React 19.2.0
- **Build Tool**: Vite 6.0.0
- **Styling**: Tailwind CSS 4.0.0
- **Routing**: React Router DOM 7.11.0
- **Icons**: Lucide React
- **State Management**: React Context API
- **Storage**: LocalStorage & SessionStorage

## 🔐 Authentication & Session Management

### User Authentication
- Secure login and registration
- Password visibility toggle
- Session persistence with 30-minute inactivity timeout
- Automatic logout on session expiration
- Protected routes for authenticated users

### Admin Authentication
- Separate admin login portal
- Session-based authentication
- Activity tracking and auto-logout
- Protected admin routes

## 🌐 Deployment

The project is configured for GitHub Pages deployment.

### Deploy to GitHub Pages

```bash
npm run deploy
```

This will:
1. Build the production bundle
2. Deploy to the `gh-pages` branch
3. Make the site live at `https://pujanjoci.github.io/SewaYatra/`

For detailed deployment instructions, see [DEPLOYMENT.md](./DEPLOYMENT.md).

### Local Production Preview

```bash
npm run build
npm run preview
```

Visit: `http://localhost:4173/SewaYatra/`

## 🎯 Key Features Implementation

### Seat Selection
- Visual seat map with color-coded availability
- Real-time seat selection
- Multiple passenger support
- Seat pricing display

### Booking Flow
1. Search buses by route and date
2. Select preferred bus
3. Choose seats from interactive map
4. Enter passenger details
5. Review and confirm booking
6. View ticket in "My Tickets"

### Admin Dashboard
- Real-time statistics
- Manage buses, routes, and bookings
- User management
- Data tables with search, filter, and pagination

## 📱 Responsive Design

The application is fully responsive and optimized for:
- 📱 Mobile devices (320px and up)
- 📱 Tablets (768px and up)
- 💻 Desktops (1024px and up)
- 🖥️ Large screens (1440px and up)

## 🎨 Design Highlights

- Modern, clean UI with green theme
- Smooth animations and transitions
- Interactive hover effects
- Glassmorphism and gradient effects
- Professional typography (Google Fonts)
- Accessible color contrasts
- Intuitive navigation

## 🔧 Configuration

### Vite Configuration
The project uses Vite with React plugin and is configured for GitHub Pages deployment with base path `/SewaYatra/`.

### Tailwind CSS
Tailwind CSS 4.0 is configured with custom theme extensions and utilities.

### ESLint
ESLint is configured with React-specific rules for code quality.

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**Pujan Joci**
- GitHub: [@pujanjoci](https://github.com/pujanjoci)

## 🙏 Acknowledgments

- React team for the amazing framework
- Vite team for the blazing-fast build tool
- Tailwind CSS for the utility-first CSS framework
- Lucide for the beautiful icons

## 📞 Support

For support, please:
- Open an issue on GitHub
- Visit the [Contact page](https://pujanjoci.github.io/SewaYatra/contact)
- Email: support@sewayatra.com

---

<div align="center">
  <p>Made with ❤️ for seamless bus booking experiences</p>
  <p>⭐ Star this repo if you find it helpful!</p>
</div>

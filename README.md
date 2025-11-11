# BioFlow - Biomarker Data Marketplace

BioFlow is a comprehensive health platform that allows users to:
- 📊 Track biomarker data through monthly at-home blood tests
- 💰 Monetize anonymized health data by selling to research institutions
- 🩸 Earn compensation through qualified blood donation
- 🔒 All secured and transparent via Cardano blockchain

## Project Structure

```
bioflow/
├── App.jsx                    # Main routing component
├── BioFlowWebsite.jsx         # B2C marketing landing page
├── BioFlowMarketplace.jsx     # User dashboard & marketplace
├── main.jsx                   # React entry point
├── index.html                 # HTML template
├── index.css                  # Global styles with Tailwind
├── package.json               # Dependencies
├── vite.config.js             # Vite configuration
├── tailwind.config.js         # Tailwind configuration
└── postcss.config.js          # PostCSS configuration
```

## Features

### 🏠 Marketing Website (`/`)
- Hero section with clear value proposition
- How It Works section explaining the 4-step process
- Pricing plans (Starter, Standard, Premium)
- Data monetization details with benefits
- Blood donation program information
- Testimonials from members
- Comprehensive FAQ section
- Responsive navigation with smooth scrolling

### 📱 User Dashboard (`/dashboard`)
- **Dashboard Tab**: Overview of subscription, stats, and earning opportunities
- **My Biomarkers Tab**: View test results and manage data listings
- **Data Marketplace Tab**: Browse and accept offers from research institutions
- **Blood Donation Tab**: View qualification status and schedule donations
- Cardano wallet integration (Preprod Testnet)
- Full mobile responsiveness

## Routes

The app uses React Router with two main routes:

1. **`/`** - Marketing website (BioFlowWebsite component)
   - Landing page for new visitors
   - Information about the platform
   - Call-to-actions to get started

2. **`/dashboard`** - User marketplace (BioFlowMarketplace component)
   - Requires Cardano wallet connection
   - Access to personal health data and earnings
   - Data marketplace and donation opportunities

## Navigation

Both views include navigation buttons:
- **Home button**: Takes you back to the marketing website
- **Dashboard button**: Takes you to the user dashboard
- Located in the top-right corner (fixed position)

## Setup Instructions

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn
- A Cardano wallet extension (Nami, Eternl, Flint, etc.)

### Installation

1. **Install dependencies**:
```bash
npm install
```

2. **Run development server**:
```bash
npm run dev
```

3. **Build for production**:
```bash
npm run build
```

4. **Preview production build**:
```bash
npm run preview
```

## Cardano Wallet Integration

The app is configured for **Cardano Preprod Testnet**. To test:

1. Install a Cardano wallet extension (e.g., Nami, Eternl)
2. Switch your wallet to "Preprod" or "Pre-Production Testnet"
3. Get test ADA from the [Cardano Faucet](https://docs.cardano.org/cardano-testnet/tools/faucet/)
4. Click "Connect Wallet" in the dashboard

### Supported Wallets
- Nami
- Eternl
- Flint
- Typhon
- Gero
- And more via @cardano-foundation/cardano-connect-with-wallet

## Key Technologies

- **React 18** - UI framework
- **React Router 6** - Client-side routing
- **Tailwind CSS** - Styling
- **Vite** - Build tool and dev server
- **Lucide React** - Icon library
- **@cardano-foundation/cardano-connect-with-wallet** - Wallet integration

## Design Features

### Responsive Design
- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
- Hamburger menu for mobile navigation
- Touch-friendly UI elements

### Color Scheme
- **Primary Red**: #dc2626 (red-600) - Main brand color
- **Blue**: For data/marketplace features
- **Green**: For earnings/donation features
- **Gray**: Neutral backgrounds and text

### Interactive Elements
- Smooth scrolling navigation
- Hover effects on cards and buttons
- Collapsible "How It Works" sections
- Accordion FAQ
- Modal dialogs
- Loading states

## Mock Data

The dashboard currently uses mock data for demonstration:
- User subscription details
- Biomarker test results
- Data buyer offers
- Blood donation opportunities

In production, this would be replaced with:
- Real user authentication
- Database queries
- Smart contract interactions on Cardano
- Real-time updates

## Deployment

The app can be deployed to:
- **Vercel** (recommended)
- **Netlify**
- **GitHub Pages**
- Any static hosting service

Example deployment to Vercel:
```bash
npm run build
vercel --prod
```

## Future Enhancements

- [ ] Real Cardano smart contract integration
- [ ] User authentication system
- [ ] Database for storing user data
- [ ] Payment processing with ADA
- [ ] Email notifications
- [ ] Advanced analytics dashboard
- [ ] Mobile app (React Native)
- [ ] Integration with lab partners
- [ ] Real-time biomarker tracking
- [ ] AI-powered health insights

## Environment Variables

For production, create a `.env` file:

```env
VITE_CARDANO_NETWORK=preprod
VITE_API_URL=your-api-url
VITE_BLOCKFROST_PROJECT_ID=your-project-id
```

## Support

For questions or issues:
- Open an issue on GitHub
- Contact: support@bioflow.health (example)

## Contributing

Contributions are welcome! Please:
1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

---

**Note**: This is a demo application. All data is mock data for demonstration purposes. The Cardano integration uses Preprod Testnet for testing.
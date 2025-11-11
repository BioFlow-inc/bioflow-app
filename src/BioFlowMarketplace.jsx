import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Heart, Droplet, Shield, Clock, MapPin, Search, Filter, Wallet, TrendingUp, Activity, X, Package, Database, Building2, Users, DollarSign, TestTube, FileText, ChevronRight, CheckCircle, Home } from 'lucide-react';
import { useCardano, ConnectWalletList } from '@cardano-foundation/cardano-connect-with-wallet';

const BioFlowMarketplace = () => {
  const [selectedTab, setSelectedTab] = useState('dashboard');
  const [selectedOffer, setSelectedOffer] = useState(null);
  const [showWalletModal, setShowWalletModal] = useState(false);
  const [showHowItWorks, setShowHowItWorks] = useState({
    dashboard: true,
    mydata: true,
    marketplace: true,
    donate: true
  });

  const {
    isConnected,
    isEnabled,
    stakeAddress,
    enabledWallet,
    connect,
    disconnect
  } = useCardano({ limitNetwork: 'testnet'});

  const toggleHowItWorks = (section) => {
    setShowHowItWorks(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const handleConnectWallet = () => {
    setShowWalletModal(true);
  };

  const handleDisconnectWallet = () => {
    disconnect();
  };

  const onWalletConnect = () => {
    setShowWalletModal(false);
  };

  const userSubscription = {
    plan: 'Premium',
    status: 'active',
    nextDelivery: '2025-12-01',
    testsCompleted: 8,
    dataListings: 3,
    earnings: '450'
  };

  const myBiomarkers = [
    {
      id: 1,
      date: '2025-11-01',
      status: 'completed',
      biomarkers: ['Vitamin D', 'Iron', 'B12', 'Testosterone', 'Cortisol'],
      listed: true,
      earnings: '150'
    },
    {
      id: 2,
      date: '2025-10-01',
      status: 'completed',
      biomarkers: ['Cholesterol', 'Glucose', 'HbA1c', 'TSH'],
      listed: true,
      earnings: '120'
    },
    {
      id: 3,
      date: '2025-09-01',
      status: 'completed',
      biomarkers: ['Complete Blood Count', 'Liver Panel', 'Kidney Panel'],
      listed: false,
      earnings: '0'
    }
  ];

  const dataBuyerOffers = [
    {
      id: 1,
      buyer: 'Cardiovascular Research Institute',
      type: 'Research Institution',
      lookingFor: ['Cholesterol', 'Blood Pressure', 'Glucose'],
      price: '1,250',
      duration: 'One-time purchase',
      verified: true,
      description: 'Long-term cardiovascular health study'
    },
    {
      id: 2,
      buyer: 'PharmaCorp Analytics',
      type: 'Pharmaceutical Company',
      lookingFor: ['Hormone Panel', 'Thyroid Function', 'Vitamin D'],
      price: '2,800',
      duration: 'Ongoing access (12 months)',
      verified: true,
      description: 'Hormone therapy research program'
    },
    {
      id: 3,
      buyer: 'Metabolic Health Lab',
      type: 'Research Institution',
      lookingFor: ['HbA1c', 'Insulin', 'Glucose', 'Lipid Panel'],
      price: '1,750',
      duration: 'One-time purchase',
      verified: true,
      description: 'Diabetes prevention study'
    },
    {
      id: 4,
      buyer: 'NutriGenomics Inc',
      type: 'Biotech Startup',
      lookingFor: ['Complete Blood Count', 'Vitamin Panel', 'Mineral Panel'],
      price: '950',
      duration: 'One-time purchase',
      verified: false,
      description: 'Personalized nutrition research'
    }
  ];

  const donationOpportunities = [
    {
      id: 1,
      bloodType: 'O-',
      qualified: true,
      payment: '350',
      hospital: 'Berlin Medical Center',
      urgency: 'high',
      nextAvailable: '2025-11-15'
    },
    {
      id: 2,
      bloodType: 'A+',
      qualified: true,
      payment: '200',
      hospital: 'Charité Hospital',
      urgency: 'medium',
      nextAvailable: '2025-11-20'
    }
  ];

  return (
    <div className="min-h-screen w-full bg-gray-50 overflow-x-hidden">
      {/* Header */}
      <header className="border-b border-gray-200 bg-white shadow-sm sticky top-0 z-50 w-full overflow-x-hidden">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-center py-4 gap-4">
            <div className="flex items-center space-x-3">
              <Link to="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
                <div className="bg-gradient-to-br from-red-500 to-red-600 p-2 rounded-xl shadow-lg">
                  <Droplet className="w-8 h-8 text-white" fill="currentColor" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-gray-900">BioFlow</h1>
                  <p className="text-xs text-gray-500">Biomarker Data Marketplace</p>
                </div>
              </Link>
              <Link
                to="/"
                className="ml-4 flex items-center space-x-2 px-3 py-2 rounded-lg text-sm text-gray-600 hover:text-red-600 hover:bg-gray-50 transition-all"
              >
                <Home className="w-4 h-4" />
                <span className="hidden md:inline">Back to Home</span>
              </Link>
            </div>
            
            {!isConnected ? (
              <button
                onClick={handleConnectWallet}
                className="flex items-center space-x-2 px-4 sm:px-6 py-3 rounded-xl font-semibold transition-all text-sm sm:text-base border-2 bg-white text-red-600 hover:bg-red-50 border-red-600 shadow-lg"
              >
                <Wallet className="w-5 h-5 flex-shrink-0" />
                <span className="hidden sm:inline">Connect Wallet</span>
                <span className="sm:hidden">Connect</span>
              </button>
            ) : (
              <div className="flex items-center space-x-2">
                <div className="hidden sm:block text-right mr-2">
                  <p className="text-xs text-gray-500">Connected</p>
                  <p className="text-sm font-mono text-gray-900">
                    {stakeAddress ? `${stakeAddress.slice(0, 8)}...${stakeAddress.slice(-6)}` : 'Loading...'}
                  </p>
                </div>
                <button
                  onClick={handleDisconnectWallet}
                  className="flex items-center space-x-2 px-4 sm:px-6 py-3 rounded-xl font-semibold transition-all text-sm sm:text-base border-2 bg-green-600 text-white hover:bg-green-700 border-green-600 shadow-lg"
                >
                  <Wallet className="w-5 h-5 flex-shrink-0" />
                  <span className="hidden sm:inline">Disconnect</span>
                  <span className="sm:hidden">✓</span>
                </button>
              </div>
            )}
          </div>
        </div>
      </header>

      {/* Navigation Tabs */}
      <div className="bg-white border-b border-gray-200 w-full">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-1 overflow-x-auto">
            <button
              onClick={() => setSelectedTab('dashboard')}
              className={`px-4 sm:px-6 py-3 font-semibold text-sm sm:text-base whitespace-nowrap transition-all ${
                selectedTab === 'dashboard'
                  ? 'text-red-600 border-b-2 border-red-600'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Dashboard
            </button>
            <button
              onClick={() => setSelectedTab('mydata')}
              className={`px-4 sm:px-6 py-3 font-semibold text-sm sm:text-base whitespace-nowrap transition-all ${
                selectedTab === 'mydata'
                  ? 'text-red-600 border-b-2 border-red-600'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              My Biomarkers
            </button>
            <button
              onClick={() => setSelectedTab('marketplace')}
              className={`px-4 sm:px-6 py-3 font-semibold text-sm sm:text-base whitespace-nowrap transition-all ${
                selectedTab === 'marketplace'
                  ? 'text-red-600 border-b-2 border-red-600'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Data Marketplace
            </button>
            <button
              onClick={() => setSelectedTab('donate')}
              className={`px-4 sm:px-6 py-3 font-semibold text-sm sm:text-base whitespace-nowrap transition-all ${
                selectedTab === 'donate'
                  ? 'text-red-600 border-b-2 border-red-600'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Blood Donation
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="w-full px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        
        {/* Dashboard Tab */}
        {selectedTab === 'dashboard' && (
          <div className="space-y-6">
            {/* How It Works - Dashboard */}
            <div className="bg-blue-50 border-2 border-blue-200 rounded-2xl overflow-hidden">
              <button
                onClick={() => toggleHowItWorks('dashboard')}
                className="w-full p-6 flex items-center justify-between hover:bg-blue-100 transition-colors"
              >
                <div className="flex items-center space-x-3">
                  <Shield className="w-6 h-6 text-blue-600 flex-shrink-0" />
                  <h3 className="font-bold text-gray-900 text-lg">How BioFlow Works</h3>
                </div>
                <ChevronRight className={`w-5 h-5 text-blue-600 transition-transform ${showHowItWorks.dashboard ? 'rotate-90' : ''}`} />
              </button>
              {showHowItWorks.dashboard && (
                <div className="px-6 pb-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <div className="flex items-center space-x-2 mb-2">
                        <span className="bg-blue-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold">1</span>
                        <h4 className="font-semibold text-gray-900">Subscribe & Test</h4>
                      </div>
                      <p className="text-sm text-gray-700">Get monthly at-home blood test kits delivered to your door</p>
                    </div>
                    <div>
                      <div className="flex items-center space-x-2 mb-2">
                        <span className="bg-blue-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold">2</span>
                        <h4 className="font-semibold text-gray-900">Track & Monetize</h4>
                      </div>
                      <p className="text-sm text-gray-700">View your results and optionally sell anonymized data to research institutions</p>
                    </div>
                    <div>
                      <div className="flex items-center space-x-2 mb-2">
                        <span className="bg-blue-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold">3</span>
                        <h4 className="font-semibold text-gray-900">Donate & Earn</h4>
                      </div>
                      <p className="text-sm text-gray-700">If qualified, donate blood reserves and receive compensation via blockchain</p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {!isConnected ? (
              <div className="bg-yellow-50 border-2 border-yellow-300 rounded-2xl p-8 text-center">
                <Wallet className="w-16 h-16 text-yellow-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Connect Your Wallet</h3>
                <p className="text-gray-600 mb-6">
                  Please connect your Cardano wallet to access your dashboard, view your stats, and manage your subscriptions.
                </p>
                <button
                  onClick={() => handleConnectWallet()}
                  className="bg-red-600 text-white px-8 py-3 rounded-xl font-semibold hover:bg-red-700 transition-all shadow-lg border-2 border-red-600 inline-flex items-center space-x-2"
                >
                  <Wallet className="w-5 h-5" />
                  <span>Connect Wallet</span>
                </button>
              </div>
            ) : (
              <>

            {/* Stats Overview */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
              <div className="bg-white rounded-xl p-3 sm:p-4 border-2 border-gray-300 shadow-md">
                <div className="flex items-center justify-between mb-2">
                  <Package className="w-6 h-6 sm:w-8 sm:h-8 text-red-600" />
                  <span className="text-xs text-gray-500">Active</span>
                </div>
                <p className="text-gray-500 text-xs sm:text-sm">Subscription</p>
                <p className="text-gray-900 text-lg sm:text-xl font-bold">{userSubscription.plan}</p>
              </div>
              <div className="bg-white rounded-xl p-3 sm:p-4 border-2 border-gray-300 shadow-md">
                <div className="flex items-center justify-between mb-2">
                  <TestTube className="w-6 h-6 sm:w-8 sm:h-8 text-gray-600" />
                </div>
                <p className="text-gray-500 text-xs sm:text-sm">Tests Completed</p>
                <p className="text-gray-900 text-lg sm:text-xl font-bold">{userSubscription.testsCompleted}</p>
              </div>
              <div className="bg-white rounded-xl p-3 sm:p-4 border-2 border-gray-300 shadow-md">
                <div className="flex items-center justify-between mb-2">
                  <Database className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600" />
                </div>
                <p className="text-gray-500 text-xs sm:text-sm">Data Listings</p>
                <p className="text-gray-900 text-lg sm:text-xl font-bold">{userSubscription.dataListings}</p>
              </div>
              <div className="bg-white rounded-xl p-3 sm:p-4 border-2 border-gray-300 shadow-md">
                <div className="flex items-center justify-between mb-2">
                  <DollarSign className="w-6 h-6 sm:w-8 sm:h-8 text-green-600" />
                </div>
                <p className="text-gray-500 text-xs sm:text-sm">Total Earnings</p>
                <p className="text-gray-900 text-lg sm:text-xl font-bold">{userSubscription.earnings} ₳</p>
              </div>
            </div>

            {/* Value Propositions */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* VP 1: Subscription */}
              <div className="bg-white rounded-2xl p-6 border-2 border-gray-300 shadow-md">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="bg-red-100 p-3 rounded-xl">
                    <Package className="w-6 h-6 text-red-600" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">Monthly Testing</h3>
                </div>
                <p className="text-gray-600 text-sm mb-4">
                  Receive monthly at-home blood testing devices. Track your biomarkers over time.
                </p>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center space-x-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span className="text-gray-700">Next delivery: {userSubscription.nextDelivery}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span className="text-gray-700">Lab results in 3-5 days</span>
                  </div>
                </div>
                <button className="w-full bg-red-600 text-white py-3 rounded-xl font-semibold hover:bg-red-700 transition-all shadow-lg border-2 border-red-600">
                  Manage Subscription
                </button>
              </div>

              {/* VP 2: Sell Data */}
              <div className="bg-white rounded-2xl p-6 border-2 border-gray-300 shadow-md">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="bg-blue-100 p-3 rounded-xl">
                    <Database className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">Monetize Your Data</h3>
                </div>
                <p className="text-gray-600 text-sm mb-4">
                  Sell your anonymized biomarker data to research institutions and pharma companies.
                </p>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center space-x-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span className="text-gray-700">You control your data</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span className="text-gray-700">Earn 500-3,000 ₳ per dataset</span>
                  </div>
                </div>
                <button 
                  onClick={() => setSelectedTab('marketplace')}
                  className="w-full bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition-all shadow-lg border-2 border-blue-600"
                >
                  Browse Offers
                </button>
              </div>

              {/* VP 3: Blood Donation */}
              <div className="bg-white rounded-2xl p-6 border-2 border-gray-300 shadow-md">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="bg-green-100 p-3 rounded-xl">
                    <Droplet className="w-6 h-6 text-green-600" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">Blood Donation</h3>
                </div>
                <p className="text-gray-600 text-sm mb-4">
                  If qualified, donate blood reserves and earn compensation from clinical institutions.
                </p>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center space-x-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span className="text-gray-700">Qualification based on tests</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span className="text-gray-700">Earn 150-550 ₳ per donation</span>
                  </div>
                </div>
                <button 
                  onClick={() => setSelectedTab('donate')}
                  className="w-full bg-green-600 text-white py-3 rounded-xl font-semibold hover:bg-green-700 transition-all shadow-lg border-2 border-green-600"
                >
                  View Opportunities
                </button>
              </div>
            </div>
            </>
            )}
          </div>
        )}

        {/* My Biomarkers Tab */}
        {selectedTab === 'mydata' && (
          <div className="space-y-6">
            {/* How It Works - My Biomarkers */}
            <div className="bg-red-50 border-2 border-red-200 rounded-2xl overflow-hidden">
              <button
                onClick={() => toggleHowItWorks('mydata')}
                className="w-full p-6 flex items-center justify-between hover:bg-red-100 transition-colors"
              >
                <div className="flex items-center space-x-3">
                  <TestTube className="w-6 h-6 text-red-600 flex-shrink-0" />
                  <h3 className="font-bold text-gray-900 text-lg">How Testing Works</h3>
                </div>
                <ChevronRight className={`w-5 h-5 text-red-600 transition-transform ${showHowItWorks.mydata ? 'rotate-90' : ''}`} />
              </button>
              {showHowItWorks.mydata && (
                <div className="px-6 pb-6">
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <div>
                      <div className="flex items-center space-x-2 mb-2">
                        <span className="bg-red-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold">1</span>
                        <h4 className="font-semibold text-gray-900">Receive Kit</h4>
                      </div>
                      <p className="text-sm text-gray-700">Monthly delivery of at-home blood collection device</p>
                    </div>
                    <div>
                      <div className="flex items-center space-x-2 mb-2">
                        <span className="bg-red-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold">2</span>
                        <h4 className="font-semibold text-gray-900">Collect Sample</h4>
                      </div>
                      <p className="text-sm text-gray-700">Quick & painless self-collection at home</p>
                    </div>
                    <div>
                      <div className="flex items-center space-x-2 mb-2">
                        <span className="bg-red-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold">3</span>
                        <h4 className="font-semibold text-gray-900">Lab Analysis</h4>
                      </div>
                      <p className="text-sm text-gray-700">Results available in 3-5 days on your dashboard</p>
                    </div>
                    <div>
                      <div className="flex items-center space-x-2 mb-2">
                        <span className="bg-red-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold">4</span>
                        <h4 className="font-semibold text-gray-900">Your Choice</h4>
                      </div>
                      <p className="text-sm text-gray-700">Keep private or list on marketplace to earn</p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {!isConnected ? (
              <div className="bg-yellow-50 border-2 border-yellow-300 rounded-2xl p-8 text-center">
                <Wallet className="w-16 h-16 text-yellow-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Connect Your Wallet</h3>
                <p className="text-gray-600 mb-6">
                  Please connect your Cardano wallet to view your biomarker test results and manage your data.
                </p>
                <button
                  onClick={() => handleConnectWallet()}
                  className="bg-red-600 text-white px-8 py-3 rounded-xl font-semibold hover:bg-red-700 transition-all shadow-lg border-2 border-red-600 inline-flex items-center space-x-2"
                >
                  <Wallet className="w-5 h-5" />
                  <span>Connect Wallet</span>
                </button>
              </div>
            ) : (
              <>

            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold text-gray-900">My Test Results</h2>
              <button className="bg-red-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-red-700 transition-all shadow-lg border-2 border-red-600">
                Request New Test Kit
              </button>
            </div>

            <div className="grid grid-cols-1 gap-4">
              {myBiomarkers.map((test) => (
                <div key={test.id} className="bg-white rounded-2xl p-6 border-2 border-gray-300 shadow-md">
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-3">
                        <TestTube className="w-6 h-6 text-red-600" />
                        <h3 className="text-lg font-bold text-gray-900">Test Date: {test.date}</h3>
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          test.status === 'completed' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'
                        }`}>
                          {test.status}
                        </span>
                      </div>
                      <div className="flex flex-wrap gap-2 mb-3">
                        {test.biomarkers.map((marker, idx) => (
                          <span key={idx} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-lg text-sm">
                            {marker}
                          </span>
                        ))}
                      </div>
                      <div className="flex items-center space-x-4 text-sm">
                        {test.listed ? (
                          <>
                            <span className="text-green-600 font-semibold flex items-center">
                              <Database className="w-4 h-4 mr-1" />
                              Listed on marketplace
                            </span>
                            <span className="text-gray-600">Earned: {test.earnings} ₳</span>
                          </>
                        ) : (
                          <span className="text-gray-500">Not listed</span>
                        )}
                      </div>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-2">
                      <button className="px-4 py-2 bg-white text-gray-900 rounded-xl font-semibold hover:bg-gray-50 transition-all border-2 border-gray-400">
                        View Results
                      </button>
                      {!test.listed && (
                        <button className="px-4 py-2 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-all shadow-lg border-2 border-blue-600">
                          List on Marketplace
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            </>
            )}
          </div>
        )}

        {/* Data Marketplace Tab */}
        {selectedTab === 'marketplace' && (
          <div className="space-y-6">
            {/* How It Works - Data Marketplace */}
            <div className="bg-blue-50 border-2 border-blue-200 rounded-2xl overflow-hidden">
              <button
                onClick={() => toggleHowItWorks('marketplace')}
                className="w-full p-6 flex items-center justify-between hover:bg-blue-100 transition-colors"
              >
                <div className="flex items-center space-x-3">
                  <Database className="w-6 h-6 text-blue-600 flex-shrink-0" />
                  <h3 className="font-bold text-gray-900 text-lg">How Data Monetization Works</h3>
                </div>
                <ChevronRight className={`w-5 h-5 text-blue-600 transition-transform ${showHowItWorks.marketplace ? 'rotate-90' : ''}`} />
              </button>
              {showHowItWorks.marketplace && (
                <div className="px-6 pb-6">
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <div>
                      <div className="flex items-center space-x-2 mb-2">
                        <span className="bg-blue-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold">1</span>
                        <h4 className="font-semibold text-gray-900">Browse Offers</h4>
                      </div>
                      <p className="text-sm text-gray-700">Review verified buyers and their research needs</p>
                    </div>
                    <div>
                      <div className="flex items-center space-x-2 mb-2">
                        <span className="bg-blue-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold">2</span>
                        <h4 className="font-semibold text-gray-900">Choose Buyers</h4>
                      </div>
                      <p className="text-sm text-gray-700">Select which institutions can access your anonymized data</p>
                    </div>
                    <div>
                      <div className="flex items-center space-x-2 mb-2">
                        <span className="bg-blue-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold">3</span>
                        <h4 className="font-semibold text-gray-900">Smart Contract</h4>
                      </div>
                      <p className="text-sm text-gray-700">Transaction recorded on Cardano blockchain</p>
                    </div>
                    <div>
                      <div className="flex items-center space-x-2 mb-2">
                        <span className="bg-blue-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold">4</span>
                        <h4 className="font-semibold text-gray-900">Get Paid</h4>
                      </div>
                      <p className="text-sm text-gray-700">Receive 500-3,000 ₳ directly to your wallet</p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {!isConnected ? (
              <div className="bg-yellow-50 border-2 border-yellow-300 rounded-2xl p-8 text-center">
                <Wallet className="w-16 h-16 text-yellow-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Connect Your Wallet</h3>
                <p className="text-gray-600 mb-6">
                  Please connect your Cardano wallet to browse data marketplace offers and monetize your biomarker data.
                </p>
                <button
                  onClick={() => handleConnectWallet()}
                  className="bg-red-600 text-white px-8 py-3 rounded-xl font-semibold hover:bg-red-700 transition-all shadow-lg border-2 border-red-600 inline-flex items-center space-x-2"
                >
                  <Wallet className="w-5 h-5" />
                  <span>Connect Wallet</span>
                </button>
              </div>
            ) : (
              <>

            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div>
                <h2 className="text-2xl font-bold text-gray-900">Data Marketplace</h2>
                <p className="text-gray-600 text-sm">Sell your anonymized biomarker data to verified buyers</p>
              </div>
              <div className="flex items-center space-x-2">
                <Shield className="w-5 h-5 text-green-600" />
                <span className="text-sm text-gray-600">Your data is anonymized & encrypted</span>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {dataBuyerOffers.map((offer) => (
                <div
                  key={offer.id}
                  className="bg-white rounded-2xl p-6 border-2 border-gray-300 shadow-md hover:border-blue-500 transition-all cursor-pointer"
                  onClick={() => setSelectedOffer(offer)}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="bg-blue-100 p-3 rounded-xl">
                        {offer.type === 'Pharmaceutical Company' ? (
                          <Building2 className="w-6 h-6 text-blue-600" />
                        ) : (
                          <Users className="w-6 h-6 text-blue-600" />
                        )}
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-gray-900">{offer.buyer}</h3>
                        <p className="text-sm text-gray-500">{offer.type}</p>
                      </div>
                    </div>
                    {offer.verified && (
                      <div className="flex items-center space-x-1 bg-green-100 px-2 py-1 rounded-lg">
                        <Shield className="w-4 h-4 text-green-600" />
                        <span className="text-xs text-green-700 font-semibold">Verified</span>
                      </div>
                    )}
                  </div>

                  <p className="text-gray-600 text-sm mb-4">{offer.description}</p>

                  <div className="space-y-2 mb-4">
                    <p className="text-sm text-gray-500">Looking for biomarkers:</p>
                    <div className="flex flex-wrap gap-2">
                      {offer.lookingFor.map((marker, idx) => (
                        <span key={idx} className="px-3 py-1 bg-blue-50 text-blue-700 rounded-lg text-sm font-medium">
                          {marker}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t-2 border-gray-200">
                    <div>
                      <p className="text-xs text-gray-500">Offering</p>
                      <p className="text-2xl font-bold text-gray-900">{offer.price} ₳</p>
                      <p className="text-xs text-gray-500">{offer.duration}</p>
                    </div>
                    <button className="bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition-all shadow-lg border-2 border-blue-600 flex items-center space-x-2">
                      <span>View Offer</span>
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
            </>
            )}
          </div>
        )}

        {/* Blood Donation Tab */}
        {selectedTab === 'donate' && (
          <div className="space-y-6">
            {/* How It Works - Blood Donation */}
            <div className="bg-green-50 border-2 border-green-200 rounded-2xl overflow-hidden">
              <button
                onClick={() => toggleHowItWorks('donate')}
                className="w-full p-6 flex items-center justify-between hover:bg-green-100 transition-colors"
              >
                <div className="flex items-center space-x-3">
                  <Droplet className="w-6 h-6 text-green-600 flex-shrink-0" />
                  <h3 className="font-bold text-gray-900 text-lg">How Blood Donation Works</h3>
                </div>
                <ChevronRight className={`w-5 h-5 text-green-600 transition-transform ${showHowItWorks.donate ? 'rotate-90' : ''}`} />
              </button>
              {showHowItWorks.donate && (
                <div className="px-6 pb-6">
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <div>
                      <div className="flex items-center space-x-2 mb-2">
                        <span className="bg-green-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold">1</span>
                        <h4 className="font-semibold text-gray-900">Qualification</h4>
                      </div>
                      <p className="text-sm text-gray-700">Your test results determine eligibility automatically</p>
                    </div>
                    <div>
                      <div className="flex items-center space-x-2 mb-2">
                        <span className="bg-green-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold">2</span>
                        <h4 className="font-semibold text-gray-900">Schedule</h4>
                      </div>
                      <p className="text-sm text-gray-700">Book appointment at verified clinical institutions</p>
                    </div>
                    <div>
                      <div className="flex items-center space-x-2 mb-2">
                        <span className="bg-green-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold">3</span>
                        <h4 className="font-semibold text-gray-900">Donate</h4>
                      </div>
                      <p className="text-sm text-gray-700">Safe, professional blood collection process</p>
                    </div>
                    <div>
                      <div className="flex items-center space-x-2 mb-2">
                        <span className="bg-green-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold">4</span>
                        <h4 className="font-semibold text-gray-900">Compensation</h4>
                      </div>
                      <p className="text-sm text-gray-700">Receive 150-550 ₳ via blockchain transaction</p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {!isConnected ? (
              <div className="bg-yellow-50 border-2 border-yellow-300 rounded-2xl p-8 text-center">
                <Wallet className="w-16 h-16 text-yellow-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Connect Your Wallet</h3>
                <p className="text-gray-600 mb-6">
                  Please connect your Cardano wallet to view blood donation opportunities and schedule appointments.
                </p>
                <button
                  onClick={() => handleConnectWallet()}
                  className="bg-red-600 text-white px-8 py-3 rounded-xl font-semibold hover:bg-red-700 transition-all shadow-lg border-2 border-red-600 inline-flex items-center space-x-2"
                >
                  <Wallet className="w-5 h-5" />
                  <span>Connect Wallet</span>
                </button>
              </div>
            ) : (
              <>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Blood Donation Opportunities</h2>
              <p className="text-gray-600 text-sm">Based on your test results, you qualify for the following donation opportunities</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {donationOpportunities.map((opp) => (
                <div key={opp.id} className="bg-white rounded-2xl p-6 border-2 border-gray-300 shadow-md">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="bg-red-100 p-3 rounded-xl">
                        <Droplet className="w-8 h-8 text-red-600" fill="currentColor" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900">{opp.bloodType}</h3>
                        <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mt-1 ${
                          opp.urgency === 'high' ? 'bg-red-100 text-red-700' : 'bg-yellow-100 text-yellow-700'
                        }`}>
                          {opp.urgency === 'high' ? 'High Demand' : 'Medium Demand'}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3 mb-4">
                    <div className="flex items-center space-x-2">
                      <MapPin className="w-4 h-4 text-gray-400" />
                      <span className="text-gray-700">{opp.hospital}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4 text-gray-400" />
                      <span className="text-gray-700">Next available: {opp.nextAvailable}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t-2 border-gray-200">
                    <div>
                      <p className="text-xs text-gray-500">Compensation</p>
                      <p className="text-2xl font-bold text-green-600">{opp.payment} ₳</p>
                    </div>
                    <button className="bg-green-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-green-700 transition-all shadow-lg border-2 border-green-600">
                      Schedule Donation
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-blue-50 border-2 border-blue-200 rounded-2xl p-6">
              <div className="flex items-start space-x-3">
                <Shield className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">How it works</h4>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>• Your blood test results determine eligibility for donation</li>
                    <li>• Clinical institutions purchase blood reserves through BioFlow</li>
                    <li>• You receive compensation directly to your wallet</li>
                    <li>• All transactions are recorded on Cardano blockchain</li>
                  </ul>
                </div>
              </div>
            </div>
            </>
            )}
          </div>
        )}
      </div>

      {/* Wallet Selection Modal */}
      {showWalletModal && (
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setShowWalletModal(false)}
        >
          <div 
            className="bg-white rounded-2xl border-2 border-gray-300 max-w-md w-full p-6 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-gray-900">Connect Wallet</h3>
              <button
                onClick={() => setShowWalletModal(false)}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <p className="text-gray-600 text-sm mb-6">
              Choose a Cardano wallet to connect to BioFlow. Make sure you have a wallet extension installed in your browser and switched to <strong className="text-red-600">Preprod Testnet</strong>.
            </p>

            <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-4 mb-6">
              <div className="flex items-start space-x-2">
                <Shield className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-semibold text-gray-900 mb-1">Using Preprod Testnet</p>
                  <p className="text-xs text-gray-700">
                    BioFlow runs on Cardano Preprod Testnet. Switch your wallet to "Preprod" or "Pre-Production Testnet" before connecting. Need test ADA? Visit the <a href="https://docs.cardano.org/cardano-testnet/tools/faucet/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 font-semibold underline">Cardano Faucet</a>.
                  </p>
                </div>
              </div>
            </div>

            <ConnectWalletList
              limitNetwork='testnet'
              borderRadius={12}
              gap={12}
              primaryColor="#dc2626"
              onConnect={onWalletConnect}
              customCSS={`
                font-family: system-ui, -apple-system, sans-serif;
                font-size: 0.875rem;
                font-weight: 600;
                
                & > span {
                  padding: 12px 16px;
                  border: 2px solid #e5e7eb;
                  transition: all 0.2s;
                }
                
                & > span:hover {
                  border-color: #dc2626;
                  background-color: #fef2f2;
                }
              `}
            />

            <div className="mt-6 pt-6 border-t-2 border-gray-200">
              <p className="text-xs text-gray-500 text-center">
                Don't have a Cardano wallet?{' '}
                <a 
                  href="https://www.cardano.org/what-is-ada/#wallets" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-red-600 hover:text-red-700 font-semibold"
                >
                  Get one here
                </a>
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BioFlowMarketplace;

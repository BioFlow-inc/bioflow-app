import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Heart, Droplet, Shield, Clock, MapPin, Search, Filter, Wallet, TrendingUp, Activity, X, Package, Database, Building2, Users, DollarSign, TestTube, FileText, ChevronRight, CheckCircle, Menu, ChevronDown, ArrowRight, Star, Zap, Lock, Globe, Mail, Phone, MessageCircle, LayoutDashboard } from 'lucide-react';

const BioFlowWebsite = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState('standard');
  const [activeAccordion, setActiveAccordion] = useState(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  const toggleAccordion = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  const pricingPlans = [
    {
      id: 'starter',
      name: 'Starter',
      price: '49',
      period: 'month',
      description: 'Perfect for getting started with health tracking',
      features: [
        'Monthly at-home blood test kit',
        'Basic biomarker panel (8 markers)',
        'Digital health dashboard',
        'Results in 3-5 days',
        'Health insights & trends',
        'Email support'
      ],
      badge: null,
      ctaText: 'Start Tracking',
      popular: false
    },
    {
      id: 'standard',
      name: 'Standard',
      price: '89',
      period: 'month',
      description: 'Most popular plan for comprehensive health monitoring',
      features: [
        'Monthly at-home blood test kit',
        'Comprehensive panel (25+ markers)',
        'Digital health dashboard',
        'Priority lab processing (2-3 days)',
        'Advanced health insights',
        'Data monetization enabled',
        'Priority email & chat support',
        'Quarterly health report'
      ],
      badge: 'Most Popular',
      ctaText: 'Get Started',
      popular: true
    },
    {
      id: 'premium',
      name: 'Premium',
      price: '149',
      period: 'month',
      description: 'Complete health optimization with all benefits',
      features: [
        'Bi-weekly at-home blood test kits',
        'Complete biomarker panel (40+ markers)',
        'Digital health dashboard',
        'Express processing (24-48 hours)',
        'AI-powered health insights',
        'Data monetization enabled',
        'Blood donation opportunities',
        'Dedicated health advisor',
        '24/7 priority support',
        'Monthly health optimization call'
      ],
      badge: 'Best Value',
      ctaText: 'Optimize Health',
      popular: false
    }
  ];

  const howItWorksSteps = [
    {
      icon: Package,
      title: 'Subscribe & Receive',
      description: 'Choose your plan and get your first at-home blood test kit delivered within 3 business days. Everything you need is included.',
      color: 'red'
    },
    {
      icon: TestTube,
      title: 'Collect & Send',
      description: 'Quick, painless self-collection at home takes just 5 minutes. Send your sample back in the prepaid envelope included.',
      color: 'blue'
    },
    {
      icon: Activity,
      title: 'Track & Learn',
      description: 'View your results in 2-5 days on your personal dashboard. Get AI-powered insights into your health trends over time.',
      color: 'green'
    },
    {
      icon: DollarSign,
      title: 'Monetize & Earn',
      description: 'Optionally sell your anonymized data to verified research institutions and earn 500-3,000 ₳ per dataset.',
      color: 'purple'
    }
  ];

  const dataMonetizationBenefits = [
    {
      icon: Shield,
      title: 'Complete Privacy',
      description: 'Your data is fully anonymized and encrypted before being shared. You control what gets shared and with whom.',
      color: 'blue'
    },
    {
      icon: Building2,
      title: 'Verified Buyers',
      description: 'All data buyers are vetted research institutions, pharmaceutical companies, and healthcare organizations.',
      color: 'indigo'
    },
    {
      icon: DollarSign,
      title: 'Fair Compensation',
      description: 'Earn 500-3,000 ₳ per dataset depending on the biomarkers and research requirements. Payments via blockchain.',
      color: 'green'
    },
    {
      icon: Database,
      title: 'Transparent Marketplace',
      description: 'Browse all available offers, see exactly what buyers are looking for, and choose who can access your data.',
      color: 'purple'
    }
  ];

  const bloodDonationBenefits = [
    {
      icon: Heart,
      title: 'Save Lives & Earn',
      description: 'Qualified donors can contribute to critical blood reserves while receiving fair compensation (150-550 ₳).',
      color: 'red'
    },
    {
      icon: TestTube,
      title: 'Automatic Qualification',
      description: 'Your monthly blood tests automatically determine donation eligibility. No separate screening needed.',
      color: 'blue'
    },
    {
      icon: MapPin,
      title: 'Convenient Locations',
      description: 'Schedule appointments at verified clinical institutions near you. Flexible scheduling to fit your life.',
      color: 'green'
    },
    {
      icon: Wallet,
      title: 'Instant Payment',
      description: 'Receive compensation directly to your Cardano wallet immediately after donation completion.',
      color: 'purple'
    }
  ];

  const faqs = [
    {
      question: 'How does the at-home blood testing work?',
      answer: 'We send you a simple, painless collection device each month. You collect a small blood sample at home (takes about 5 minutes), place it in the prepaid return envelope, and drop it in any mailbox. Our partner labs analyze your sample and upload results to your dashboard within 2-5 days.'
    },
    {
      question: 'Is my health data really private and secure?',
      answer: 'Absolutely. Your personal health data is stored with bank-level encryption. When you choose to monetize your data, it is completely anonymized and stripped of all identifying information before being shared with verified buyers. You maintain full control over what gets shared and with whom.'
    },
    {
      question: 'How much can I earn from selling my data?',
      answer: 'Earnings vary based on the biomarkers in your dataset and the research institution\'s needs. Typically, datasets earn between 500-3,000 ₳ (Cardano ADA). One-time purchases provide immediate payment, while ongoing access agreements can provide recurring income over 6-12 months.'
    },
    {
      question: 'What biomarkers do you test for?',
      answer: 'Our Starter plan includes 8 essential markers (vitamins, cholesterol, glucose, etc.). Standard includes 25+ markers (hormones, thyroid, metabolic panel, etc.). Premium includes 40+ comprehensive markers covering all major health systems. All results include reference ranges and trend analysis.'
    },
    {
      question: 'How does blood donation through BioFlow work?',
      answer: 'Based on your monthly test results, our system automatically determines if you qualify for blood donation opportunities. If qualified, you\'ll see available appointments at verified clinical institutions near you. After donating, you receive instant compensation (150-550 ₳) directly to your Cardano wallet.'
    },
    {
      question: 'Can I cancel my subscription anytime?',
      answer: 'Yes, you can cancel anytime with no penalties. If you cancel, you\'ll continue to have access to your health dashboard and historical data. You can also pause your subscription for up to 3 months if you need a temporary break.'
    },
    {
      question: 'What is Cardano and why do I need a wallet?',
      answer: 'Cardano is a blockchain platform that enables secure, transparent transactions. When you monetize your data or donate blood, payments are sent directly to your Cardano wallet. It\'s secure, instant, and gives you full control. We\'ll guide you through setting up a free wallet when you sign up.'
    },
    {
      question: 'Who buys biomarker data and why?',
      answer: 'Verified research institutions, pharmaceutical companies, and healthcare organizations purchase anonymized data to advance medical research, develop new treatments, and study population health trends. All buyers undergo strict verification and must comply with data protection regulations.'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah M.',
      role: 'Premium Member',
      avatar: '👩‍⚕️',
      quote: 'BioFlow has transformed how I think about my health. I\'ve earned over 4,500 ₳ from data monetization while getting incredible insights into my biomarkers. The monthly testing keeps me accountable.',
      rating: 5
    },
    {
      name: 'James K.',
      role: 'Standard Member',
      avatar: '👨‍💼',
      quote: 'As someone who travels frequently, the at-home testing is a game-changer. I love that I can contribute to medical research and get compensated. It feels good to help advance science.',
      rating: 5
    },
    {
      name: 'Maria L.',
      role: 'Premium Member',
      avatar: '👩‍🔬',
      quote: 'The blood donation feature is brilliant. I was already donating regularly, but now I get fair compensation and it\'s all tracked through my health dashboard. Plus the payment is instant!',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen w-full bg-white overflow-x-hidden">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-lg shadow-md' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 sm:h-20">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="bg-gradient-to-br from-red-500 to-red-600 p-2 rounded-xl shadow-lg">
                <Droplet className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="currentColor" />
              </div>
              <div>
                <h1 className="text-xl sm:text-2xl font-bold text-gray-900">BioFlow</h1>
                <p className="text-xs text-gray-500 hidden sm:block">Your Health, Your Data, Your Choice</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              <button onClick={() => scrollToSection('how-it-works')} className="text-gray-700 hover:text-red-600 font-medium transition-colors">
                How It Works
              </button>
              <button onClick={() => scrollToSection('pricing')} className="text-gray-700 hover:text-red-600 font-medium transition-colors">
                Pricing
              </button>
              <button onClick={() => scrollToSection('monetize')} className="text-gray-700 hover:text-red-600 font-medium transition-colors">
                Monetize Data
              </button>
              <button onClick={() => scrollToSection('donate')} className="text-gray-700 hover:text-red-600 font-medium transition-colors">
                Blood Donation
              </button>
              <button onClick={() => scrollToSection('faq')} className="text-gray-700 hover:text-red-600 font-medium transition-colors">
                FAQ
              </button>
              <Link to="/dashboard" className="flex items-center space-x-2 text-gray-700 hover:text-red-600 font-medium transition-colors">
                <LayoutDashboard className="w-4 h-4" />
                <span>Dashboard</span>
              </Link>
              <button 
                onClick={() => scrollToSection('pricing')}
                className="bg-red-600 text-white px-6 py-2.5 rounded-xl font-semibold hover:bg-red-700 transition-all shadow-lg"
              >
                Get Started
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-gray-900" />
              ) : (
                <Menu className="w-6 h-6 text-gray-900" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-200 shadow-lg">
            <div className="px-4 py-4 space-y-3">
              <button onClick={() => scrollToSection('how-it-works')} className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg font-medium">
                How It Works
              </button>
              <button onClick={() => scrollToSection('pricing')} className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg font-medium">
                Pricing
              </button>
              <button onClick={() => scrollToSection('monetize')} className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg font-medium">
                Monetize Data
              </button>
              <button onClick={() => scrollToSection('donate')} className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg font-medium">
                Blood Donation
              </button>
              <button onClick={() => scrollToSection('faq')} className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg font-medium">
                FAQ
              </button>
              <Link to="/dashboard" className="flex items-center space-x-2 w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg font-medium">
                <LayoutDashboard className="w-4 h-4" />
                <span>Dashboard</span>
              </Link>
              <button 
                onClick={() => scrollToSection('pricing')}
                className="w-full bg-red-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-red-700 transition-all shadow-lg"
              >
                Get Started
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-24 sm:pt-32 pb-16 sm:pb-24 bg-gradient-to-br from-red-50 via-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column */}
            <div className="space-y-8">
              <div className="inline-flex items-center space-x-2 bg-red-100 text-red-700 px-4 py-2 rounded-full text-sm font-semibold">
                <Zap className="w-4 h-4" />
                <span>Join 50,000+ members taking control of their health</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Track Your Health.
                <span className="block text-red-600">Monetize Your Data.</span>
              </h1>
              
              <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
                Monthly at-home blood testing with the option to sell your anonymized biomarker data to research institutions. Get paid for helping advance medical science.
              </p>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0" />
                  <span className="text-gray-700">At-home blood tests delivered monthly</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0" />
                  <span className="text-gray-700">Earn 500-3,000 ₳ by monetizing your data</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0" />
                  <span className="text-gray-700">Qualified blood donation with instant compensation</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0" />
                  <span className="text-gray-700">Complete privacy & blockchain security</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => scrollToSection('pricing')}
                  className="bg-red-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-red-700 transition-all shadow-lg text-lg flex items-center justify-center space-x-2"
                >
                  <span>Start Tracking</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
                <button 
                  onClick={() => scrollToSection('how-it-works')}
                  className="bg-white text-gray-900 px-8 py-4 rounded-xl font-semibold hover:bg-gray-50 transition-all shadow-lg text-lg border-2 border-gray-300"
                >
                  How It Works
                </button>
              </div>

              <div className="flex items-center space-x-8 pt-4">
                <div>
                  <div className="text-3xl font-bold text-gray-900">50k+</div>
                  <div className="text-sm text-gray-600">Active Members</div>
                </div>
                <div className="h-12 w-px bg-gray-300"></div>
                <div>
                  <div className="text-3xl font-bold text-gray-900">2M+</div>
                  <div className="text-sm text-gray-600">Tests Completed</div>
                </div>
                <div className="h-12 w-px bg-gray-300"></div>
                <div>
                  <div className="text-3xl font-bold text-gray-900">$8M+</div>
                  <div className="text-sm text-gray-600">Earned by Members</div>
                </div>
              </div>
            </div>

            {/* Right Column - Visual */}
            <div className="relative hidden lg:block">
              <div className="relative bg-white rounded-3xl shadow-2xl p-8 border-2 border-gray-200">
                {/* Mock Dashboard Preview */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                        <Activity className="w-6 h-6 text-red-600" />
                      </div>
                      <div>
                        <div className="text-sm text-gray-500">Latest Results</div>
                        <div className="font-bold text-gray-900">November 2025</div>
                      </div>
                    </div>
                    <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-semibold">
                      All Normal
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-blue-50 rounded-xl p-4">
                      <div className="text-sm text-gray-600 mb-1">Vitamin D</div>
                      <div className="text-2xl font-bold text-gray-900">45 ng/mL</div>
                      <div className="text-xs text-green-600 mt-1">↑ Optimal</div>
                    </div>
                    <div className="bg-green-50 rounded-xl p-4">
                      <div className="text-sm text-gray-600 mb-1">Iron</div>
                      <div className="text-2xl font-bold text-gray-900">89 μg/dL</div>
                      <div className="text-xs text-green-600 mt-1">↑ Healthy</div>
                    </div>
                    <div className="bg-purple-50 rounded-xl p-4">
                      <div className="text-sm text-gray-600 mb-1">Cholesterol</div>
                      <div className="text-2xl font-bold text-gray-900">185 mg/dL</div>
                      <div className="text-xs text-green-600 mt-1">Normal</div>
                    </div>
                    <div className="bg-red-50 rounded-xl p-4">
                      <div className="text-sm text-gray-600 mb-1">Glucose</div>
                      <div className="text-2xl font-bold text-gray-900">92 mg/dL</div>
                      <div className="text-xs text-green-600 mt-1">Perfect</div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-red-500 to-red-600 rounded-xl p-4 text-white">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-sm opacity-90">Available Earnings</div>
                        <div className="text-3xl font-bold">1,850 ₳</div>
                      </div>
                      <DollarSign className="w-12 h-12 opacity-50" />
                    </div>
                    <button className="mt-3 w-full bg-white text-red-600 py-2 rounded-lg font-semibold text-sm hover:bg-red-50 transition-colors">
                      View Offers
                    </button>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-6 -right-6 bg-green-500 text-white px-4 py-2 rounded-xl shadow-lg font-bold text-sm animate-bounce">
                💰 Earn up to 3,000 ₳
              </div>
              <div className="absolute -bottom-6 -left-6 bg-blue-500 text-white px-4 py-2 rounded-xl shadow-lg font-bold text-sm">
                🔒 100% Private & Secure
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              How BioFlow Works
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Four simple steps to take control of your health and start earning from your biomarker data
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {howItWorksSteps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-white rounded-2xl p-6 border-2 border-gray-200 shadow-lg hover:shadow-xl transition-all h-full">
                  <div className={`bg-${step.color}-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-4`}>
                    <step.icon className={`w-8 h-8 text-${step.color}-600`} />
                  </div>
                  <div className={`absolute -top-3 -right-3 w-10 h-10 bg-${step.color}-600 text-white rounded-full flex items-center justify-center font-bold text-lg shadow-lg`}>
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
                {index < howItWorksSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRight className="w-8 h-8 text-gray-300" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-16 sm:py-24 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Choose Your Plan
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              All plans include monthly at-home blood testing. Higher tiers unlock more biomarkers and earning opportunities.
            </p>
            <div className="inline-flex items-center space-x-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold">
              <CheckCircle className="w-4 h-4" />
              <span>Cancel anytime • No hidden fees • 30-day money-back guarantee</span>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan) => (
              <div
                key={plan.id}
                className={`relative bg-white rounded-2xl shadow-xl transition-all hover:shadow-2xl ${
                  plan.popular ? 'border-4 border-red-500 transform lg:scale-105' : 'border-2 border-gray-200'
                }`}
              >
                {plan.badge && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-red-600 text-white px-4 py-1.5 rounded-full text-sm font-bold shadow-lg">
                      {plan.badge}
                    </span>
                  </div>
                )}

                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <p className="text-gray-600 text-sm mb-6 min-h-[40px]">{plan.description}</p>

                  <div className="mb-6">
                    <div className="flex items-baseline">
                      <span className="text-5xl font-bold text-gray-900">${plan.price}</span>
                      <span className="text-gray-600 ml-2">/{plan.period}</span>
                    </div>
                  </div>

                  <button className={`w-full py-4 rounded-xl font-semibold transition-all mb-8 ${
                    plan.popular
                      ? 'bg-red-600 text-white hover:bg-red-700 shadow-lg'
                      : 'bg-white text-red-600 border-2 border-red-600 hover:bg-red-50'
                  }`}>
                    {plan.ctaText}
                  </button>

                  <div className="space-y-4">
                    <div className="text-sm font-semibold text-gray-900 mb-3">What's included:</div>
                    {plan.features.map((feature, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-4">Need a custom enterprise solution for your organization?</p>
            <button className="text-red-600 font-semibold hover:text-red-700 transition-colors inline-flex items-center space-x-2">
              <span>Contact Sales</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Data Monetization Section */}
      <section id="monetize" className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                <Database className="w-4 h-4" />
                <span>Monetize Your Health Data</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Your Data, Your Choice, Your Earnings
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Research institutions and pharmaceutical companies need real-world biomarker data to develop new treatments and advance medical science. BioFlow gives you control over who can access your anonymized data and ensures you're fairly compensated.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Complete Anonymization</div>
                    <div className="text-gray-600 text-sm">All identifying information is removed before data is shared</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">You Choose the Buyers</div>
                    <div className="text-gray-600 text-sm">Review all offers and select which institutions can access your data</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Blockchain Transparency</div>
                    <div className="text-gray-600 text-sm">All transactions recorded on Cardano for complete transparency</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-8 border-2 border-blue-200">
              <div className="bg-white rounded-2xl p-6 shadow-xl mb-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                      <Building2 className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <div className="font-bold text-gray-900">PharmaCorp Analytics</div>
                      <div className="text-sm text-gray-500">Pharmaceutical Company</div>
                    </div>
                  </div>
                  <div className="bg-green-100 px-2 py-1 rounded-lg">
                    <span className="text-xs text-green-700 font-semibold">Verified</span>
                  </div>
                </div>
                <div className="space-y-2 mb-4">
                  <div className="text-sm text-gray-600">Looking for:</div>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-blue-50 text-blue-700 px-3 py-1 rounded-lg text-sm font-medium">Hormone Panel</span>
                    <span className="bg-blue-50 text-blue-700 px-3 py-1 rounded-lg text-sm font-medium">Thyroid</span>
                    <span className="bg-blue-50 text-blue-700 px-3 py-1 rounded-lg text-sm font-medium">Vitamin D</span>
                  </div>
                </div>
                <div className="flex items-center justify-between pt-4 border-t-2 border-gray-100">
                  <div>
                    <div className="text-sm text-gray-500">Offering</div>
                    <div className="text-3xl font-bold text-gray-900">2,800 ₳</div>
                  </div>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold text-sm hover:bg-blue-700 transition-colors">
                    View Offer
                  </button>
                </div>
              </div>

              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900 mb-1">Earn 500-3,000 ₳</div>
                <div className="text-gray-600">per dataset sold</div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {dataMonetizationBenefits.map((benefit, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 border-2 border-gray-200 shadow-lg hover:shadow-xl transition-all">
                <div className={`w-12 h-12 bg-${benefit.color}-100 rounded-xl flex items-center justify-center mb-4`}>
                  <benefit.icon className={`w-6 h-6 text-${benefit.color}-600`} />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blood Donation Section */}
      <section id="donate" className="py-16 sm:py-24 bg-gradient-to-br from-red-50 via-white to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="order-2 lg:order-1">
              <div className="bg-white rounded-3xl p-8 shadow-2xl border-2 border-gray-200">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center">
                      <Droplet className="w-8 h-8 text-red-600" fill="currentColor" />
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-gray-900">O-</div>
                      <div className="text-sm text-gray-500">Universal Donor</div>
                    </div>
                  </div>
                  <span className="bg-red-100 text-red-700 px-3 py-1.5 rounded-full text-sm font-semibold">
                    High Demand
                  </span>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-gray-400" />
                    <span className="text-gray-700">Berlin Medical Center</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Clock className="w-5 h-5 text-gray-400" />
                    <span className="text-gray-700">Next available: Nov 15, 2025</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Shield className="w-5 h-5 text-gray-400" />
                    <span className="text-gray-700">Verified clinical institution</span>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-2xl p-6 text-white">
                  <div className="text-sm opacity-90 mb-1">Compensation</div>
                  <div className="text-4xl font-bold mb-4">350 ₳</div>
                  <button className="w-full bg-white text-green-600 py-3 rounded-xl font-semibold hover:bg-green-50 transition-colors">
                    Schedule Donation
                  </button>
                </div>

                <div className="mt-6 pt-6 border-t-2 border-gray-200">
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span>Automatically qualified based on your test results</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="inline-flex items-center space-x-2 bg-red-100 text-red-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                <Heart className="w-4 h-4" />
                <span>Compensated Blood Donation</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Save Lives & Get Compensated
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Your monthly blood tests automatically determine if you qualify for blood donation. If eligible, you can donate blood reserves to clinical institutions and receive fair compensation instantly via blockchain.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">No Separate Screening</div>
                    <div className="text-gray-600 text-sm">Your monthly tests automatically determine eligibility</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Flexible Scheduling</div>
                    <div className="text-gray-600 text-sm">Book appointments at verified locations near you</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Instant Payment</div>
                    <div className="text-gray-600 text-sm">Receive 150-550 ₳ directly to your wallet after donation</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {bloodDonationBenefits.map((benefit, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 border-2 border-gray-200 shadow-lg hover:shadow-xl transition-all">
                <div className={`w-12 h-12 bg-${benefit.color}-100 rounded-xl flex items-center justify-center mb-4`}>
                  <benefit.icon className={`w-6 h-6 text-${benefit.color}-600`} />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Loved by Our Members
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Join thousands of people taking control of their health and earning from their data
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 border-2 border-gray-200 shadow-lg hover:shadow-xl transition-all">
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">"{testimonial.quote}"</p>
                <div className="flex items-center space-x-3">
                  <div className="text-4xl">{testimonial.avatar}</div>
                  <div>
                    <div className="font-bold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-500">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-16 sm:py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg sm:text-xl text-gray-600">
              Everything you need to know about BioFlow
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-xl border-2 border-gray-200 shadow-md overflow-hidden">
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
                >
                  <span className="font-semibold text-gray-900 pr-4">{faq.question}</span>
                  <ChevronDown className={`w-5 h-5 text-gray-500 flex-shrink-0 transition-transform ${activeAccordion === index ? 'rotate-180' : ''}`} />
                </button>
                {activeAccordion === index && (
                  <div className="px-6 pb-6">
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-4">Still have questions?</p>
            <button className="text-red-600 font-semibold hover:text-red-700 transition-colors inline-flex items-center space-x-2">
              <MessageCircle className="w-5 h-5" />
              <span>Contact Support</span>
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-24 bg-gradient-to-br from-red-600 to-red-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Take Control of Your Health?
          </h2>
          <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
            Join 50,000+ members who are tracking their health, monetizing their data, and contributing to medical research.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => scrollToSection('pricing')}
              className="bg-white text-red-600 px-8 py-4 rounded-xl font-semibold hover:bg-red-50 transition-all shadow-lg text-lg inline-flex items-center justify-center space-x-2"
            >
              <span>Get Started Today</span>
              <ArrowRight className="w-5 h-5" />
            </button>
            <button 
              onClick={() => scrollToSection('how-it-works')}
              className="bg-red-700 text-white px-8 py-4 rounded-xl font-semibold hover:bg-red-800 transition-all shadow-lg text-lg border-2 border-white/20"
            >
              Learn More
            </button>
          </div>
          <div className="mt-8 flex items-center justify-center space-x-6 text-red-100 text-sm">
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-5 h-5" />
              <span>Cancel anytime</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-5 h-5" />
              <span>30-day guarantee</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-5 h-5" />
              <span>No hidden fees</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            {/* Company Info */}
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="bg-gradient-to-br from-red-500 to-red-600 p-2 rounded-xl">
                  <Droplet className="w-6 h-6 text-white" fill="currentColor" />
                </div>
                <span className="text-xl font-bold text-white">BioFlow</span>
              </div>
              <p className="text-gray-400 text-sm mb-4">
                Empowering individuals to take control of their health data while contributing to medical research.
              </p>
              <div className="flex items-center space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Globe className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Mail className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <MessageCircle className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Product Links */}
            <div>
              <h4 className="text-white font-semibold mb-4">Product</h4>
              <ul className="space-y-3">
                <li><button onClick={() => scrollToSection('how-it-works')} className="text-gray-400 hover:text-white transition-colors">How It Works</button></li>
                <li><button onClick={() => scrollToSection('pricing')} className="text-gray-400 hover:text-white transition-colors">Pricing</button></li>
                <li><button onClick={() => scrollToSection('monetize')} className="text-gray-400 hover:text-white transition-colors">Data Monetization</button></li>
                <li><button onClick={() => scrollToSection('donate')} className="text-gray-400 hover:text-white transition-colors">Blood Donation</button></li>
              </ul>
            </div>

            {/* Support Links */}
            <div>
              <h4 className="text-white font-semibold mb-4">Support</h4>
              <ul className="space-y-3">
                <li><button onClick={() => scrollToSection('faq')} className="text-gray-400 hover:text-white transition-colors">FAQ</button></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Contact Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a></li>
              </ul>
            </div>

            {/* Company Links */}
            <div>
              <h4 className="text-white font-semibold mb-4">Company</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Press Kit</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-gray-400 text-sm">
                © 2025 BioFlow. All rights reserved.
              </p>
              <div className="flex items-center space-x-6 text-sm">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Cookie Policy</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default BioFlowWebsite;

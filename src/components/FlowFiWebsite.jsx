import React, { useState } from 'react';
import { Home, Mail, Info, FileText, Send, DollarSign, Shield, BarChart } from 'lucide-react';

const Navigation = ({ currentPage, setCurrentPage }) => (
  <nav className="bg-green-700 text-white p-4">
    <div className="max-w-6xl mx-auto flex justify-between items-center">
      <div className="text-2xl font-bold">FlowFi</div>
      <div className="flex gap-6">
        <button 
          onClick={() => setCurrentPage('home')}
          className={`flex items-center gap-2 ${currentPage === 'home' ? 'text-green-200' : ''}`}
        >
          <Home size={20} /> Home
        </button>
        <button 
          onClick={() => setCurrentPage('product')}
          className={`flex items-center gap-2 ${currentPage === 'product' ? 'text-green-200' : ''}`}
        >
          <Info size={20} /> Product
        </button>
        <button 
          onClick={() => setCurrentPage('interest')}
          className={`flex items-center gap-2 ${currentPage === 'interest' ? 'text-green-200' : ''}`}
        >
          <FileText size={20} /> Interest Form
        </button>
        <button 
          onClick={() => setCurrentPage('contact')}
          className={`flex items-center gap-2 ${currentPage === 'contact' ? 'text-green-200' : ''}`}
        >
          <Mail size={20} /> Contact
        </button>
      </div>
    </div>
  </nav>
);

const HomePage = () => (
  <div className="max-w-6xl mx-auto p-8">
    <div className="text-center mb-16">
      <h1 className="text-5xl font-bold mb-6">Welcome to FlowFi</h1>
      <p className="text-xl text-gray-600 mb-8">Specialized Financial Management for Cannabis Dispensaries</p>
    </div>

    <div className="grid md:grid-cols-2 gap-12 mb-16">
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Industry Challenges</h2>
        <p className="text-gray-600">
          Cannabis dispensaries face unique financial hurdles: limited banking access, 
          complex compliance requirements, cash management challenges, and strict regulatory reporting. 
          Traditional financial solutions aren't designed for the cannabis industry's specific needs.
        </p>
      </div>

      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Our Solution</h2>
        <p className="text-gray-600">
          FlowFi provides a comprehensive financial platform specifically designed for dispensaries, 
          offering compliant cash management, automated reporting, and industry-specific financial tools.
        </p>
      </div>
    </div>

    <div className="text-center mb-16">
      <h2 className="text-3xl font-bold mb-6">Key Benefits</h2>
      <div className="grid md:grid-cols-3 gap-8">
        <div className="p-6 bg-green-50 rounded-lg">
          <div className="flex justify-center mb-4">
            <Shield size={32} className="text-green-700" />
          </div>
          <h3 className="text-xl font-bold mb-3">Compliance First</h3>
          <p className="text-gray-600">Stay compliant with state and federal regulations</p>
        </div>
        <div className="p-6 bg-green-50 rounded-lg">
          <div className="flex justify-center mb-4">
            <DollarSign size={32} className="text-green-700" />
          </div>
          <h3 className="text-xl font-bold mb-3">Cash Management</h3>
          <p className="text-gray-600">Streamlined cash handling and reconciliation</p>
        </div>
        <div className="p-6 bg-green-50 rounded-lg">
          <div className="flex justify-center mb-4">
            <BarChart size={32} className="text-green-700" />
          </div>
          <h3 className="text-xl font-bold mb-3">Industry Analytics</h3>
          <p className="text-gray-600">Cannabis-specific insights and reporting</p>
        </div>
      </div>
    </div>
  </div>
);

const ProductPage = () => (
  <div className="max-w-6xl mx-auto p-8">
  <div className="max-w-6xl mx-auto p-8">
    <h1 className="text-4xl font-bold mb-8">Our Product</h1>
    <div className="grid md:grid-cols-2 gap-12">
      <div className="space-y-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-2xl font-bold mb-4">Compliance Management</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-600">
            <li>Automated state compliance reporting</li>
            <li>Tax calculation and documentation</li>
            <li>Audit-ready financial records</li>
            <li>Regular compliance updates</li>
          </ul>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-2xl font-bold mb-4">Cash Operations</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-600">
            <li>Smart safe integration</li>
            <li>Cash flow forecasting</li>
            <li>Automated reconciliation</li>
            <li>Secure transaction logging</li>
          </ul>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-2xl font-bold mb-4">Industry Analytics</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-600">
            <li>Product performance metrics</li>
            <li>Customer purchase patterns</li>
            <li>Inventory optimization</li>
            <li>Profitability analysis</li>
          </ul>
        </div>
      </div>
      <div className="bg-green-50 p-8 rounded-lg">
        <h2 className="text-3xl font-bold mb-6">Pricing Plans</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-2">Single Location</h3>
            <p className="text-3xl font-bold text-green-700">$299/month</p>
            <ul className="mt-4 space-y-2 text-gray-600">
              <li>• Full compliance suite</li>
              <li>• Basic analytics</li>
              <li>• Standard support</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-2">Multi-Location</h3>
            <p className="text-3xl font-bold text-green-700">$499/month</p>
            <ul className="mt-4 space-y-2 text-gray-600">
              <li>• Multi-store management</li>
              <li>• Advanced analytics</li>
              <li>• Priority support</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-2">Enterprise</h3>
            <p className="text-xl font-bold text-green-700">Custom Pricing</p>
            <ul className="mt-4 space-y-2 text-gray-600">
              <li>• Custom solutions</li>
              <li>• API access</li>
              <li>• Dedicated support</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
);
  </div>
);

const InterestForm = () => {
  const [formStatus, setFormStatus] = useState('');
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus('sending');
    
    const formData = new FormData(e.target);
    const data = {
      to: 'john.guckian13@gmail.com',
      subject: 'New Interest Form Submission',
      message: `
        Dispensary: ${formData.get('dispensaryName')}
        License: ${formData.get('license')}
        State: ${formData.get('state')}
        Locations: ${formData.get('locations')}
        Revenue: ${formData.get('revenue')}
        Challenges: ${formData.get('challenges')}
      `
    };

    try {
      // Using EmailJS service - you'll need to sign up and add your service ID
      await emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', data);
      setFormStatus('success');
    } catch (error) {
      setFormStatus('error');
    }
  };

  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl sm:text-4xl font-bold mb-8 text-center">Express Interest</h1>
      
      {formStatus === 'success' && (
        <div className="mb-6 p-4 bg-green-100 text-green-700 rounded-lg">
          Thank you for your interest! We'll be in touch soon.
        </div>
      )}
      
      {formStatus === 'error' && (
        <div className="mb-6 p-4 bg-red-100 text-red-700 rounded-lg">
          There was an error sending your form. Please try again.
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Dispensary Name *
        </label>
        <input
          type="text"
          name="dispensaryName"
          required
          className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
          placeholder="Your Dispensary Name"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          License Number
        </label>
        <input
          type="text"
          name="license"
          required
          className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
          placeholder="Your Cannabis License Number"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          State
        </label>
        <select 
          name="state"
          required
          className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500">
          <option>California</option>
          <option>Colorado</option>
          <option>Washington</option>
          <option>Oregon</option>
          <option>Other</option>
        </select>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Number of Locations
        </label>
        <select 
          name="locations"
          required
          className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500">
          <option>1 location</option>
          <option>2-5 locations</option>
          <option>6-10 locations</option>
          <option>11+ locations</option>
        </select>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Monthly Revenue Range
        </label>
        <select 
          name="revenue"
          required
          className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500">
          <option>Under $50k</option>
          <option>$50k - $100k</option>
          <option>$100k - $500k</option>
          <option>$500k+</option>
        </select>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Current Challenges
        </label>
        <textarea
          name="challenges"
          required
          className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
          rows="4"
          placeholder="Tell us about your current financial management challenges..."
        ></textarea>
      </div>
        <button
          type="submit"
          disabled={formStatus === 'sending'}
          className="w-full bg-green-700 text-white py-3 px-6 rounded-lg hover:bg-green-800 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {formStatus === 'sending' ? (
            <>Sending...</>
          ) : (
            <>
              <Send size={20} /> Submit Interest
            </>
          )}
        </button>
      </form>
    </div>
  );
};
  </div>
);

const ContactPage = () => (
  <div className="max-w-4xl mx-auto p-8">
  <div className="max-w-4xl mx-auto p-8">
    <h1 className="text-4xl font-bold mb-8">Contact Us</h1>
    <div className="grid md:grid-cols-2 gap-12">
      <div>
        <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Name
            </label>
            <input
              type="text"
              className="w-full p-3 border rounded-lg"
              placeholder="Your Name"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email
            </label>
            <input
              type="email"
              className="w-full p-3 border rounded-lg"
              placeholder="you@dispensary.com"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              State License Number
            </label>
            <input
              type="text"
              className="w-full p-3 border rounded-lg"
              placeholder="Your License Number"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Message
            </label>
            <textarea
              className="w-full p-3 border rounded-lg"
              rows="4"
              placeholder="Your message..."
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-green-700 text-white py-3 px-6 rounded-lg hover:bg-green-800 flex items-center justify-center gap-2"
          >
            <Send size={20} /> Send Message
          </button>
        </form>
      </div>
      <div className="bg-green-50 p-8 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Other Ways to Reach Us</h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-bold mb-2">Email</h3>
            <p>support@flowfi.com</p>
          </div>
          <div>
            <h3 className="font-bold mb-2">Phone</h3>
            <p>+1 (855) CANNABIS</p>
          </div>
          <div>
            <h3 className="font-bold mb-2">Address</h3>
            <p>420 Green Street<br />Suite 710<br />Denver, CO 80202</p>
          </div>
          <div>
            <h3 className="font-bold mb-2">Hours</h3>
            <p>Monday - Friday<br />9:00 AM - 6:00 PM MT</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);
  </div>
);

const FlowFiWebsite = () => {
  const [currentPage, setCurrentPage] = useState('home');

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage} />
      {currentPage === 'home' && <HomePage />}
      {currentPage === 'product' && <ProductPage />}
      {currentPage === 'interest' && <InterestForm />}
      {currentPage === 'contact' && <ContactPage />}
    </div>
  );
};

export default FlowFiWebsite;

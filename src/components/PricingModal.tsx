import React from 'react';
import { Check, X } from 'lucide-react';

interface PricingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const PricingModal: React.FC<PricingModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const plans = [
    {
      name: 'Free',
      price: 0,
      features: [
        'Single user access',
        '2 journey maps',
        'Basic templates',
        '100MB storage',
        'Export to PDF'
      ],
      limitations: [
        'No CRM integration',
        'Basic analytics only',
        'No custom branding',
        'Community support'
      ]
    },
    {
      name: 'Pro',
      price: 12,
      features: [
        '5 team members',
        '10 journey maps',
        'Advanced templates',
        '1GB storage',
        'Export to PDF/CSV',
        'HubSpot integration',
        'Basic analytics suite',
        'Custom branding',
        'Email support',
        'API access'
      ]
    },
    {
      name: 'Enterprise',
      price: 29,
      features: [
        'Unlimited team members',
        'Unlimited journey maps',
        'Custom templates',
        '5GB storage',
        'All export formats',
        'All CRM integrations',
        'Advanced analytics',
        'White labeling',
        'Priority support',
        'Dedicated success manager',
        'Custom API access',
        'SSO authentication'
      ]
    }
  ];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
      <div className="bg-white rounded-xl max-w-6xl w-full mx-4 max-h-[90vh] overflow-y-auto">
        <div className="p-6 border-b border-gray-200 flex justify-between items-center sticky top-0 bg-white">
          <h2 className="text-2xl font-bold text-gray-900">Choose Your Plan</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full"
          >
            <X className="h-6 w-6 text-gray-500" />
          </button>
        </div>
        
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`rounded-lg border ${
                  plan.name === 'Pro' ? 'border-indigo-500 shadow-lg' : 'border-gray-200'
                } p-6`}
              >
                <div className="text-center mb-6">
                  <h3 className="text-xl font-semibold text-gray-900">{plan.name}</h3>
                  <div className="mt-2">
                    <span className="text-4xl font-bold">${plan.price}</span>
                    <span className="text-gray-500">/month</span>
                  </div>
                </div>

                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                  {plan.limitations?.map((limitation) => (
                    <li key={limitation} className="flex items-start text-gray-400">
                      <X className="h-5 w-5 mr-2 flex-shrink-0" />
                      <span>{limitation}</span>
                    </li>
                  ))}
                </ul>

                <button
                  className={`w-full py-2 px-4 rounded-md font-medium ${
                    plan.name === 'Pro'
                      ? 'bg-indigo-600 text-white hover:bg-indigo-700'
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                  } transition-colors`}
                >
                  {plan.name === 'Enterprise' ? 'Contact Sales' : 'Get Started'}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingModal;
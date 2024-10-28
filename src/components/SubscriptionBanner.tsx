import React from 'react';
import { Crown, Users, HardDrive, Zap } from 'lucide-react';
import { Subscription } from '../types';

interface SubscriptionBannerProps {
  currentPlan: Subscription;
  onUpgrade: () => void;
}

const SubscriptionBanner: React.FC<SubscriptionBannerProps> = ({ currentPlan, onUpgrade }) => {
  const isFreePlan = currentPlan.tier === 'Free';

  return (
    <div className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-lg p-4 mb-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Crown className="h-6 w-6" />
          <div>
            <h3 className="font-semibold">{currentPlan.tier} Plan</h3>
            <div className="flex items-center space-x-4 text-sm mt-1">
              <span className="flex items-center">
                <Users className="h-4 w-4 mr-1" />
                {currentPlan.maxUsers} users
              </span>
              <span className="flex items-center">
                <HardDrive className="h-4 w-4 mr-1" />
                {currentPlan.storage}
              </span>
              <span className="flex items-center">
                <Zap className="h-4 w-4 mr-1" />
                {currentPlan.maxMaps} maps
              </span>
            </div>
          </div>
        </div>
        
        {isFreePlan && (
          <button
            onClick={onUpgrade}
            className="px-4 py-2 bg-white text-indigo-600 rounded-md text-sm font-medium hover:bg-indigo-50 transition-colors"
          >
            Upgrade Now
          </button>
        )}
      </div>
    </div>
  );
};

export default SubscriptionBanner;
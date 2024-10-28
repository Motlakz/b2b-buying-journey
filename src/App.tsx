import React, { useState } from 'react';
import { ArrowRight, Building2, Users, Briefcase, LineChart, Settings, ChevronRight, Plus } from 'lucide-react';
import JourneyMap from './components/JourneyMap';
import TemplateSelector from './components/TemplateSelector';
import Sidebar from './components/Sidebar';
import SubscriptionBanner from './components/SubscriptionBanner';
import AnalyticsDashboard from './components/AnalyticsDashboard';
import SettingsModal from './components/SettingsModal';
import PricingModal from './components/PricingModal';
import { Template, JourneyStage, Analytics, Subscription } from './types';
import { templates } from './data/templates';

function App() {
  const [selectedTemplate, setSelectedTemplate] = useState<Template | null>(null);
  const [customStages, setCustomStages] = useState<JourneyStage[]>([]);
  const [activeStage, setActiveStage] = useState<number | null>(null);
  const [showAnalytics, setShowAnalytics] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [showPricing, setShowPricing] = useState(false);

  // Mock data - replace with real data from your backend
  const currentSubscription: Subscription = {
    tier: 'Free',
    features: ['Basic Journey Mapping', 'Templates', 'Export'],
    maxUsers: 1,
    maxMaps: 2,
    storage: '100MB',
    price: 0
  };

  const analyticsData: Analytics = {
    pageViews: 1234,
    activeUsers: 56,
    conversionRate: 23,
    averageCycleTime: 45,
    stageMetrics: [
      { stageName: 'Discovery', dropoff: 20, timeSpent: 5 },
      { stageName: 'Evaluation', dropoff: 35, timeSpent: 12 },
      { stageName: 'Decision', dropoff: 15, timeSpent: 8 }
    ]
  };

  const handleTemplateSelect = (template: Template) => {
    setSelectedTemplate(template);
    setCustomStages(template.stages);
  };

  const handleStageUpdate = (updatedStage: JourneyStage, index: number) => {
    const newStages = [...customStages];
    newStages[index] = updatedStage;
    setCustomStages(newStages);
  };

  const handleUpgrade = () => {
    setShowPricing(true);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <LineChart className="h-8 w-8 text-indigo-600" />
              <h1 className="text-xl font-semibold text-gray-900">B2B Journey Optimizer</h1>
            </div>
            <div className="flex items-center space-x-4">
              <button 
                onClick={() => setShowAnalytics(!showAnalytics)}
                className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900"
              >
                {showAnalytics ? 'Hide Analytics' : 'Show Analytics'}
              </button>
              <button 
                onClick={() => setShowSettings(true)}
                className="p-2 text-gray-700 hover:text-gray-900"
              >
                <Settings className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <SubscriptionBanner 
          currentPlan={currentSubscription}
          onUpgrade={handleUpgrade}
        />

        {showAnalytics && <AnalyticsDashboard analytics={analyticsData} />}

        {!selectedTemplate ? (
          <div className="space-y-8">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold text-gray-900">
                Optimize Your B2B Customer Journey
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Select an industry template or start from scratch to visualize and enhance your B2B buying process
              </p>
            </div>
            <TemplateSelector templates={templates} onSelect={handleTemplateSelect} />
          </div>
        ) : (
          <div className="flex gap-6">
            <Sidebar 
              stages={customStages}
              activeStage={activeStage}
              onStageSelect={setActiveStage}
              template={selectedTemplate}
            />
            <div className="flex-1">
              <JourneyMap 
                stages={customStages}
                activeStage={activeStage}
                onStageUpdate={handleStageUpdate}
                onStageSelect={setActiveStage}
              />
            </div>
          </div>
        )}
      </div>

      <SettingsModal 
        isOpen={showSettings}
        onClose={() => setShowSettings(false)}
      />

      <PricingModal
        isOpen={showPricing}
        onClose={() => setShowPricing(false)}
      />
    </div>
  );
}

export default App;
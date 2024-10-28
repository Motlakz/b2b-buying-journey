import React, { useState } from 'react';
import { BarChart3, Users, Clock, TrendingUp, Filter, Download, ChevronDown } from 'lucide-react';
import { Analytics } from '../types';

interface AnalyticsDashboardProps {
  analytics: Analytics;
}

const AnalyticsDashboard: React.FC<AnalyticsDashboardProps> = ({ analytics }) => {
  const [selectedDateRange, setSelectedDateRange] = useState('7d');
  const [selectedMetrics, setSelectedMetrics] = useState<string[]>(['pageViews', 'conversion']);
  const [showFunnel, setShowFunnel] = useState(true);

  const dateRanges = [
    { value: '7d', label: 'Last 7 days' },
    { value: '30d', label: 'Last 30 days' },
    { value: '90d', label: 'Last 90 days' },
    { value: 'custom', label: 'Custom Range' }
  ];

  const funnelStages = [
    { name: 'Awareness', value: 100, users: 1000 },
    { name: 'Consideration', value: 65, users: 650 },
    { name: 'Evaluation', value: 40, users: 400 },
    { name: 'Decision', value: 25, users: 250 },
    { name: 'Purchase', value: 15, users: 150 }
  ];

  const userBehaviors = [
    { action: 'Template Views', count: 856, trend: '+12%' },
    { action: 'Journey Map Creation', count: 234, trend: '+8%' },
    { action: 'Export Actions', count: 145, trend: '+15%' },
    { action: 'Integration Usage', count: 89, trend: '+5%' }
  ];

  return (
    <div className="space-y-6">
      {/* Controls */}
      <div className="bg-white rounded-lg shadow-lg p-4">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-4">
            <select 
              value={selectedDateRange}
              onChange={(e) => setSelectedDateRange(e.target.value)}
              className="rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            >
              {dateRanges.map(range => (
                <option key={range.value} value={range.value}>{range.label}</option>
              ))}
            </select>
            <button className="flex items-center px-3 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50">
              <Filter className="w-4 h-4 mr-2" />
              Filter Metrics
            </button>
          </div>
          <button className="flex items-center px-3 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50">
            <Download className="w-4 h-4 mr-2" />
            Export Report
          </button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white rounded-lg shadow-lg p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Page Views</p>
              <p className="text-2xl font-semibold text-gray-900">{analytics.pageViews}</p>
              <p className="text-sm text-green-600">+12.3% vs last period</p>
            </div>
            <BarChart3 className="h-8 w-8 text-indigo-500" />
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Active Users</p>
              <p className="text-2xl font-semibold text-gray-900">{analytics.activeUsers}</p>
              <p className="text-sm text-green-600">+8.1% vs last period</p>
            </div>
            <Users className="h-8 w-8 text-indigo-500" />
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Conversion Rate</p>
              <p className="text-2xl font-semibold text-gray-900">{analytics.conversionRate}%</p>
              <p className="text-sm text-green-600">+2.4% vs last period</p>
            </div>
            <TrendingUp className="h-8 w-8 text-indigo-500" />
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Avg. Cycle Time</p>
              <p className="text-2xl font-semibold text-gray-900">{analytics.averageCycleTime} days</p>
              <p className="text-sm text-red-600">+1.2 days vs last period</p>
            </div>
            <Clock className="h-8 w-8 text-indigo-500" />
          </div>
        </div>
      </div>

      {/* Conversion Funnel */}
      {showFunnel && (
        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-medium text-gray-900">Conversion Funnel</h3>
            <button className="text-sm text-indigo-600 hover:text-indigo-700">
              View Details
            </button>
          </div>
          <div className="space-y-4">
            {funnelStages.map((stage, index) => (
              <div key={stage.name} className="relative">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm font-medium text-gray-900">{stage.name}</span>
                  <span className="text-sm text-gray-500">{stage.users} users</span>
                </div>
                <div className="w-full bg-gray-100 rounded-full h-4">
                  <div
                    className="bg-indigo-600 h-4 rounded-full transition-all duration-500"
                    style={{ width: `${stage.value}%` }}
                  />
                </div>
                {index < funnelStages.length - 1 && (
                  <div className="text-sm text-red-600 mt-1">
                    {funnelStages[index].users - funnelStages[index + 1].users} users dropped off
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* User Behavior */}
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h3 className="text-lg font-medium text-gray-900 mb-4">User Behavior</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {userBehaviors.map((behavior) => (
            <div key={behavior.action} className="border rounded-lg p-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">{behavior.action}</span>
                <span className={`text-sm ${
                  behavior.trend.startsWith('+') ? 'text-green-600' : 'text-red-600'
                }`}>
                  {behavior.trend}
                </span>
              </div>
              <p className="text-2xl font-semibold mt-1">{behavior.count}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Stage Performance */}
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h3 className="text-lg font-medium text-gray-900 mb-4">Stage Performance</h3>
        <div className="space-y-4">
          {analytics.stageMetrics.map((metric, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors cursor-pointer">
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-medium text-gray-900">{metric.stageName}</h4>
                <div className="flex items-center space-x-4">
                  <span className="text-sm text-gray-500">{metric.timeSpent} days avg.</span>
                  <ChevronDown className="h-4 w-4 text-gray-400" />
                </div>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-indigo-600 h-2 rounded-full transition-all duration-500"
                  style={{ width: `${100 - metric.dropoff}%` }}
                />
              </div>
              <div className="flex justify-between mt-1">
                <span className="text-sm text-gray-500">Completion Rate</span>
                <span className="text-sm font-medium text-gray-900">
                  {100 - metric.dropoff}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AnalyticsDashboard;
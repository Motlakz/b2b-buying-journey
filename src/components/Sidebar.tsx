import React from 'react';
import { ChevronRight, Building2, Users, Clock, Target } from 'lucide-react';
import { Template, JourneyStage } from '../types';

interface SidebarProps {
  stages: JourneyStage[];
  activeStage: number | null;
  onStageSelect: (index: number) => void;
  template: Template;
}

const Sidebar: React.FC<SidebarProps> = ({
  stages,
  activeStage,
  onStageSelect,
  template,
}) => {
  return (
    <div className="w-64 flex-shrink-0">
      <div className="bg-white rounded-lg shadow-lg p-4">
        <div className="space-y-6">
          <div>
            <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
              Template Info
            </h3>
            <div className="mt-3 space-y-3">
              <div className="flex items-center text-sm">
                <Building2 className="h-4 w-4 text-gray-400 mr-3" />
                <span>{template.industry}</span>
              </div>
              <div className="flex items-center text-sm">
                <Users className="h-4 w-4 text-gray-400 mr-3" />
                <span>{template.companySize}</span>
              </div>
              <div className="flex items-center text-sm">
                <Clock className="h-4 w-4 text-gray-400 mr-3" />
                <span>{template.averageCycle}</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
              Journey Stages
            </h3>
            <nav className="mt-3">
              {stages.map((stage, index) => (
                <button
                  key={index}
                  onClick={() => onStageSelect(index)}
                  className={`w-full text-left px-3 py-2 text-sm rounded-md mb-1 flex items-center justify-between ${
                    activeStage === index
                      ? 'bg-indigo-50 text-indigo-700'
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  <span className="flex items-center">
                    <Target className="h-4 w-4 mr-2" />
                    {stage.name}
                  </span>
                  <ChevronRight className={`h-4 w-4 ${
                    activeStage === index ? 'text-indigo-500' : 'text-gray-400'
                  }`} />
                </button>
              ))}
            </nav>
          </div>

          <div className="pt-4 border-t border-gray-200">
            <button className="w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              Generate Report
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
import React from 'react';
import { ArrowRight, CheckCircle2, AlertCircle } from 'lucide-react';
import { JourneyStage } from '../types';

interface JourneyMapProps {
  stages: JourneyStage[];
  activeStage: number | null;
  onStageUpdate: (stage: JourneyStage, index: number) => void;
  onStageSelect: (index: number) => void;
}

const JourneyMap: React.FC<JourneyMapProps> = ({
  stages,
  activeStage,
  onStageUpdate,
  onStageSelect,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="flex flex-col space-y-8">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold text-gray-900">Journey Visualization</h2>
          <button className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors">
            Export Report
          </button>
        </div>

        <div className="flex flex-wrap gap-4">
          {stages.map((stage, index) => (
            <div
              key={index}
              className={`flex-1 min-w-[250px] ${
                activeStage === index ? 'ring-2 ring-indigo-500' : ''
              }`}
            >
              <div
                className="bg-gray-50 rounded-lg p-4 cursor-pointer hover:bg-gray-100 transition-colors"
                onClick={() => onStageSelect(index)}
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-medium text-gray-500">Stage {index + 1}</span>
                  {stage.completion >= 80 ? (
                    <CheckCircle2 className="h-5 w-5 text-green-500" />
                  ) : stage.completion < 40 ? (
                    <AlertCircle className="h-5 w-5 text-red-500" />
                  ) : null}
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">{stage.name}</h3>
                <div className="space-y-2">
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-indigo-600 h-2 rounded-full"
                      style={{ width: `${stage.completion}%` }}
                    />
                  </div>
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>Completion</span>
                    <span>{stage.completion}%</span>
                  </div>
                </div>
                <div className="mt-4">
                  <p className="text-sm text-gray-600">{stage.description}</p>
                </div>
              </div>
              {index < stages.length - 1 && (
                <div className="flex justify-center my-2">
                  <ArrowRight className="text-gray-400" />
                </div>
              )}
            </div>
          ))}
        </div>

        {activeStage !== null && (
          <div className="mt-8 p-6 bg-gray-50 rounded-lg">
            <h3 className="text-lg font-medium text-gray-900 mb-4">
              Optimization Suggestions for {stages[activeStage].name}
            </h3>
            <ul className="space-y-3">
              {stages[activeStage].suggestions.map((suggestion, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-indigo-100 flex items-center justify-center">
                    <span className="text-xs font-medium text-indigo-600">{index + 1}</span>
                  </div>
                  <p className="text-gray-700">{suggestion}</p>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default JourneyMap;
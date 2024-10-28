import React from 'react';
import { Building2, Users, Clock } from 'lucide-react';
import { Template } from '../types';

interface TemplateSelectorProps {
  templates: Template[];
  onSelect: (template: Template) => void;
}

const TemplateSelector: React.FC<TemplateSelectorProps> = ({ templates, onSelect }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {templates.map((template, index) => (
        <div
          key={index}
          className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer"
          onClick={() => onSelect(template)}
        >
          <div className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">{template.name}</h3>
              <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                template.complexity === 'Simple' ? 'bg-green-100 text-green-800' :
                template.complexity === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                'bg-red-100 text-red-800'
              }`}>
                {template.complexity}
              </span>
            </div>
            
            <div className="space-y-3 mb-6">
              <div className="flex items-center text-sm text-gray-600">
                <Building2 className="h-4 w-4 mr-2" />
                <span>{template.industry}</span>
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <Users className="h-4 w-4 mr-2" />
                <span>{template.companySize}</span>
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <Clock className="h-4 w-4 mr-2" />
                <span>{template.averageCycle}</span>
              </div>
            </div>

            <p className="text-sm text-gray-600 mb-6">{template.description}</p>

            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-500">{template.stages.length} stages</span>
              <button className="px-4 py-2 bg-indigo-600 text-white text-sm font-medium rounded-md hover:bg-indigo-700 transition-colors">
                Use Template
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TemplateSelector;
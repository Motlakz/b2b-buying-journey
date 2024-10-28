import { Template } from '../types';

export const templates: Template[] = [
  {
    name: 'Enterprise SaaS',
    industry: 'Technology',
    companySize: 'Enterprise (1000+ employees)',
    complexity: 'Complex',
    averageCycle: '6-12 months',
    description: 'Optimized for enterprise software sales with multiple stakeholders and complex decision-making processes.',
    stages: [
      {
        name: 'Initial Discovery',
        description: 'Identify key stakeholders and understand business needs',
        completion: 85,
        suggestions: [
          'Implement automated stakeholder mapping',
          'Create detailed needs assessment questionnaire',
          'Set up initial discovery call templates'
        ],
        metrics: [
          { name: 'Stakeholder Identification', value: 85, target: 100 },
          { name: 'Need Assessment', value: 90, target: 100 }
        ]
      },
      {
        name: 'Technical Evaluation',
        description: 'Deep dive into technical requirements and integration needs',
        completion: 65,
        suggestions: [
          'Create technical specification document',
          'Schedule architecture review sessions',
          'Prepare integration roadmap'
        ],
        metrics: [
          { name: 'Technical Fit', value: 65, target: 100 },
          { name: 'Integration Readiness', value: 70, target: 100 }
        ]
      },
      {
        name: 'Solution Validation',
        description: 'Proof of concept and solution demonstration',
        completion: 45,
        suggestions: [
          'Set up automated demo environment',
          'Create custom use case scenarios',
          'Develop ROI calculator'
        ],
        metrics: [
          { name: 'Demo Effectiveness', value: 45, target: 100 },
          { name: 'POC Success Rate', value: 50, target: 100 }
        ]
      }
    ]
  },
  {
    name: 'Manufacturing Solutions',
    industry: 'Manufacturing',
    companySize: 'Mid-Market (100-999 employees)',
    complexity: 'Medium',
    averageCycle: '3-6 months',
    description: 'Tailored for manufacturing companies focusing on equipment and solutions sales.',
    stages: [
      {
        name: 'Needs Analysis',
        description: 'Understand production requirements and constraints',
        completion: 75,
        suggestions: [
          'Develop production analysis template',
          'Create capacity planning guide',
          'Implement ROI calculator'
        ],
        metrics: [
          { name: 'Requirements Gathering', value: 75, target: 100 },
          { name: 'Capacity Analysis', value: 80, target: 100 }
        ]
      },
      {
        name: 'Solution Design',
        description: 'Custom solution design and specification',
        completion: 60,
        suggestions: [
          'Create detailed specification sheets',
          'Develop 3D visualization tools',
          'Prepare implementation timeline'
        ],
        metrics: [
          { name: 'Design Accuracy', value: 60, target: 100 },
          { name: 'Client Approval', value: 65, target: 100 }
        ]
      }
    ]
  },
  {
    name: 'Professional Services',
    industry: 'Consulting',
    companySize: 'Small Business (10-99 employees)',
    complexity: 'Simple',
    averageCycle: '1-3 months',
    description: 'Streamlined for professional services firms with focus on consulting and advisory services.',
    stages: [
      {
        name: 'Service Scoping',
        description: 'Define project scope and deliverables',
        completion: 90,
        suggestions: [
          'Create scope definition template',
          'Implement milestone planning',
          'Develop pricing calculator'
        ],
        metrics: [
          { name: 'Scope Clarity', value: 90, target: 100 },
          { name: 'Timeline Definition', value: 85, target: 100 }
        ]
      },
      {
        name: 'Proposal Development',
        description: 'Create and present custom proposal',
        completion: 70,
        suggestions: [
          'Update proposal template',
          'Add case study references',
          'Include value proposition metrics'
        ],
        metrics: [
          { name: 'Proposal Quality', value: 70, target: 100 },
          { name: 'Client Feedback', value: 75, target: 100 }
        ]
      }
    ]
  }
];
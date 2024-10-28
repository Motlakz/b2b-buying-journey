export interface JourneyStage {
  name: string;
  description: string;
  completion: number;
  suggestions: string[];
  metrics: {
    name: string;
    value: number;
    target: number;
  }[];
  userBehavior?: {
    timeSpent: number;
    interactions: number;
    dropoffRate: number;
  };
}

export interface Template {
  name: string;
  industry: string;
  companySize: string;
  complexity: 'Simple' | 'Medium' | 'Complex';
  averageCycle: string;
  description: string;
  stages: JourneyStage[];
  analytics?: {
    usage: number;
    satisfaction: number;
    completion: number;
  };
}

export interface Subscription {
  tier: 'Free' | 'Pro' | 'Enterprise';
  features: string[];
  maxUsers: number;
  maxMaps: number;
  storage: string;
  price: number;
  usage?: {
    currentUsers: number;
    currentMaps: number;
    storageUsed: string;
  };
}

export interface Analytics {
  pageViews: number;
  activeUsers: number;
  conversionRate: number;
  averageCycleTime: number;
  stageMetrics: {
    stageName: string;
    dropoff: number;
    timeSpent: number;
    interactions?: number;
    completionRate?: number;
  }[];
  trends?: {
    period: string;
    metrics: {
      name: string;
      value: number;
      change: number;
    }[];
  };
  userBehavior?: {
    actions: {
      name: string;
      count: number;
      trend: string;
    }[];
    segments: {
      name: string;
      percentage: number;
    }[];
  };
}

export interface User {
  id: string;
  name: string;
  email: string;
  subscription: Subscription;
  organization: string;
  role: 'Admin' | 'Editor' | 'Viewer';
  preferences?: {
    notifications: boolean;
    theme: 'light' | 'dark';
    defaultView: 'map' | 'analytics';
  };
  activity?: {
    lastLogin: string;
    totalLogins: number;
    lastAction: string;
  };
}
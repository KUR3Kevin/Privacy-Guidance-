export interface BadSite {
  name: string;
  category: string;
  reason: string;
  alternative: string;
}

export interface NewsItem {
  title: string;
  date: string;
  summary: string;
  severity: 'Low' | 'Medium' | 'High' | 'Critical';
}

export interface DashboardData {
  badSites: BadSite[];
  news: NewsItem[];
}

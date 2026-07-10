export interface ServiceItem {
  id: string;
  index: string;
  title: string;
  category: string;
  description: string;
  bullets: string[];
  imageUrl: string;
}

export interface MetricItem {
  value: string;
  label: string;
}

export interface BrandItem {
  name: string;
  locations?: string[];
}

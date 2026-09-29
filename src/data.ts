import { BrandItem, MetricItem, ServiceItem } from "./types";

export const BRANDS: BrandItem[] = [
  { name: "SammySosa", locations: ["Lisbon", "Barreiro", "Mumbai", "Navi Mumbai"] },
  { name: "desifr studio", locations: ["Mumbai", "Nepal"] },
  { name: "Oliva", locations: ["Lisbon"] },
  { name: "EdPro UPSC", locations: ["India"] },
  { name: "Study Smart IAS PCS", locations: ["Lucknow"] },
  { name: "TrueNest Homes", locations: ["Bangalore"] },
  { name: "Singh Interiors", locations: ["Mumbai"] },
  { name: "One Urban Solutions", locations: ["Mumbai"] },
  { name: "Heaven Nest", locations: ["Thane"] },
];

export const METRICS: MetricItem[] = [
  { value: "1.2Cr+", label: "Attributed Revenue Generated" },
  { value: "30L+", label: "Ad Spend Managed" },
  { value: "3.2x", label: "Average Tracked ROAS" },
];

export const SERVICES: ServiceItem[] = [
  {
    id: "commerce",
    index: "01",
    title: "commerce",
    category: "📦 commerce",
    description: "Optimize and drive revenue to the exact places your customers buy.",
    bullets: [
      "Marketplace Growth: Running targeted ads and optimizing your product listings to scale sales on Amazon, Flipkart, and every major e-commerce platforms.",
      "CRO: Combining tailored landing page design with continuous testing to supercharge your paid media performance and turn intent into revenue.",
    ],
    // Clean, minimalist, high-end design visual
    imageUrl: "https://images.unsplash.com/photo-1511556532299-8f662fc26c06?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "social",
    index: "02",
    title: "social",
    category: "💬 social",
    description: "Scale your brand's presence and keep your customers coming back.",
    bullets: [
      "Paid Social Campaigns: Planning and running high-ROI ad campaigns across Meta, LinkedIn, Snapchat, Reddit, Pinterest and X.",
      "Retention Cycles: Setting up smart WhatsApp and Email flows that automatically follow up with customers, recover abandoned carts, and drive repeat purchases.",
    ],
    imageUrl: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "search",
    index: "03",
    title: "search",
    category: "🔍 search",
    description: "Capture customers who are actively looking for what you sell.",
    bullets: [
      "High-Intent Paid Search: Running disciplined Google Search and Performance Max ads to catch buyers right at the moment they are searching for your product.",
      "Next-Gen Visibility: Optimizing your brand's digital presence so you show up first on traditional Google searches as well as in AI search.",
    ],
    imageUrl: "https://images.unsplash.com/photo-1507646227500-4d389b0012be?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "visuals",
    index: "04",
    title: "visuals",
    category: "🎨 visuals",
    description: "Create the high-converting content that powers your ads.",
    bullets: [
      "Product Shoots: Clean, premium photography and video ad designed to tell a story and make your product look world-class.",
      "Creatives: High-impact, scroll-stopping creatives tailored specifically to capture attention and drive sales.",
    ],
    imageUrl: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?q=80&w=800&auto=format&fit=crop",
  },
];

import { DashboardData } from "../types";

const PRIVACY_DATA: DashboardData = {
  badSites: [
    {
      name: "Google Chrome",
      category: "Web Browser",
      reason: "Extensive data collection for ad targeting.",
      alternative: "Brave Browser",
      detailedExplanation: "Google Chrome is designed to feed the world's largest advertising network. It tracks your history, extensions, and behavior. Brave is built on the same speed engine (Chromium) but automatically blocks trackers, ads, and fingerprinting scripts by default, keeping your data on your device."
    },
    {
      name: "Unsecured Wi-Fi",
      category: "Network",
      reason: "Exposes traffic to local interceptors.",
      alternative: "VPN Service",
      detailedExplanation: "Public Wi-Fi networks in cafes or airports are often unencrypted. Hackers can sit on the same network and 'sniff' your packets to steal passwords or session cookies. A VPN creates an encrypted tunnel for your traffic, making it unreadable to anyone else on the network."
    },
    {
      name: "Default Search",
      category: "Search Engine",
      reason: "Prioritizes sponsored content and tracking.",
      alternative: "DuckDuckGo",
      detailedExplanation: "Standard search engines build a profile of you based on your queries to sell ads. DuckDuckGo does not store your personal information or search history. You get the same search results without the 'filter bubble' or invasive tracking cookies following you around the web."
    },
    {
      name: "ISP Tracking",
      category: "Connection",
      reason: "Your ISP logs all visited domains.",
      alternative: "Encrypted DNS",
      detailedExplanation: "Even with HTTPS, your Internet Service Provider (ISP) can see the domain names of websites you visit via DNS lookups. Switching to Encrypted DNS (like DNS-over-HTTPS) hides this lookup process, preventing your ISP from logging your browsing habits or selling that data."
    },
  ],
  tools: [
    { name: "Portmaster", category: "App Firewall", description: "Open-source firewall that visualizes every connection your PC makes to block trackers.", icon: "Activity", link: "https://safing.io/portmaster/", recommended: true },
    { name: "Proton Pass", category: "Identity", description: "Generate burner emails on the fly to mask your true identity from data brokers.", icon: "Key", link: "https://proton.me/pass", recommended: true },
    { name: "Tor Browser", category: "Anonymity", description: "Defends against tracking by bouncing communications around a distributed network.", icon: "Globe", link: "https://www.torproject.org/download/", recommended: true },
    { name: "Brave Browser", category: "Browser", description: "Blocks trackers & ads by default. Fast, private, and secure.", icon: "Shield", link: "https://brave.com/", recommended: true },
    { name: "Proton VPN", category: "VPN", description: "High-speed Swiss VPN that protects your privacy.", icon: "Lock", link: "https://protonvpn.com/", recommended: true },
    { name: "Signal", category: "Messaging", description: "State-of-the-art end-to-end encryption.", icon: "MessageCircle", link: "https://signal.org/download/", recommended: true },
  ],
  news: [
    {
      title: "New US Privacy Laws Effective Jan 1, 2026",
      date: "Jan 1, 2026",
      source: "Morrison Foerster",
      summary: "Laws in CA, IN, KY, and RI go live, mandating stricter data breach notifications.",
      severity: "Medium",
      url: "https://www.mofo.com/resources/insights/251205-a-mofo-privacy-minute-q-a-2026",
      detailedContent: "As of Jan 1, 2026, California's SB 446 (shortening data breach notification timelines) and AB 656 (mandating easier social media account deletion) will take effect. Additionally, new comprehensive consumer privacy laws in Indiana, Kentucky, and Rhode Island will go live, requiring businesses to update privacy policies immediately."
    },
    {
      title: "2025 Tech Job Cuts Hit Highest Since 2020",
      date: "Dec 2025",
      source: "HR Executive",
      summary: "General tech roles see massive cuts while AI/ML specialized roles grow by 42%.",
      severity: "Medium",
      url: "https://hrexecutive.com/job-cuts-highest-since-2020-the-real-reasons-why/",
      detailedContent: "A new report from Challenger, Gray & Christmas reveals that announced job cuts in 2025 have reached their highest point since 2020. However, the market shows a 'paradox': while general tech roles are being cut, job postings for specialized AI and machine learning roles have grown by over 42% year-over-year."
    },
    {
      title: "Privacy-Focused Browsers Gain Market Share",
      date: "This Month",
      source: "Tech Privacy News",
      summary: "Brave and Firefox see 30% growth as users prioritize privacy over convenience.",
      severity: "High",
      url: "#",
      detailedContent: "Privacy-focused browsers like Brave and Firefox have seen significant growth in 2025-2026, with user bases expanding by nearly 30%. This shift indicates a growing awareness and concern about online privacy and data collection practices by major tech companies."
    },
    {
      title: "Major Data Breach Exposes 100M Records",
      date: "Feb 2026",
      source: "Cybersecurity Weekly",
      summary: "Third-party data broker suffers massive breach affecting millions of users.",
      severity: "Critical",
      url: "#",
      detailedContent: "A major data broker experienced a significant security breach, exposing personal information of over 100 million individuals. The incident highlights the risks of centralized data collection and the importance of using privacy-protecting tools and services."
    },
    {
      title: "EU Strengthens Privacy Regulations",
      date: "Jan 2026",
      source: "Privacy International",
      summary: "New amendments to GDPR increase penalties and expand user rights.",
      severity: "High",
      url: "#",
      detailedContent: "The European Union has introduced significant amendments to GDPR, increasing maximum penalties for violations and expanding user rights regarding data portability and deletion. These changes set new global standards for privacy protection and user data control."
    },
  ]
};

export const fetchDashboardData = async (): Promise<DashboardData> => {
  return PRIVACY_DATA;
};

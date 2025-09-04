import type { SiteConfig, SiteContent } from "../types";

export const SITE_CONFIG: SiteConfig = {
  title: "Paul Alberts",
  author: "Paul Alberts",
  description:
    "Visual storytelling. Emergency coordination. Purposeful leadership. Relentless innovation.",
  lang: "en",
  siteLogo: "/paulalberts-small.png",
  navLinks: [
    { text: "Experience", href: "#experience" },
    { text: "Projects", href: "#projects" },
    { text: "About", href: "#about" },
  ],
  socialLinks: [
    { text: "LinkedIn", href: "https://linkedin.com/paulalberts" },
    { text: "Youtube", href: "https://youtube.com/paulalberts" },
  ],
  socialImage: "/zen-og.png",
  canonicalURL: "https://paulalberts.com",
};

export const SITE_CONTENT: SiteContent = {
  hero: {
    name: "Paul Alberts",
    specialty: "From Communications to Leadership on the Frontlines of Public Safety.",
    summary:
      "Visual storytelling. Emergency coordination. Purposeful leadership. Relentless innovation.",
    email: "paul@paulalberts.com",
  },
  experience: [
    {
      company: "BC Emergency Health Services",
      position: "Operations Manager",
      startDate: "2016",
      endDate: "Present",
      summary: [
        "",
  ],
    },
    {
      company: "Bankit",
      position: "Mobile Developer",
      startDate: "Feb 2017",
      endDate: "May 2018",
      summary: [
        "I designed and developed a mobile application using Flutter, allowing it to be deployed on both Android and iOS with a single codebase. This reduced development time by 50% and maintenance costs by 30%, facilitating a consistent user experience on both platforms.",
        "I integrated biometric authentication and data encryption, significantly improving the security of user data. This implementation resulted in a 40% increase in user trust and a 25% reduction in unauthorized access attempts.",
      ],
    },
    {
      company: "Driveer",
      position: "Frontend Developer",
      startDate: "Jun 2015",
      endDate: "Oct 2016",
      summary:
        "Developed and integrated a real-time vehicle tracking system using WebSockets, improving accuracy and data update in the application. This functionality increased user satisfaction by 30% and reduced customer service inquiries by 25%.",
    },
  ],
  projects: [
    {
      name: "Spotifu Music",
      summary: "A music streaming app that emulates Spotify's core features.",
      linkPreview: "/",
      linkSource: "https://github.com/immois/astro-zen",
      image: "/spotifu.png",
    },
    {
      name: "Shopp App",
      summary: "An e-commerce platform that replicates Shopify's key features.",
      linkPreview: "/",
      linkSource: "https://github.com/immois/astro-zen",
      image: "/shopify-clon.png",
    },
    {
      name: "ClonTagram",
      summary: "A social network that replicates the features of Instagram",
      linkPreview: "/",
      linkSource: "https://github.com/immois/astro-zen",
      image: "/clone-ig.png",
    },
  ],
  about: {
    description: `After spending nearly 30 years in Northern British Columbia—where I was born, raised, and built a fulfilling career producing media and multimedia content across sectors including municipal government, health care, post-secondary education, economic development, and tourism—I wrapped up my time in the region with a milestone role in the 2015 Prince George Canada Winter Games. The Games gave me the opportunity to showcase the community on a national stage through a range of visual media, including national television commercials, broadcast footage, and digital content. 
    
    Leaving the industry on a high note, I was inspired to further serve the community and follow my growing interest in public service and public safety. I shifted into Emergency Medical Services, starting on the frontlines as a Paramedic and later moving into a communications role as a Dispatcher. I’ve since transitioned into a leadership position, where I now lead a team of over 100 professionals who save lives every day—over the phone.`,
    image: "/paulalberts.jpg",
  },
};

// #5755ff

import bacayuk1 from "../assets/images/bacayuk1.png";
import bacayuk2 from "../assets/images/bacayuk2.png";

import agrilink from "../assets/images/agrilink.png";
import agrilink2 from "../assets/images/agrilink2.png";

import expansell1 from "../assets/images/expansell1.png";
import expansell3 from "../assets/images/expansell3.png";

import canngopi from "../assets/images/CANNGOPI.png";
import canngopi2 from "../assets/images/CANNGOPI2.png";

export interface Project {
  id: string;
  slug: string;
  index: string;
  title: string;
  subtitle: string;
  category: string;
  year: string;
  coverImage: string;
  heroImage: string;
  description: string;
  challenge: string;
  solution: string;
  outcome: string;
  tags: string[];
  images: string[];
  link?: string;
}

export const projects: Project[] = [
  {
    id: "01",
    slug: "BACAYUK",
    index: "01",
    title: "BACAYUK",
    subtitle: "Temukan cerita seru dan mulai perjalanan membaca.",
    category: "UI/UX Mobile APP",
    year: "2024",
    coverImage: bacayuk1,
    heroImage: bacayuk1,
    description: "A mobile reading platform that brings knowledge, entertainment, community, and books together in one place. BacaYuk helps users discover journals and books, enjoy interactive reading experiences, connect with fellow readers, and explore an integrated online bookstore.",
    challenge: "Reading resources and activities are often scattered across different platforms, making it difficult for users to discover, engage, and stay motivated.",
    solution: "BacaYuk combines journal discovery, reading games, community interaction, and an online bookstore into one intuitive mobile experience.",
    outcome: "A unified reading ecosystem that makes discovering knowledge, building reading habits, connecting with others, and accessing books more convenient.",
    tags: ["UX Design", "UI Design", "Figma",],
    images: [
    bacayuk2,
    bacayuk1,
  ],
  },
  {
    id: "02",
    slug: "AgriLink",
    index: "02",
    title: "AgriLink",
    subtitle: "Connecting people with products, knowledge, and opportunities in agriculture.",
    category: "Mobile App Design",
    year: "2025",
    coverImage: agrilink,
    heroImage: agrilink,
    description: "A mobile agricultural platform designed to connect consumers, farmers, and agricultural communities in one place. AgriLink combines an online marketplace for fresh produce and plants with agricultural news, community forums, and investment opportunities that allow users to support and participate in farming projects.",
    challenge: "Agricultural products, information, communities, and investment opportunities are scattered across different platforms.",
    solution: "An integrated mobile platform combining an agricultural marketplace, community forum, news, and farming investment opportunities.",
    outcome: "A connected agricultural ecosystem that makes it easier to shop, learn, connect, and support local farming.",
    tags: ["UI/UX Design", "Mobile App", "UX Research", "Figma"],
    images: [
    agrilink,
    agrilink2,
    ],
  },
  {
    id: "03",
    slug: "Expansell",
    index: "03",
    title: "Expansell",
    subtitle: "Belanja kebutuhan harian dengan mudah, aman, dan lebih dekat.",
    category: "Mobile App",
    year: "2024",
    coverImage: expansell1,
    heroImage: expansell1,
    description: "A mobile marketplace app designed to make everyday shopping simpler and more accessible. ExpanSell connects users with a wide range of fresh products, daily essentials, promotions, and local sellers through a simple and intuitive shopping experience.",
    challenge: "How might we make everyday shopping easier while helping local sellers reach more customers?",
    solution: "A unified marketplace experience combining product discovery, promotions, community interaction, and seamless shopping.",
    outcome: "A simple and accessible mobile shopping experience designed to connect customers with products and local sellers in one place.",
    tags: ["UI Design", "UX Research", "Figma"],
    images: [
      expansell1,
      expansell3,
    ],
  },
  {
    id: "04",
    slug: "CANNGOPI",
    index: "04",
    title: "CANNGOPI",
    subtitle: "Redesigning inventory management for a simpler and more efficient workflow.",
    category: "Web App",
    year: "2026",
    coverImage: canngopi,
    heroImage: canngopi,
    description: "A UI/UX redesign project for CanNgopi's inventory system, focused on improving how staff manage, monitor, and access inventory information. The project combines usability evaluation, user research, and interface redesign to create a clearer and more efficient inventory management experience.",
    challenge: "How might we make inventory management simpler and easier for staff to use in their daily workflow?",
    solution: "Through user research and usability evaluation, I identified key pain points in the existing system and translated the findings into a redesigned interface with clearer navigation, information hierarchy, and streamlined workflows.",
    outcome: "A more intuitive inventory experience that helps staff understand information faster and perform routine tasks with less friction.",
    tags: ["UI/UX Design", "UX Research", "System Analysis", "Figma"],
    images: [
      canngopi,
      canngopi2,
    ],
  },
];

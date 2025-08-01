import { CodeXml, FileCog, LayoutPanelLeftIcon } from "lucide-react";
import {
    project01,
    project02,
    project03,
    project04,
    project05,
    project06,
    testimonial01,
    testimonial02,
    testimonial03,
} from "./assets";

export const navbarLinks = [
  { id: "about", label: "About" },
  { id: "services", label: "Services" },
  { id: "projects", label: "Resources" },
];


export const projects = [
    {
        id: 1,
        link: "#",
        title: "Personal Portfolio Website",
        tags: ["Design", "Development"],
        image: project01,
    },
    {
        id: 2,
        link: "#",
        title: "E-Commerce Website",
        tags: ["Design", "Development"],
        image: project02,
    },
    {
        id: 3,
        link: "#",
        title: "Travel Website",
        tags: ["Design", "Development"],
        image: project03,
    },
    {
        id: 4,
        link: "#",
        title: "Healthcare Website",
        tags: ["Design"],
        image: project04,
    },
    {
        id: 5,
        link: "#",
        title: "Education Platform",
        tags: ["Design"],
        image: project05,
    },
    {
        id: 6,
        link: "#",
        title: "Weather App",
        tags: ["Design"],
        image: project06,
    },
];

export const testimonials = [
    {
        id: 1,
        clientName: "Carlos Smith",
        clientJob: "CEO",
        clientImage: testimonial01,
        comment:
            "The attention to detail and dedication to creating a user-friendly experience were evident in every step of the process. You transformed our vision into a stunning and functional website. Highly recommended!",
    },
    {
        id: 2,
        clientName: "Mike Peter",
        clientJob: "Founder's Associate",
        clientImage: testimonial02,
        comment:
            "Working with you was an absolute pleasure. The website exceeded our expectations and has significantly boosted our online presence.",
    },
    {
        id: 3,
        clientName: "Alex Miller",
        clientJob: "CEO",
        clientImage: testimonial03,
        comment:
            "Professional, creative, and highly skilled. You delivered a website that perfectly matches our brand.",
    },
];
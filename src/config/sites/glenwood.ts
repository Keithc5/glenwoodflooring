import type { BusinessConfig } from "@config/types";

export const glenwoodSite: BusinessConfig = {
  name: "Glenwood Flooring",
  tagline: "Professional timber floor restoration in Ireland",
  siteUrl: "https://www.glenwoodflooring.ie",
  contact: {
    phone: "086 068 3004",
    email: "info@glenwoodflooring.ie",
    address: "Glenamaddy, County Galway, Ireland",
  },
  openingHours: [], // TODO: Replace with confirmed Glenwood Flooring opening hours.
  social: {
    facebook: "https://www.facebook.com/glenwoodtimberfloorrestoration/",
    instagram: "https://www.instagram.com/Glenwoodfloors/",
    linkedin: "",
  },
  services: [
    { title: "Floor Sanding", description: "Professional sanding removes worn finish, scuffs and surface marks before the floor is treated and finished.", href: "/sanding" },
    { title: "Floor Staining", description: "Change or refresh the colour of a timber floor with stain selected to suit the room and desired result.", href: "/staining" },
    { title: "Floor Finishing", description: "Protect restored timber floors from everyday wear with a finish chosen for the floor and its use.", href: "/finishing" },
    { title: "Specialist Flooring Services", description: "Restoration for sports floors, gyms, dance floors and other large commercial or community spaces.", href: "/specialised" },
  ],
  gallery: [
    { title: "Restored timber floor", image: "/images/glenwood/slider-1.jpg", alt: "Finished timber floor in an interior", href: "/gallery" },
    { title: "Floor restoration work", image: "/images/glenwood/slider-4.jpg", alt: "Timber flooring after restoration work", href: "/gallery" },
    { title: "Completed flooring project", image: "/images/glenwood/slider-7.jpg", alt: "Completed timber flooring project", href: "/gallery" },
  ],
  testimonials: [],
  faqs: [],
  contactCta: {
    eyebrow: "Discuss your floor",
    title: "Ask Glenwood about your flooring project",
    description: "Get in touch to discuss sanding, staining, finishing, restoration or specialist flooring work.",
    primaryCtaLabel: "Contact Glenwood",
    primaryCtaHref: "/contact",
    secondaryCtaLabel: "View our work",
    secondaryCtaHref: "/our-work",
  },
  contactForm: {
    eyebrow: "Flooring enquiry",
    title: "Tell us about your project",
    description: "This form is currently a visual enquiry form only. Please phone or email Glenwood Flooring to send an enquiry.",
  },
  aboutPage: {
    eyebrow: "About",
    title: "About Glenwood Flooring",
    description: "A family-run timber floor sanding, fitting and restoration business based in Glenamaddy, County Galway and serving customers throughout Ireland.",
    introTitle: "Professional timber flooring services",
    intro: "Glenwood Flooring provides wooden floor renovation and restoration for homes and businesses. Services include repairs, sanding, staining, varnishing, new-floor sales and installation, and specialist treatment for sports and large commercial floors.",
    values: [
      { title: "Complete restoration", description: "Repair, sanding, staining and finishing services are planned around the condition of each floor." },
      { title: "Homes and businesses", description: "Flooring work is available for homes and settings including bars, restaurants, gyms and hotels." },
      { title: "Specialist floors", description: "Specialist treatment is available for sports, dance and other large timber floors." },
    ],
  },
  servicesPage: {
    eyebrow: "Our work", title: "Timber floor restoration services", description: "From preparing worn boards to applying the final protective finish, Glenwood offers a practical range of timber flooring services.",
    processTitle: "A considered restoration process", processDescription: "The exact approach depends on the floor, its condition and the finish required.",
    process: [
      { title: "Assess", description: "Discuss the floor, the condition of the timber and the result you want." },
      { title: "Prepare", description: "Complete suitable repairs and sand the floor back as required." },
      { title: "Protect", description: "Apply the selected stain and finish for the intended look and use." },
    ],
  },
  galleryPage: { eyebrow: "Gallery", title: "Glenwood flooring projects", description: "A selection of timber flooring and restoration imagery from the existing Glenwood website.", featuredTitle: "Selected work", featuredDescription: "Browse examples of completed flooring work and contact Glenwood to discuss your own floor." },
  contactPage: { eyebrow: "Contact", title: "Contact Glenwood Flooring", description: "Get in touch about timber floor sanding, staining, finishing, restoration or specialist flooring services.", detailsTitle: "Contact details", detailsDescription: "Phone or email Glenwood Flooring to discuss your project.", hoursTitle: "Availability", hoursDescription: "Please contact Glenwood directly to confirm availability." },
  theme: { primary: "#322719", secondary: "#66523b", accent: "#a97835", background: "#fffdf8" },
  seo: { title: "Glenwood Flooring | Timber Floor Restoration Ireland", description: "Professional timber floor sanding, staining, finishing, restoration and specialist flooring services in Ireland.", image: "/images/glenwood/slider-1.jpg", locale: "en_IE", siteName: "Glenwood Flooring" },
};

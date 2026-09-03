export interface NavigationLink {
  label: string;
  href: string;
  variant?: "default" | "cta";
}

export interface NavigationGroup {
  label: string;
  children: readonly NavigationLink[];
}

export type NavigationItem = NavigationLink | NavigationGroup;

export const serviceNavigation = [
  { label: "Floor Sanding", href: "/sanding" },
  { label: "Floor Staining", href: "/staining" },
  { label: "Floor Finishing", href: "/finishing" },
  { label: "Specialised Services", href: "/specialised" },
] as const satisfies readonly NavigationLink[];

export const navigation: readonly NavigationItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", children: serviceNavigation },
  { label: "Our Work", href: "/our-work" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact", variant: "cta" },
];

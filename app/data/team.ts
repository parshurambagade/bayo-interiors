export type TeamMember = {
  image: string;
  name: string;
  about: string;
  role: string;
};

export const teamMembers: TeamMember[] = [
  {
    image: "/team-member.png",
    name: "Nickola Dickens",
    about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer at accumsan enim. Fusce aliquam nunc in lacus dapibus malesuada. Phasellus ut leo id felis volutpat gravida ac a mauris.",
    role: "Founder"
  },
  {
    image: "/team-member.png",
    name: "Sarah Anderson",
    about: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
    role: "Lead Designer"
  },
  {
    image: "/team-member.png",
    name: "Michael Chen",
    about: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    role: "Senior Architect"
  }
];
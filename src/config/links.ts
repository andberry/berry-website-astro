interface ILink {
  name: string;
  url: string;
  iconName: string;
}

export const links: ILink[] = [
  {
    name: "Email",
    url: "mailto:hello@andberry.me",
    iconName: "mdi:email",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/andrea-berardi/",
    iconName: "ri:linkedin-fill",
  },
  {
    name: "Twitter",
    url: "https://www.linkedin.com/in/andrea-berardi/",
    iconName: "ri:twitter-fill",
  },
  {
    name: "Dev.to",
    url: "https://dev.to/andberry",
    iconName: "mdi:dev-to",
  },
  {
    name: "GitHub",
    url: "https://github.com/andberry",
    iconName: "ri:github-fill",
  },
];

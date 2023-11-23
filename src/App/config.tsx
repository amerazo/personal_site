import { Config } from 'types';
import { Email, GitHub, LinkedIn } from 'icons';

export const config: Config = {
  name: {
    display: 'Angelica Erazo',
    aria: 'My name is Angelica Erazo',
  },
  title: {
    display: 'Full Stack Developer | Cyber Security',
    aria: 'I am a software engineer',
  },
  buttons: [
    {
      name: 'github',
      display: 'GitHub',
      aria: 'Visit my GitHub profile',
      icon: <GitHub />,
      href: 'https://github.com/amerazo',
    },
    {
      name: 'linked-in',
      display: 'LinkedIn',
      aria: 'Visit my LinkedIn profile',
      icon: <LinkedIn />,
      href: 'https://www.linkedin.com/in/angelicaerazo/',
    },
    {
      name: 'email',
      display: 'Email',
      aria: 'Send me an email',
      icon: <Email />,
      href: 'mailto:angelica.erazo22@gmail.com',
    },
  ],
};

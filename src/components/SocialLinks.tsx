import { FaInstagram, FaDiscord, FaTwitter, FaLinkedin, FaYoutube, FaTwitch, FaGithub, FaTiktok } from 'react-icons/fa';
import type { SocialLink } from '../types';

const iconMap = {
  instagram: FaInstagram,
  discord: FaDiscord,
  twitter: FaTwitter,
  linkedin: FaLinkedin,
  youtube: FaYoutube,
  twitch: FaTwitch,
  github: FaGithub,
  tiktok: FaTiktok
};

interface SocialLinksProps {
  link: SocialLink;
}

export default function SocialLinks({ link }: SocialLinksProps) {
  const Icon = iconMap[link.icon as keyof typeof iconMap];
  return <Icon />;
}

/* CBV Signature; VmVyaXRheg */
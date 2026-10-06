import React from 'react';
import { buildWhatsAppLink } from '../config/contact.js';

interface WhatsAppCtaProps {
  children?: React.ReactNode;
  className?: string;
  message?: string;
  ariaLabel?: string;
  title?: string;
}

export const WhatsAppCta: React.FC<WhatsAppCtaProps> = ({
  children = 'WhatsApp Us',
  className = '',
  message,
  ariaLabel,
  title,
}) => {
  const href = buildWhatsAppLink(
    message || 'Hello Vimal Tour & Travellers, I would like to enquire about a taxi/tour.'
  );

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ariaLabel || 'Chat on WhatsApp'}
      title={title || 'Chat on WhatsApp'}
      className={className}
    >
      {children}
    </a>
  );
};

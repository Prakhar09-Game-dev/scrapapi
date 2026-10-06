import React from 'react';
import { formatPhoneLink, PRIMARY_PHONE } from '../config/contact.js';
import { WhatsAppCta } from './WhatsAppCta.js';

export const FloatingCTAs: React.FC = () => {
  return (
    <div className="hidden md:flex fixed bottom-6 right-6 z-40 flex-col gap-3">
      <WhatsAppCta
        ariaLabel="Chat on WhatsApp"
        title={`Chat on WhatsApp (${PRIMARY_PHONE})`}
        className="w-13 h-13 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform active:scale-95"
        message="Hello Vimal Tour & Travellers, I would like to enquire about a taxi or tour."
      >
        <span className="material-symbols-outlined text-[26px]">chat</span>
      </WhatsAppCta>

      <a
        aria-label="Call Helpline"
        className="w-13 h-13 bg-[#0d1c32] text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform active:scale-95 border border-white/20"
        href={formatPhoneLink(PRIMARY_PHONE)}
        title={`Call Helpline (${PRIMARY_PHONE})`}
      >
        <span className="material-symbols-outlined text-[26px] text-[#fed65b]">call</span>
      </a>
    </div>
  );
};

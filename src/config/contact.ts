export const BUSINESS_NAME = 'Vimal Tour & Travellers';
export const PRIMARY_PHONE = '9559113710';
export const SECONDARY_PHONE = '9453636321';
export const WHATSAPP_NUMBER = '919559113710';

export const formatPhoneLink = (phone: string) => `tel:${phone.replace(/\D/g, '')}`;

export const buildWhatsAppLink = (message: string, whatsappNumber = WHATSAPP_NUMBER) =>
  `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

export const buildInquiryMessage = (details: {
  tripType?: string;
  pickup?: string;
  drop?: string;
  date?: string;
  time?: string;
  passengers?: number | string;
  vehicle?: string;
  requirement?: string;
} = {}) => {
  const lines = [
    `Hello ${BUSINESS_NAME},`,
    '',
    'I would like to enquire about a taxi/tour.'
  ];

  if (details.tripType) lines.push(`Trip Type: ${details.tripType}`);
  if (details.pickup) lines.push(`Pickup: ${details.pickup}`);
  if (details.drop) lines.push(`Drop: ${details.drop}`);
  if (details.date) lines.push(`Date: ${details.date}`);
  if (details.time) lines.push(`Time: ${details.time}`);
  if (details.passengers) lines.push(`Passengers: ${details.passengers}`);
  if (details.vehicle) lines.push(`Vehicle: ${details.vehicle}`);
  if (details.requirement) lines.push(`Additional Requirements: ${details.requirement}`);

  lines.push('', 'Please share the quotation.');

  return lines.join('\n');
};

export const buildBookingMessage = (details: {
  pickup?: string;
  drop?: string;
  date?: string;
  time?: string;
  passengers?: number | string;
  vehicle?: string;
  tripType?: string;
  requirement?: string;
} = {}) =>
  buildInquiryMessage({
    tripType: details.tripType ?? 'Taxi Booking',
    pickup: details.pickup,
    drop: details.drop,
    date: details.date,
    time: details.time,
    passengers: details.passengers,
    vehicle: details.vehicle,
    requirement: details.requirement,
  });

import React, { useMemo, useState } from 'react';
import { buildWhatsAppLink, buildInquiryMessage } from '../config/contact.js';

const today = new Date().toISOString().split('T')[0];

export const QuoteFormSection: React.FC = () => {
  const [formData, setFormData] = useState({
    pickup: '',
    drop: '',
    travelDate: today,
    travelTime: '09:00',
    passengers: '2',
    vehicle: 'Sedan',
    requirement: '',
  });
  const [error, setError] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const message = useMemo(
    () =>
      buildInquiryMessage({
        tripType: 'Taxi Booking',
        pickup: formData.pickup,
        drop: formData.drop,
        date: formData.travelDate,
        time: formData.travelTime,
        passengers: formData.passengers,
        vehicle: formData.vehicle,
        requirement: formData.requirement,
      }),
    [formData]
  );

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (!formData.pickup || !formData.drop || !formData.travelDate || !formData.travelTime) {
      setError('Please fill in pickup, drop, date, and time to get your quote.');
      return;
    }

    setError('');
    setSubmitted(true);
    window.open(buildWhatsAppLink(message), '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="py-16 bg-[#f3f3f4]">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1.4fr] gap-8 items-start">
          <div className="bg-[#0d1c32] text-white rounded-3xl p-7 shadow-[0_18px_45px_rgba(13,28,50,0.12)]">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#ffe088]">Quick Quote</span>
            <h3 className="font-headline font-bold text-3xl mt-3 mb-3 leading-tight">
              Need a taxi in Varanasi?
            </h3>
            <p className="text-sm text-[#dfe8ff] leading-relaxed mb-6">
              Share your trip details and we’ll confirm the best vehicle, pickup time, and fare on WhatsApp.
            </p>

            <div className="space-y-3 text-sm text-[#eff3ff]">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-[#ffe088]">schedule</span>
                <span>Airport, station, city, and outstation bookings</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-[#ffe088]">verified</span>
                <span>Friendly local drivers and transparent pricing</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-[#ffe088]">call</span>
                <span>Call us directly at +91 9559113710 for urgent rides</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-3xl border border-[#e2e2e2] p-6 shadow-[0_8px_30px_rgba(15,23,42,0.04)]">
            <div className="flex items-center justify-between gap-3 mb-5">
              <div>
                <span className="text-xs font-bold text-[#735c00] uppercase tracking-[0.18em]">Get a Quote</span>
                <h3 className="font-headline font-bold text-2xl text-[#0d1c32] mt-1">Book Your Taxi</h3>
              </div>
              <span className="inline-flex items-center gap-1 rounded-full bg-[#e8f9ee] text-[#116b42] px-2.5 py-1 text-[10px] font-bold uppercase">
                <span className="material-symbols-outlined text-[14px]">check_circle</span>
                Fast response
              </span>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {error && (
                <div className="rounded-xl border border-red-200 bg-red-50 px-3 py-2 text-xs text-red-700">{error}</div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <label className="block text-xs font-semibold text-[#44474d]">
                  Pickup Location
                  <input
                    value={formData.pickup}
                    onChange={(e) => setFormData((current) => ({ ...current, pickup: e.target.value }))}
                    className="mt-1 w-full rounded-lg border border-[#c5c6cd] bg-[#f3f3f4] px-3 py-2.5 text-xs text-[#1a1c1c] outline-none focus:border-[#0d1c32]"
                    placeholder="Varanasi Airport"
                    required
                  />
                </label>

                <label className="block text-xs font-semibold text-[#44474d]">
                  Drop Location
                  <input
                    value={formData.drop}
                    onChange={(e) => setFormData((current) => ({ ...current, drop: e.target.value }))}
                    className="mt-1 w-full rounded-lg border border-[#c5c6cd] bg-[#f3f3f4] px-3 py-2.5 text-xs text-[#1a1c1c] outline-none focus:border-[#0d1c32]"
                    placeholder="Ayodhya or Hotel in Varanasi"
                    required
                  />
                </label>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <label className="block text-xs font-semibold text-[#44474d]">
                  Travel Date
                  <input
                    type="date"
                    min={today}
                    value={formData.travelDate}
                    onChange={(e) => setFormData((current) => ({ ...current, travelDate: e.target.value }))}
                    className="mt-1 w-full rounded-lg border border-[#c5c6cd] bg-[#f3f3f4] px-3 py-2.5 text-xs text-[#1a1c1c] outline-none focus:border-[#0d1c32]"
                    required
                  />
                </label>

                <label className="block text-xs font-semibold text-[#44474d]">
                  Travel Time
                  <input
                    type="time"
                    value={formData.travelTime}
                    onChange={(e) => setFormData((current) => ({ ...current, travelTime: e.target.value }))}
                    className="mt-1 w-full rounded-lg border border-[#c5c6cd] bg-[#f3f3f4] px-3 py-2.5 text-xs text-[#1a1c1c] outline-none focus:border-[#0d1c32]"
                    required
                  />
                </label>

                <label className="block text-xs font-semibold text-[#44474d]">
                  Passengers
                  <input
                    type="number"
                    min={1}
                    max={20}
                    value={formData.passengers}
                    onChange={(e) => setFormData((current) => ({ ...current, passengers: e.target.value }))}
                    className="mt-1 w-full rounded-lg border border-[#c5c6cd] bg-[#f3f3f4] px-3 py-2.5 text-xs text-[#1a1c1c] outline-none focus:border-[#0d1c32]"
                    required
                  />
                </label>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <label className="block text-xs font-semibold text-[#44474d]">
                  Vehicle Preference
                  <select
                    value={formData.vehicle}
                    onChange={(e) => setFormData((current) => ({ ...current, vehicle: e.target.value }))}
                    className="mt-1 w-full rounded-lg border border-[#c5c6cd] bg-[#f3f3f4] px-3 py-2.5 text-xs text-[#1a1c1c] outline-none focus:border-[#0d1c32]"
                  >
                    <option>Sedan</option>
                    <option>SUV</option>
                    <option>Tempo Traveller</option>
                    <option>Luxury Vehicle</option>
                  </select>
                </label>

                <label className="block text-xs font-semibold text-[#44474d]">
                  Additional Requirements
                  <input
                    value={formData.requirement}
                    onChange={(e) => setFormData((current) => ({ ...current, requirement: e.target.value }))}
                    className="mt-1 w-full rounded-lg border border-[#c5c6cd] bg-[#f3f3f4] px-3 py-2.5 text-xs text-[#1a1c1c] outline-none focus:border-[#0d1c32]"
                    placeholder="Child seat, luggage, elderly assistance"
                  />
                </label>
              </div>

              <button
                type="submit"
                className="w-full rounded-xl bg-[#0d1c32] px-4 py-3 text-xs font-bold text-white transition hover:bg-[#111f38]"
              >
                Get a Quote
              </button>

              {submitted && (
                <p className="text-[11px] text-[#515f78]">
                  Your request has been prepared for WhatsApp. If the link did not open, call +91 9559113710 directly.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

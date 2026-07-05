import React, { useState } from 'react';

const PREFIXES = ['Mr.', 'Mrs.', 'Miss', 'Mr. & Mrs.', 'Family', 'Dear'];

export default function Admin() {
  const [prefix, setPrefix] = useState(PREFIXES[0]);
  const [guestName, setGuestName] = useState('');

  const generatedLink = `${window.location.origin}/?prefix=${encodeURIComponent(prefix)}&name=${encodeURIComponent(guestName)}`;

  const messageTemplate = `Dear ${prefix} ${guestName} ❤️

With joyful hearts, we warmly invite you to celebrate one of the most special days of our lives as we begin our journey together.

Please view our wedding invitation and all the event details through the link below 🌐:

${generatedLink}

Your presence would truly mean the world to us, and we would be honored to celebrate this beautiful moment together.

With love,
❤️ Pavithra & Milinda`;

  const copyLink = async () => {
    await navigator.clipboard.writeText(generatedLink);
    alert('Link copied!');
  };

  const copyMessage = async () => {
    await navigator.clipboard.writeText(messageTemplate);
    alert('Message copied!');
  };

  return (
    <div className="min-h-screen h-[100dvh] overflow-y-auto bg-[#fdfaf5] p-4 md:p-8 font-montserrat flex flex-col items-center smooth-mobile-scroll">
      <h1 className="text-3xl font-cinzel text-theme-900 mb-8">Wedding Invitation Link Generator</h1>

      <div className="bg-white p-8 rounded-2xl shadow-lg border border-theme-200 w-full max-w-2xl">
        <div className="space-y-6">
          <div>
            <label className="block text-sm uppercase tracking-widest text-stone-500 font-bold mb-2">Prefix</label>
            <select
              value={prefix}
              onChange={(e) => setPrefix(e.target.value)}
              className="w-full border border-theme-300 p-3 rounded-lg focus:outline-none focus:border-theme-500"
            >
              {PREFIXES.map(p => <option key={p} value={p}>{p}</option>)}
            </select>
          </div>

          <div>
            <label className="block text-sm uppercase tracking-widest text-stone-500 font-bold mb-2">Guest Name</label>
            <input
              type="text"
              value={guestName}
              onChange={(e) => setGuestName(e.target.value)}
              placeholder="e.g. Sanjaya"
              className="w-full border border-theme-300 p-3 rounded-lg focus:outline-none focus:border-theme-500"
            />
          </div>

          <div className="pt-4 flex flex-wrap gap-4">
            <button
              onClick={copyLink}
              disabled={!guestName}
              className="px-6 py-3 bg-theme-600 text-white rounded-full font-bold uppercase tracking-widest text-xs hover:bg-theme-700 disabled:opacity-50"
            >
              Copy Link Only
            </button>
            <button
              onClick={copyMessage}
              disabled={!guestName}
              className="px-6 py-3 bg-theme-800 text-white rounded-full font-bold uppercase tracking-widest text-xs hover:bg-theme-900 disabled:opacity-50"
            >
              Copy Full Message
            </button>
          </div>
        </div>

        {guestName && (
          <div className="mt-8 pt-8 border-t border-theme-100">
            <h2 className="text-sm uppercase tracking-widest text-stone-500 font-bold mb-4">Generated Message:</h2>
            <pre className="bg-stone-50 p-6 rounded-lg whitespace-pre-wrap font-sans text-sm text-stone-700 border border-stone-200">
              {messageTemplate}
            </pre>
          </div>
        )}
      </div>
    </div>
  );
}

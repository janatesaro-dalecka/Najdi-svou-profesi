import React from 'react';

const OSTRAHA_IMAGE_URL = 'https://res.cloudinary.com/dqpxwge29/image/upload/v1762525836/bank._policista_vaixiq.png';
const PRAVNIK_IMAGE_URL = 'https://res.cloudinary.com/dqpxwge29/image/upload/v1762525857/pravnik2_pzwlxx.png';
const MANAZER_IMAGE_URL = 'https://res.cloudinary.com/dqpxwge29/image/upload/v1762525835/manazer_ympyiv.png';
const KUCHAR_IMAGE_URL = 'https://res.cloudinary.com/dqpxwge29/image/upload/v1762525843/kuchar_ycvvjp.png';
const MARKETINGOVY_EXPERT_IMAGE_URL = 'https://res.cloudinary.com/dqpxwge29/image/upload/v1762525849/marketing_ev4rnm.png';
const EKONOM_IMAGE_URL = 'https://res.cloudinary.com/dqpxwge29/image/upload/v1762525850/ekonom_ymgr3x.png';
const IT_EXPERT_IMAGE_URL = 'https://res.cloudinary.com/dqpxwge29/image/upload/v1762525846/IT_fevpix.png';
const STATISTIK_IMAGE_URL = 'https://res.cloudinary.com/dqpxwge29/image/upload/v1762525846/statistik_uuomel.png';

export const OstrahaImage: React.FC<{ className?: string }> = ({ className }) => (
  <img
    src={OSTRAHA_IMAGE_URL}
    alt="Ostraha"
    className={`rounded-full object-cover ${className}`}
  />
);

export const PravnikImage: React.FC<{ className?: string }> = ({ className }) => (
  <img
    src={PRAVNIK_IMAGE_URL}
    alt="Právník"
    className={`rounded-full object-cover ${className}`}
  />
);

export const ManazerImage: React.FC<{ className?: string }> = ({ className }) => (
  <img
    src={MANAZER_IMAGE_URL}
    alt="Manažer"
    className={`rounded-full object-cover ${className}`}
  />
);

export const KucharImage: React.FC<{ className?: string }> = ({ className }) => (
    <img
      src={KUCHAR_IMAGE_URL}
      alt="Kuchař"
      className={`rounded-full object-cover ${className}`}
    />
);

export const MarketingovyExpertImage: React.FC<{ className?: string }> = ({ className }) => (
    <img
      src={MARKETINGOVY_EXPERT_IMAGE_URL}
      alt="Marketingový expert"
      className={`rounded-full object-cover ${className}`}
    />
);

export const EkonomImage: React.FC<{ className?: string }> = ({ className }) => (
    <img
      src={EKONOM_IMAGE_URL}
      alt="Ekonom"
      className={`rounded-full object-cover ${className}`}
    />
);

export const ItExpertImage: React.FC<{ className?: string }> = ({ className }) => (
    <img
      src={IT_EXPERT_IMAGE_URL}
      alt="IT expert"
      className={`rounded-full object-cover ${className}`}
    />
);

export const StatistikImage: React.FC<{ className?: string }> = ({ className }) => (
    <img
      src={STATISTIK_IMAGE_URL}
      alt="Statistik"
      className={`rounded-full object-cover ${className}`}
    />
);
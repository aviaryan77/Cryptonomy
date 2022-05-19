import React from 'react';

export interface ICrypto {
  id: string;
  name: string;
  price: number;
}

export interface ICryptoProfile {
  name: string;
  symbol: string;
  profile: {
    general: {
      background: {
        background_details: string;
      };
      overview: {
        tagline: string;
        project_details: string;
      };
    };
  };
}

export const CryptoProfileInit: ICryptoProfile = {
  name: '',
  symbol: '',
  profile: {
    general: {
      overview: {
        tagline: '',
        project_details: '',
      },
      background: {
        background_details: '',
      },
    },
  },
};

export interface ICryptoMarketData {
  market_data: {
    price_usd: number;
    percent_change_usd_last_1_hour: number;
    percent_change_usd_last_24_hours: number;
  };
}

export const CryptoMarketDataInit: ICryptoMarketData = {
  market_data: {
    price_usd: 0,
    percent_change_usd_last_1_hour: 0,
    percent_change_usd_last_24_hours: 0,
  },
};

export const CryptoInit: ICrypto[] = [
  {
    id: '1e31218a-e44e-4285-820c-8282ee222035',
    name: 'BTC',
    price: 29795.16041021309,
  },
  {
    id: '21c795f5-1bfd-40c3-858e-e9d7e820c6d0',
    name: 'ETH',
    price: 2025.4291580368842,
  },
  {
    id: '51f8ea5e-f426-4f40-939a-db7e05495374',
    name: 'USDT',
    price: 0.9982156495766866,
  },
  {
    id: '4515ba15-2719-4183-b0ca-b9255d55b67e',
    name: 'USDC',
    price: 0.9999533865760585,
  },
  {
    id: '7dc551ba-cfed-4437-a027-386044415e3e',
    name: 'BNB',
    price: 301.39808460468834,
  },
  {
    id: '97775be0-2608-4720-b7af-f85b24c7eb2d',
    name: 'XRP',
    price: 0.4263466878046992,
  },
  {
    id: '362f0140-ecdd-4205-b8a0-36f0fd5d8167',
    name: 'ADA',
    price: 0.5578271865898737,
  },
  {
    id: 'b3d5d66c-26a2-404c-9325-91dc714a722b',
    name: 'SOL',
    price: 54.21384347934844,
  },
  {
    id: '5da7bde4-61e9-4a6f-9fc3-7ed66effb198',
    name: 'BUSD',
    price: 0.9998713789389305,
  },
  {
    id: '7d793fa7-5fc6-432a-b26b-d1b10769d42e',
    name: 'DOGE',
    price: 0.08843538612210766,
  },
  {
    id: 'da6a0575-ec95-4c47-855d-5fc6a3e22ada',
    name: 'DOT',
    price: 10.373469800864305,
  },
  {
    id: '2db6b38a-681a-4514-9d67-691e319597ee',
    name: 'AVAX',
    price: 33.21987638014644,
  },
  {
    id: '81bbf507-29d5-4458-8d42-b81d7c197996',
    name: 'WBTC',
    price: 29809.230073388746,
  },
  {
    id: '1c077d6e-99c7-491c-b24d-1d359011cd81',
    name: 'TRX',
    price: 0.07149731433043,
  },
  {
    id: '8c4f84a7-6484-4074-8c17-fe363a243e7f',
    name: 'SHIB',
    price: 0.000012288145387923571,
  },
  {
    id: 'a3b64831-4288-48bd-a3e7-eb4f77f6f740',
    name: 'DAI',
    price: 0.9981034160946746,
  },
  {
    id: '4b474270-99ba-4a18-869d-11cd3fc0201a',
    name: 'MATIC',
    price: 0.6972108976828647,
  },
  {
    id: 'c7c3697d-1b9c-42bf-9664-a366634ce2b3',
    name: 'LTC',
    price: 71.6722651425543,
  },
  {
    id: 'de533c50-6a57-4975-bb83-62862fb9af09',
    name: 'CRO',
    price: 0.19577390953602244,
  },
  {
    id: '28681c70-d3a1-4139-942e-c4bdcc49ad64',
    name: 'LEO',
    price: 4.99972966872703,
  },
];

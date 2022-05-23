// read more information in admob/admob.md

import {TestIds, BannerAd, BannerAdSize} from '@react-native-firebase/admob';

export const ADMOB_APP_ID_ANDROID = 'ca-app-pub-4431278608373634~3200116435'; // no required here change in firebase.config before android deployment
export const ADMOB_APP_ID_IOS = ''; // no required here change in firebase.config before ios deployment
export const ADMOB_BANNER_UNIT_ID = __DEV__
  ? TestIds.BANNER
  : 'ca-app-pub-4431278608373634/6666951672'; // for production,, Sometimes we have to wait several days for the ads delivery.
export const ADMOB_INTERSTITIAL_UNIT_ID = __DEV__
  ? TestIds.INTERSTITIAL
  : 'ca-app-pub-4431278608373634/3466073262';
export const ADMOB_REWARDED_UNIT_ID = __DEV__
  ? TestIds.REWARDED
  : 'ca-app-pub-4431278608373634/5900664912';

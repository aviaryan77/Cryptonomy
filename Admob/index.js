import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {
  TestIds,
  BannerAd,
  BannerAdSize,
  InterstitialAd,
  AdEventType,
  RewardedAd,
  RewardedAdEventType,
} from '@react-native-firebase/admob';
import {
  ADMOB_BANNER_UNIT_ID,
  ADMOB_INTERSTITIAL_UNIT_ID,
  ADMOB_REWARDED_UNIT_ID,
} from '../constants/admob';

export const BannerAdv = ({containerStyle, ...props}) => {
  return (
    <View style={{...containerStyle}}>
      <BannerAd
        unitId={ADMOB_BANNER_UNIT_ID}
        size={BannerAdSize.SMART_BANNER}
        requestOptions={{
          requestNonPersonalizedAdsOnly: true,
        }}
        onAdLoaded={() => {
          console.log('Advert loaded');
        }}
        onAdFailedToLoad={error => {
          console.error('Advert failed to load: ', error);
        }}
        {...props}
      />
    </View>
  );
};

export const showInterstitialAd = () => {
  // Create a new instance
  const interstitialAd = InterstitialAd.createForAdRequest(
    ADMOB_INTERSTITIAL_UNIT_ID,
  );
  alert(interstitialAd);
  // Add event handlers
  interstitialAd.onAdEvent((type, error) => {
    if (type === AdEventType.LOADED) {
      interstitialAd.show();
    }
  });

  // Load a new advert
  interstitialAd.load();
};

export const showRewardAd = () => {
  // Create a new instance
  const rewardAd = RewardedAd.createForAdRequest(ADMOB_REWARDED_UNIT_ID);

  // Add event handlers
  rewardAd.onAdEvent((type, error) => {
    if (type === RewardedAdEventType.LOADED) {
      rewardAd.show();
    }

    if (type === RewardedAdEventType.EARNED_REWARD) {
      console.log('User earned reward of 5 lives');
      Alert.alert(
        'Reward Ad',
        'You just earned a reward of 5 lives',
        [{text: 'OK', onPress: () => console.log('OK Pressed')}],
        {cancelable: true},
      );
    }
  });

  // Load a new advert
  rewardAd.load();
};

const styles = StyleSheet.create({});

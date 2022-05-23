import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  ActivityIndicator,
  useWindowDimensions,
  StatusBar,
  Dimensions,
} from 'react-native';
import RenderHtml from 'react-native-render-html';
import axios from 'axios';
import {baseURL} from '../constants';
import {CryptoMarketDataInit, CryptoProfileInit} from '../types';
import TextAnimator from '../components/TextAnimator';

const DetailScreen = ({route, navigation}: {route: any; navigation: any}) => {
  const {width} = useWindowDimensions();
  const id = route.params.id;
  const [cryptoProfile, setCryptoProfile] = useState(CryptoProfileInit);
  const [cryptoMarketData, setCryptoMarketData] =
    useState(CryptoMarketDataInit);
  const [cryptoDataLoaded, setCryptoDataLoaded] = useState(false);
  useEffect(() => {
    Promise.all([
      axios.get(`${baseURL}cryptos/market-data/${id}`),
      axios.get(`${baseURL}cryptos/profile/${id}`),
    ])
      .then(([resMarketData, resProfile]) => {
        setCryptoMarketData(resMarketData.data);
        setCryptoProfile(resProfile.data);
        setCryptoDataLoaded(true);
      })
      .catch(err => console.log(err));
  }, []);

  useEffect(() => {
    navigation.setOptions({
      title: cryptoProfile.name,
    });
  }, [cryptoProfile, navigation]);

  return (
    <View style={styles.container}>
      <StatusBar
        translucent
        barStyle={'light-content'}
        backgroundColor={'transparent'}
      />
      {!cryptoDataLoaded ? (
        <ActivityIndicator size="large" color="#ffab00" />
      ) : (
        <>
          <View style={styles.header}>
            <View style={styles.headerInfo}>
              <Text style={styles.name}>{cryptoProfile.name}</Text>
              <Text style={styles.symbol}>{cryptoProfile.symbol}</Text>
              <Text style={styles.price}>
                {`$ ${convert(cryptoMarketData.market_data.price_usd)}`}
              </Text>
            </View>

            <TextAnimator
              content={cryptoProfile?.profile?.general?.overview?.tagline}
              textStyle={styles.line}
              style={styles.headerTagLine}
              duration={500}
              // onFinish={_onFinish}
            />
          </View>
          <View style={styles.priceChanges}>
            <View style={styles.priceChangeRow}>
              <Text style={styles.line}>Percent Change 1h</Text>
              <Text style={styles.line}>
                {` % ${convert(
                  cryptoMarketData.market_data.percent_change_usd_last_1_hour,
                )}`}
              </Text>
            </View>
            <View style={styles.priceChangeRow}>
              <Text style={styles.line}>Percent Change 24h</Text>
              <Text style={styles.line}>
                {` % ${convert(
                  cryptoMarketData.market_data.percent_change_usd_last_24_hours,
                )}`}
              </Text>
            </View>
          </View>
          <ScrollView style={styles.cryptoInfo}>
            <View style={styles.cryptoInfoRow}>
              <Text style={styles.cryptoInfoTitle}>Overview</Text>

              <RenderHtml
                contentWidth={width}
                source={{
                  html: `<p style="color: #fff">${cryptoProfile.profile.general.overview.project_details}</p>`,
                }}
              />
            </View>
            <View style={styles.cryptoInfoRow}>
              <Text style={styles.cryptoInfoTitle}>Background</Text>

              <RenderHtml
                contentWidth={width}
                source={{
                  html: `<p style="color: #fff">${cryptoProfile.profile.general.background.background_details}</p>`,
                }}
              />
            </View>
          </ScrollView>
        </>
      )}
    </View>
  );
};

export default DetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    justifyContent: 'center',
    backgroundColor: '#272d42',
  },

  header: {
    backgroundColor: '#000',
    height: 100,
    padding: 10,
    borderRadius: 10,
    marginBottom: 15,
  },

  headerInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  headerTagLine: {
    marginTop: 10,
  },

  name: {
    fontSize: 24,
    color: '#fff',
  },

  symbol: {
    fontSize: 15,
    padding: 5,
    backgroundColor: '#272d42',
    color: '#fff',
  },

  price: {
    fontSize: 28,
    color: '#ffab00',
    width: 150,
    textAlign: 'right',
  },

  line: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'left',
  },
  priceChanges: {
    backgroundColor: '#000',
    height: 70,
    padding: 10,
    borderRadius: 10,
    marginBottom: 15,
  },
  priceChangeRow: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: Dimensions.get('screen').width * 0.8,
  },

  cryptoInfo: {
    backgroundColor: '#000',
    padding: 10,
    flex: 1,
    borderRadius: 10,
    marginBottom: 15,
  },
  cryptoInfoTitle: {
    color: '#ffab00',
    fontSize: 22,
    marginBottom: 5,
  },
  cryptoInfoRow: {
    flex: 1,
    marginBottom: 25,
  },
});

const convert = (price: number) => {
  return Math.round(price * 100) / 100;
};

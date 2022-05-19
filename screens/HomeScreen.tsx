import {
  Text,
  View,
  FlatList,
  Pressable,
  StyleSheet,
  Dimensions,
  StatusBar,
} from 'react-native';

import React, {useEffect, useState} from 'react';
import {CryptoInit, ICrypto} from '../types';
import TextAnimator from '../components/TextAnimator';
import {socket} from '../App';
import {theme} from '../constants/theme';

export const HomeScreen = ({navigation}: {navigation: any}) => {
  const [crypto, setCrypto] = useState(CryptoInit);

  useEffect(() => {
    socket.on('crypto', data => {
      console.log('new data', data);
      setCrypto(data);
    });
  }, []);

  const _onFinish = () => {
    // Alert.alert('Animation', 'It is done!');
  };
  const renderItem = ({item, index}: {item: ICrypto; index: number}) => {
    return (
      <Pressable
        style={styles.crypto}
        onPress={() => openCryptoDetail(item.id)}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.price}>{item?.price?.toFixed(2)}</Text>
      </Pressable>
    );
  };

  const openCryptoDetail = (id: string) => {
    navigation.navigate('DetailScreen', {id: id});
  };
  return (
    <View style={styles.home}>
      <StatusBar
        translucent
        barStyle={'light-content'}
        backgroundColor={'transparent'}
      />
      <FlatList
        showsVerticalScrollIndicator={false}
        data={crypto}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
      <TextAnimator
        content="Mobile was Internet 2.0. It changed everything. Crypto is Internet 3.0. ❤️️️️"
        textStyle={styles.textStyle}
        style={styles.containerStyle}
        duration={500}
        onFinish={_onFinish}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  home: {
    backgroundColor: '#272d42',
    color: '#fff',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  crypto: {
    width: Dimensions.get('window').width * 0.9,
    borderRadius: 5,
    backgroundColor: '#000000',
    padding: 20,
    borderWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 10,
  },
  name: {
    color: '#ffffff',
    fontSize: 24,
  },
  price: {
    color: theme.textTint,
    fontSize: 28,
  },
  containerStyle: {
    width: Dimensions.get('screen').width * 0.9,
    marginTop: 10,
    alignItems: 'center',
    marginBottom: 20,
  },
  textStyle: {
    fontSize: 14,
    fontWeight: 'bold',
    fontFamily: 'Menlo',

    color: theme.textTint,
    lineHeight: 18,
  },
});

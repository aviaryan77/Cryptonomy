[blog](https://medium.com/geekculture/google-admob-for-react-native-via-firebase-11a2a6fa555a)

Type of AdMob ads

- Banner

- Interstitial

- Rewarded

- Native

Setup your Admob account
Signup then Sign in to your AdMob account at [https://apps.admob.com](https://apps.admob.com).

create two app there for android and ios and get their Admob App Id respectively

in react native app add two dependencies

```js
yarn add @react-native-firebase/app
yarn add @react-native-firebase/admob
```

add admob_android_app_id in firebase.json
please note before deplyment change this id as per ios/ android

```json
{
  "react-native": {
    "admob_android_app_id": "ca-app-pub-xxxxxxxx~xxxxxxxx"
  }
}
```

# React Native Project

This is a React Native project, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).

## Dependencies

This project includes the following key dependencies:

- **[axios](https://axios-http.com/)**: HTTP client library used for making API calls to fetch data from external services
- **[moment](https://momentjs.com/)**: Date manipulation library used for formatting and parsing dates throughout the application
- **[phosphor-react-native](https://github.com/duongdev/phosphor-react-native)**: Icon library that provides a comprehensive set of icons designed to match the visual design as closely as possible
- **[react-native-bootsplash](https://github.com/zoontek/react-native-bootsplash)**: Library used to implement and customize the splash screen displayed when the app launches
- **[react-native-svg](https://github.com/software-mansion/react-native-svg)**: SVG rendering library for displaying scalable vector graphics

## Features

- **Custom App Icons**: The project includes custom app icons configured for both iOS and Android platforms
- **Splash Screen**: Implemented using react-native-bootsplash for a professional app launch experience
- **API Integration**: Axios is configured for seamless API communication
- **Date Handling**: Moment.js integration for consistent date formatting across the app
- **Icon System**: Phosphor icons provide a cohesive visual experience matching the design specifications

# Getting Started

> **Note**: Make sure you have completed the [Set Up Your Environment](https://reactnative.dev/docs/set-up-your-environment) guide before proceeding.

## Step 1: Start Metro

First, you will need to run **Metro**, the JavaScript build tool for React Native.

To start the Metro dev server, run the following command from the root of your React Native project:

```sh
# Using npm
npm start

# OR using Yarn
yarn start
```

## Step 2: Build and run your app

With Metro running, open a new terminal window/pane from the root of your React Native project, and use one of the following commands to build and run your Android or iOS app:

### Android

```sh
# Using npm
npm run android

# OR using Yarn
yarn android
```

### iOS

For iOS, remember to install CocoaPods dependencies (this only needs to be run on first clone or after updating native deps).

The first time you create a new project, run the Ruby bundler to install CocoaPods itself:

```sh
bundle install
```

Then, and every time you update your native dependencies, run:

```sh
bundle exec pod install
```

If you already have CocoaPods configured, you can simply run:

```sh
npx pod-install
```

For more information, please visit [CocoaPods Getting Started guide](https://guides.cocoapods.org/using/getting-started.html).

```sh
# Using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up correctly, you should see your new app running in the Android Emulator, iOS Simulator, or your connected device.

This is one way to run your app — you can also build it directly from Android Studio or Xcode.


### App working video

iOS




https://github.com/user-attachments/assets/e2b81e88-c131-4493-948b-9721efecca6c



Android

https://github.com/user-attachments/assets/6008d3e2-6475-43ff-8bad-89a66e84760f






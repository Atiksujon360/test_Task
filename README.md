## Quick start

#### 1. Clone repository
 ```command
git clone  
```

#### 2.  Move to the appropriate directory:
```command
cd react-native-stack
```

#### 3. Rename the project: 

```command
npx react-native-rename <YOUR_PROJECT_NAME>
```

> Note: Before `yarn install`

#### 4. Android and iOS runnning is different. So that follow the steps below.

IOS:

```command
npx pod-install # to install pod dependencies
npm run ios or directly run from Xcode  # to run the iOS application
```

Android:

```command
# Make sure the ANDROID_HOME environment variable is configured properly

npm run android # to run the Android application
```

Start the server:
```command
npm run start
```

Now you're ready to rock!

> Please refer this link for react native setup: https://reactnative.dev/docs/environment-setup

## Stack requirement

- Xcode 12 or above
- Latest Android Studio
- Cocoapods 1.10.1
- Node 12 or above

## Features

- React native 0.64
- React navigation V5
- Redux with thunk
- Axios for API calls
- Push Notifications
- Vector Icons with font family support
- Splash screen
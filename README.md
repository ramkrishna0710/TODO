# Setting up React Native Project with Expo and Redux Toolkit

Follow the steps below to set up a React Native project using Expo, Redux Toolkit, and other necessary dependencies:

## Prerequisites

- Node.js installed on your system
- Expo CLI installed globally (optional but recommended):
  ```bash
  npm install -g expo-cli
  ```

## Steps

### 1. Create a New Expo Project

```bash
npx expo init my-project
cd my-project
```

### 2. Install Dependencies

Install Redux Toolkit, React-Redux, Redux Persist, and Async Storage:

```bash
npm install @reduxjs/toolkit react-redux redux redux-persist @react-native-async-storage/async-storage
```

### 3. Configure Redux Toolkit and Persist

#### Create a `redux` folder in your project:

```bash
mkdir redux
```

#### Add the following files:

- **`store.js`**:
  ```javascript
  import { configureStore } from '@reduxjs/toolkit';
  import { persistStore, persistReducer } from 'redux-persist';
  import storage from '@react-native-async-storage/async-storage';
  import { combineReducers } from 'redux';

  // Example slice
  import exampleSlice from './exampleSlice';

  const persistConfig = {
    key: 'root',
    storage,
  };

  const rootReducer = combineReducers({
    example: exampleSlice,
  });

  const persistedReducer = persistReducer(persistConfig, rootReducer);

  export const store = configureStore({
    reducer: persistedReducer,
  });

  export const persistor = persistStore(store);
  ```

- **`exampleSlice.js`**:
  ```javascript
  import { createSlice } from '@reduxjs/toolkit';

  const exampleSlice = createSlice({
    name: 'example',
    initialState: { value: 0 },
    reducers: {
      increment: (state) => {
        state.value += 1;
      },
      decrement: (state) => {
        state.value -= 1;
      },
    },
  });

  export const { increment, decrement } = exampleSlice.actions;
  export default exampleSlice.reducer;
  ```

#### Wrap Your App with Providers:

Modify `App.js` to include the Redux Provider and PersistGate:

```javascript
import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './redux/store';
import Main from './Main'; // Your main component

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Main />
      </PersistGate>
    </Provider>
  );
}
```

### 4. Build the Project for Distribution

Expo provides an easy way to build your project for distribution without ejecting or using `prebuild`. Use Expo's build services:

#### Android Build:

```bash
npx expo build:android
```

#### iOS Build:

```bash
npx expo build:ios
```

Expo will guide you through the build process, and the resulting APK or IPA file will be available for download once the build is complete.

## Additional Notes

- Ensure you have an Expo account and are logged in to use Expo build services.
- Test your app thoroughly before distributing the APK or IPA.

---
Your React Native project is now set up with Redux Toolkit, Redux Persist, and Async Storage, and you can build it using Expo!

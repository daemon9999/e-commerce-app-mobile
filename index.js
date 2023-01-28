/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './src/App';
import store from './src/store';
import {name as appName} from './app.json';
import { Provider } from 'react-redux';
const RNProvider = () => (
    <Provider store={store}>
        <App/>
    </Provider>
)
AppRegistry.registerComponent(appName, () => RNProvider);

import 'babel-polyfill';
import 'regenerator-runtime/runtime';
import { AppRegistry, UIManager } from 'react-native';

import './app/push';
import RocketChat from './app/index';

UIManager.setLayoutAnimationEnabledExperimental(true);

import './app/ReactotronConfig';
//import './app/utils/LogConfig '

//LogConfig.configure({ enableLog: true })
// import { AppRegistry } from 'react-native';
// import Routes from './app/routes';
//
AppRegistry.registerComponent('RocketChatRN', () => RocketChat);

import React from 'react';
import {View} from 'react-native';
import Styles from './Styles';

const Background = props => (
  <View style={Styles.background}>{props.children}</View>
);

export default Background;

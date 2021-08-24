import React, {useEffect} from 'react';
import {BackHandler} from 'react-native';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Root from './Root';
import SplashScreen from 'react-native-splash-screen';

const AppNavigator = ({dispatch}) => {
  useEffect(() => {
    
    SplashScreen.hide();
    return () => {
      BackHandler.removeEventListener('hardwareBackPress', onBackPress);
    };
  });

  /**
   * Method calls on android hardware back press.
   * Dispatched to previous screen if available.
   */
  const onBackPress = () => {
    return false;
  };

  return <Root />;
};

AppNavigator.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  nav: state.nav,
});

export default connect(mapStateToProps)(AppNavigator);

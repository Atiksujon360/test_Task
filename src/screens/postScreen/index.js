import React, {useState, useEffect} from 'react';
import {View, FlatList, Text, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import { Background} from '../../components';
import Styles from './Styles';
import {getPost} from '../../actions';

const PostScreen = (props) => {
  const {dispatch, navigation: {navigate}} = props;
  const [userData, setUserData] = useState([]);

  useEffect(()=>{
    // const {dispatch} = this.props;
    dispatch(getPost())
    .then(response => {
      // handle response
      console.log("API response", response)
      setUserData(response.data)
    })
    .catch(error => {
      // handle error
      console.log("API error", error)
    });

    console.log(props);
  },[])

  const itemClicked = (userId, id)=>{
    console.log(userId, id);
    navigate('CommentScreen', {userId, id});
  }
  return (
    <Background>
      <KeyboardAwareScrollView keyboardShouldPersistTaps="always">
        <View style={Styles.container}>
          <Text style = {Styles.headerText}>This is a list of all the posts fetched.</Text>
        <FlatList
            style={Styles.flatlistStyles}
            data={userData}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item, index }) => {
              return (
                <TouchableOpacity style = {Styles.itemContainer} onPress = {()=>itemClicked(item.userId, item.id)}>
                  <Text style = {Styles.itemName}>{item.title}</Text>
                  <Text style = {Styles.itemBody}>{item.body}</Text>
                </TouchableOpacity>
              );
            }}
          />
        </View>
      </KeyboardAwareScrollView>
    </Background>
  );
};

PostScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  // Access state from Store.
});

export default connect(mapStateToProps)(PostScreen);

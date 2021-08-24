import React, {useEffect, useState} from 'react';
import {View, Text, FlatList} from 'react-native';

import Style from './style';
import {connect} from 'react-redux';
import {getComments} from '../../actions';
import { Input} from '../../components';


const CommentScreen = (props) => {
  const  {dispatch, route:{params:{userId, id}}}= props;
  const  [commentData, setCommentData ] = useState([]);
  const [searchText, setSearchText] = useState('');
  const txtValueArr = [];
  useEffect(() => {
    dispatch(getComments(userId))
      .then(response => {
        // handle response
        response.data.map((item, index)=>{
          response.data[index].isVisible = true;
        })
        setCommentData(response.data);
      })
      .catch(error => {
        // handle error
        console.log("API error", error)
      });
  }, [])

  useEffect(()=>{
console.log("commentData",commentData)
  },[commentData])

  const handleSearch = (text)=>{
    setSearchText(text);
   let commentDataShadow = commentData;
    commentDataShadow.map((item, index)=>{
      // txtValueArr[index] = searchText || item.body || item.name;
      if ((item.body.indexOf(text) > -1) || (item.name.indexOf(text) > -1)) {
        txtValueArr[index] = true
        commentDataShadow[index].isVisible = true;
      } else {
        commentDataShadow[index].isVisible = false;
        txtValueArr[index] = false
      }
    })

    setCommentData(commentDataShadow);

    console.log("txtvaluearr", txtValueArr,commentDataShadow);
  }
    return (
      <View style={Style.container}>
      <Input
              placeholder="Search"
              onChangeText={text => handleSearch(text)}
              maxLength={30}
            />

        <FlatList
            style={Style.flatlistStyles}
            data={commentData}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item, index }) => {
              return (
                (
                  !!item.isVisible ?
                  <View style = {Style.itemContainer}>
                    <Text  style = {Style.itemName}>{item.name}</Text>
                    <Text style = {Style.itemBody}>{item.body}</Text>
                  </View>  : null
                )
                
              );
            }}
          />
    
      </View>
    );
  
}

const mapStateToProps = state => ({
  // Access state from Store.
});

export default connect(mapStateToProps)(CommentScreen);
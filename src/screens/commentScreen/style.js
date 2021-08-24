import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#dddddd',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerStyles: {
    color: '#fff',
    alignSelf: 'center',
    fontSize: 20,
  },
  flatlistStyles:{ marginTop: 5 },
  itemContainer: {backgroundColor:'white', marginVertical:10, padding:5},
  itemName:{fontSize:20, fontWeight:'bold', marginBottom:10, color:'blue'},
  itemBody:{fontSize:14, marginBottom:10}
});

export default styles;

import {StyleSheet} from 'react-native';
import Color from '../utility/colorConstant';

const styles = StyleSheet.create({
  inputStyle: {
    width: '100%',
    height: 45,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    color: '#000',
    paddingHorizontal: 7,
    fontSize: 18,
    backgroundColor: '#fff',
    marginVertical: 10,
  },
  background: {
    flex: 1,
    backgroundColor: '#dddddd',
    marginTop:20
  },
  dialogContainer: {
    justifyContent: 'flex-end',
  },
  container: {
    width: '100%',
    backgroundColor: Color.ALERT,
  }
});

export default styles;

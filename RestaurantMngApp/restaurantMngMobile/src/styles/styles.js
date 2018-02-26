import { StyleSheet, Dimensions } from 'react-native';
const window = Dimensions.get('window');

export const IMAGE_HEIGHT = window.width / 3;
export const IMAGE_HEIGHT_SMALL = window.width /7;

export const NAVBUTTON_HEIGHT = window.width / 2;
export const NAVBUTTON_HEIGHT_SMALL = window.width /15;

export default StyleSheet.create({
  container: {
    backgroundColor: '#4c69a5',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 50,
    backgroundColor: '#fff',
    marginHorizontal: 10,
    marginVertical: 5,
    width: window.width - 30,
  },
  logo: {
    height: IMAGE_HEIGHT,
    resizeMode: 'contain',
    marginBottom: 20,
    padding:10,
    marginTop:20
  },
  register:{
    marginBottom:20, 
    width:window.width -100,
    alignItems:'center',
    justifyContent:'center',
    height:50,
    backgroundColor: '#ffae',
  },
  txtInput: {
    width: 250,
    backgroundColor: 'rgba(255,255,255, 0.3)',
    borderRadius: 25,
    paddingHorizontal: 16,
    fontSize: 19,
    marginVertical: 10
  },
  button1: {
    width: 150,
    backgroundColor: 'rgba(255,255,255, .3)',
    borderRadius:16,
    marginVertical: 7,
    padding: 10
  },
  button1Txt: {
      fontSize: 19,
      fontWeight: '500',
      color: '#fff',
      textAlign: 'center'
  },
  otherTxt: {
    fontSize: 19,
    color: '#fff',
    textAlign: 'center'
}

    
});

import { StyleSheet } from 'react-native';

const FindFriendsScreenStyles = StyleSheet.create({
  bigContainer:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'rgba(245, 245, 220, 0.79)'
  } , 
  container: {
    width: '90%',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#ABC48C',
    borderRadius:15,
    marginBottom:20,

  },
  header:{
    position: 'absolute', 
    top: 50, 
    alignSelf: 'center',
    fontSize:30,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    fontWeight:'bold',
    color:'white',
    alignContent:'left'
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 10,
    backgroundColor:'#D9D9D9'
  },
  button: {
    marginTop:20,
    backgroundColor: '#D9D9D9',
    padding: 10,
    width: '100%',
    alignItems: 'center',
    borderRadius:20,
  },
  buttonText: {
    color: 'black',
    fontSize: 18,
  },
});

export default FindFriendsScreenStyles;

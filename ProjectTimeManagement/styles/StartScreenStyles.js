// styles.js
import { StyleSheet } from 'react-native';

const StartScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(245, 245, 220, 0.79)', // Set opacity here
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    fontSize: 40,
    color: '#000',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#D9D9D9',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 5 },
  },
  buttonText: {
    fontSize: 20,
    color: '#000',
  }
});

export default StartScreenStyles;

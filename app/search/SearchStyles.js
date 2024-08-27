import { StyleSheet, Dimensions } from 'react-native';

const { height } = Dimensions.get('window'); // Get the height of the device

export default StyleSheet.create({
  container: {
    flex: 1, // Use flex: 1 to take up the entire screen
    backgroundColor: "white",
    justifyContent: 'center', // Center content vertically
    alignItems: "center", // Center content horizontally
    padding: 20,
  },
  bigTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    backgroundColor: '#d5eaf2', 
    borderRadius: 500, 
    padding: 15, 
    marginBottom: 20,
    textAlign: 'center', 
    shadowColor: '#000', 
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 5,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 20,
    textAlign: 'center', // Center the text horizontally
  },
  button: {
    backgroundColor: '#007bff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginBottom: 20,
    width: '80%', // Make the button width responsive
    alignItems: 'center', // Center the button text horizontally
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  activityIndicatorContainer: {
    flex: 1, // Use flex: 1 to take up the entire screen
    justifyContent: 'center', // Center content vertically
    alignItems: 'center', // Center content horizontally
    backgroundColor: 'transparent', // Set to transparent to blend with background
  },
  activityIndicatorText: {
    fontSize: 18,
    color: 'black',
    marginBottom: 10, // Space between text and loader
  },
  activityIndicator: {
    // Center the ActivityIndicator within its container
  },  backButton: {
    padding: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 5,
    alignSelf: 'flex-start',
},
  backButtonText: {
      fontSize: 16,
      color: '#007BFF',
      textAlign: 'center',
  },
});

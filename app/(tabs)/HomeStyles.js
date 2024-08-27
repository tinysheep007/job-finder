import { StyleSheet, Dimensions } from 'react-native';

const { height } = Dimensions.get('window'); // Get the height of the device

export default StyleSheet.create({
  container: {
    backgroundColor: "white",
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
  touchableOpacity: {
    backgroundColor: '#4caf50', // Green background color
    paddingVertical: 12, // Vertical padding for better touch area
    paddingHorizontal: 25, // Horizontal padding for better touch area
    borderRadius: 25, // Rounded corners
    marginVertical: 15, // Vertical margin for spacing
    alignItems: 'center', // Center text inside the button
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 5,
  },
  touchableText: {
    color: 'white', // White text color for contrast
    fontSize: 16, // Slightly larger text size
    fontWeight: 'bold', // Bold text for emphasis
  },
});

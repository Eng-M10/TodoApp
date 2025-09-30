import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  fab: {
    position: 'absolute', // Makes the button float
    width: 60,
    height: 60,
    borderRadius: 30, // Makes it circular
    backgroundColor: '#007bff', // Example background color
    justifyContent: 'center',
    alignItems: 'center',
    bottom: 20, // Position from the bottom
    right: 20, // Position from the right
    elevation: 5, // Adds a shadow on Android
    shadowColor: '#000', // Adds a shadow on iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },

});
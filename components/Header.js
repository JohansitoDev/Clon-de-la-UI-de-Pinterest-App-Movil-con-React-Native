import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Header = ({ currentScreen, setCurrentScreen }) => {
  return (
    <View style={styles.header}>
      <View style={styles.headerLeft}>
        <TouchableOpacity onPress={() => setCurrentScreen('home')} style={styles.pinterestLogo}>
          <Icon name="pinterest" size={30} color="#e60023" />
        </TouchableOpacity>
        {currentScreen === 'home' && (
          <TouchableOpacity style={[styles.navButton, styles.navButtonActive]}>
            <Text style={styles.navButtonTextActive}>Inicio</Text>
          </TouchableOpacity>
        )}
      </View>

      {currentScreen === 'home' && (
        <View style={styles.searchBarContainer}>
          <TextInput
            style={styles.searchBarInput}
            placeholder="Buscar"
            placeholderTextColor="#888"
          />
          <Icon name="search" size={20} color="#555" style={styles.searchIcon} />
        </View>
      )}

      <View style={styles.headerRight}>
        <TouchableOpacity style={styles.iconButton}>
          <Icon name="bell" size={20} color="#555" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton}>
          <Icon name="comment-dots" size={20} color="#555" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    padding: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 3,
    zIndex: 10,
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flexShrink: 0,
    flexGrow: 0,
    paddingRight: 8,
  },
  pinterestLogo: {
    marginRight: 10,
  },
  navButton: {
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 20,
    marginHorizontal: 4,
  },
  navButtonActive: {
    backgroundColor: '#000',
  },
  navButtonText: {
    color: '#333',
    fontWeight: '600',
    fontSize: 15,
  },
  navButtonTextActive: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 15,
  },
  searchBarContainer: {
    flex: 1,
    marginHorizontal: 10,
    position: 'relative',
  },
  searchBarInput: {
    backgroundColor: '#e0e0e0',
    borderRadius: 25,
    paddingVertical: 12,
    paddingLeft: 45,
    paddingRight: 20,
    fontSize: 17,
    height: 50,
    color: '#333',
  },
  searchIcon: {
    position: 'absolute',
    left: 15,
    top: '50%',
    marginTop: -10,
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
    flexShrink: 0,
    flexGrow: 0,
    paddingLeft: 8,
    justifyContent: 'flex-end',
  },
  iconButton: {
    padding: 8,
    borderRadius: 20,
    marginHorizontal: 2,
  },
});

export default Header;

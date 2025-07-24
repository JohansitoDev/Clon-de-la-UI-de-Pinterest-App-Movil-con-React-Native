import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const FooterNav = ({ currentScreen, setCurrentScreen, profileButtonText }) => {
  return (
    <View style={styles.footer}>
      <TouchableOpacity
        style={styles.footerButton}
        onPress={() => setCurrentScreen('home')}
      >
        <Icon
          name="home"
          size={25}
          color={currentScreen === 'home' ? '#e60023' : '#555'}
        />
        <Text style={[styles.footerButtonText, currentScreen === 'home' && styles.footerButtonTextActive]}>
          Inicio
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.footerButton}
        onPress={() => { /* Lógica para Explorar */ }} 
      >
        <Icon
          name="compass" 
          size={25}
          color={currentScreen === 'explore' ? '#e60023' : '#555'}
        />
        <Text style={[styles.footerButtonText, currentScreen === 'explore' && styles.footerButtonTextActive]}>
          Explorar
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.footerButton}
        onPress={() => { /* Lógica para el buscador */ }} 
      >
        <Icon
          name="search"
          size={25}
          color={currentScreen === 'search' ? '#e60023' : '#555'}
        />
        <Text style={[styles.footerButtonText, currentScreen === 'search' && styles.footerButtonTextActive]}>
          Buscar
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.footerButton}
        onPress={() => setCurrentScreen('profile')}
      >
        <View style={[styles.profileButton, currentScreen === 'profile' && styles.profileButtonActive]}>
          <Text style={styles.profileButtonText}>{profileButtonText}</Text>
        </View>
        <Text style={[styles.footerButtonText, currentScreen === 'profile' && styles.footerButtonTextActive]}>
          Perfil
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: '#eee',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 3,
  },
  footerButton: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 5,
  },
  footerButtonText: {
    fontSize: 12,
    color: '#555',
    marginTop: 4,
  },
  footerButtonTextActive: {
    color: '#e60023',
    fontWeight: 'bold',
  },
  profileButton: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#ccc',
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileButtonActive: {
    borderWidth: 2,
    borderColor: '#e60023',
  },
  profileButtonText: {
    color: '#555',
    fontWeight: 'bold',
    fontSize: 12,
  },
});

export default FooterNav;

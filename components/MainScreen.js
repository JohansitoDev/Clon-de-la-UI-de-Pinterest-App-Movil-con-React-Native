import React, { useState } from 'react';
import { SafeAreaView, FlatList, StyleSheet, Dimensions } from 'react-native';
import Header from './Header';
import FooterNav from './FooterNav';
import PinCard from './PinCard';
import ProfileScreen from './ProfileScreen'; 

const { width } = Dimensions.get('window');
const numColumns = 2;

const MainScreen = () => {
  const [currentScreen, setCurrentScreen] = useState('home'); 
  const [pins, setPins] = useState([
    { id: '1', imageUrl: 'https://placehold.co/400x600/FF5733/FFFFFF?text=Paisaje+1', title: 'Paisaje Sereno' },
    { id: '2', imageUrl: 'https://placehold.co/400x500/33FF57/FFFFFF?text=Arte+Abstracto', title: 'Arte Geométrico Abstracto' },
    { id: '3', imageUrl: 'https://placehold.co/400x700/3357FF/FFFFFF?text=Delicia+Culinaria', title: 'Plato Gourmet' },
    { id: '4', imageUrl: 'https://placehold.co/400x550/FF33A1/FFFFFF?text=Vista+Urbana', title: 'Atardecer Urbano' },
    { id: '5', imageUrl: 'https://placehold.co/400x650/33FFF2/FFFFFF?text=Vibras+de+Viaje', title: 'Aventura en la Montaña' },
    { id: '6', imageUrl: 'https://placehold.co/400x450/A133FF/FFFFFF?text=Moda', title: 'Estilo Callejero' },
    { id: '7', imageUrl: 'https://placehold.co/400x620/FFC733/FFFFFF?text=Vida+Silvestre', title: 'Criaturas del Bosque' },
    { id: '8', imageUrl: 'https://placehold.co/400x580/33FF8D/FFFFFF?text=Arquitectura', title: 'Diseño de Hogar Moderno' },
    { id: '9', imageUrl: 'https://placehold.co/400x530/8D33FF/FFFFFF?text=Manualidades', title: 'Joyas Hechas a Mano' },
    { id: '10', imageUrl: 'https://placehold.co/400x680/FF3333/FFFFFF?text=Tecnología', title: 'Tecnología Futura' },
    { id: '11', imageUrl: 'https://placehold.co/400x520/33A1FF/FFFFFF?text=Fitness', title: 'Motivación para Ejercicio' },
    { id: '12', imageUrl: 'https://placehold.co/400x570/A1FF33/FFFFFF?text=Libros', title: 'Rincón de Lectura Acogedor' },
  ]);

  const [savedPins, setSavedPins] = useState([]);
  const [profileName, setProfileName] = useState('Jane Doe');
  const [profileUsername, setProfileUsername] = useState('@janedoe');
  const [saveButtonText, setSaveButtonText] = useState({});

  const handleSavePin = (pinToSave) => {
    if (!savedPins.some(pin => pin.id === pinToSave.id)) {
      setSavedPins(prevPins => [...prevPins, pinToSave]);
      setSaveButtonText(prev => ({ ...prev, [pinToSave.id]: 'Guardado' }));
      setTimeout(() => {
        setSaveButtonText(prev => ({ ...prev, [pinToSave.id]: 'Guardar' }));
      }, 2000);
    }
  };

  const renderPin = ({ item }) => (
    <PinCard
      item={item}
      handleSavePin={handleSavePin}
      saveButtonText={saveButtonText}
    />
  );

  return (
    <SafeAreaView style={styles.container}>
      <Header currentScreen={currentScreen} setCurrentScreen={setCurrentScreen} />

      {currentScreen === 'home' ? (
        <FlatList
          data={pins}
          renderItem={renderPin}
          keyExtractor={(item) => item.id}
          numColumns={numColumns}
          contentContainerStyle={styles.pinsGrid}
          columnWrapperStyle={styles.row}
        />
      ) : currentScreen === 'profile' ? (
        <ProfileScreen
          setCurrentScreen={setCurrentScreen}
          profileName={profileName}
          profileUsername={profileUsername}
          setProfileName={setProfileName}
          setProfileUsername={setProfileUsername}
          savedPins={savedPins}
          handleSavePin={handleSavePin}
          saveButtonText={saveButtonText}
        />
      ) : (
        
        <Text style={styles.comingSoonText}>
          {currentScreen === 'explore' ? 'Pantalla de Explorar (Próximamente)' : 'Pantalla de Búsqueda (Próximamente)'}
        </Text>
      )}

      <FooterNav
        currentScreen={currentScreen}
        setCurrentScreen={setCurrentScreen}
        profileButtonText={profileName.charAt(0).toUpperCase() + profileUsername.charAt(1).toUpperCase()} // 'JD'
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  pinsGrid: {
    padding: 10,
    paddingBottom: 70, 
  },
  row: {
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  comingSoonText: {
    flex: 1,
    textAlign: 'center',
    textAlignVertical: 'center',
    fontSize: 20,
    color: '#555',
  },
});

export default MainScreen;

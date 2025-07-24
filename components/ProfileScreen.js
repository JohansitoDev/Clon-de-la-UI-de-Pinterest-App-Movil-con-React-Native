import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, FlatList, ScrollView, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import EditProfileModal from './EditProfileModal'; 
import PinCard from './PinCard'; 

const { width } = Dimensions.get('window');
const numColumns = 2;

const ProfileScreen = ({ setCurrentScreen, profileName, profileUsername, setProfileName, setProfileUsername, savedPins, handleSavePin, saveButtonText }) => {
  const [isEditingProfile, setIsEditingProfile] = useState(false);

  const handleSaveProfile = (newName, newUsername) => {
    setProfileName(newName);
    setProfileUsername(newUsername);
    setIsEditingProfile(false);
  };

  const renderPin = ({ item }) => (
    <PinCard
      item={item}
      handleSavePin={handleSavePin}
      saveButtonText={saveButtonText}
    />
  );

  return (
    <ScrollView style={styles.profileContainer}>
      <View style={styles.profileHeader}>
        <TouchableOpacity onPress={() => setCurrentScreen('home')} style={styles.backButton}>
          <Icon name="arrow-left" size={20} color="#333" />
        </TouchableOpacity>
        <Image
          source={{ uri: 'https://placehold.co/100x100/CCCCCC/333333?text=JD' }}
          style={styles.profileAvatar}
        />
        <Text style={styles.profileName}>{profileName}</Text>
        <Text style={styles.profileUsername}>{profileUsername}</Text>
        <Text style={styles.profileStats}>1.2K seguidores • 50 siguiendo</Text>
        <View style={styles.profileActions}>
          <TouchableOpacity style={styles.profileActionButton}>
            <Text style={styles.profileActionButtonText}>Compartir</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.profileActionButton}
            onPress={() => setIsEditingProfile(true)}
          >
            <Text style={styles.profileActionButtonText}>Editar perfil</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.profileContent}>
        <Text style={styles.profileSectionTitle}>Pines Guardados</Text>
        {savedPins.length === 0 ? (
          <Text style={styles.noPinsText}>Aún no tienes pines guardados. ¡Guarda algunos!</Text>
        ) : (
          <FlatList
            data={savedPins}
            renderItem={renderPin}
            keyExtractor={(item) => item.id}
            numColumns={numColumns}
            contentContainerStyle={styles.pinsGrid}
            columnWrapperStyle={styles.row}
            scrollEnabled={false}
          />
        )}
      </View>

      <EditProfileModal
        isVisible={isEditingProfile}
        onClose={() => setIsEditingProfile(false)}
        currentName={profileName}
        currentUsername={profileUsername}
        onSave={handleSaveProfile}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  profileContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  profileHeader: {
    alignItems: 'center',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  profileAvatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  profileName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  profileUsername: {
    fontSize: 16,
    color: '#777',
    marginBottom: 5,
  },
  profileStats: {
    fontSize: 14,
    color: '#555',
    marginBottom: 15,
  },
  profileActions: {
    flexDirection: 'row',
    marginTop: 10,
  },
  profileActionButton: {
    backgroundColor: '#e0e0e0',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    marginHorizontal: 5,
  },
  profileActionButtonText: {
    color: '#333',
    fontWeight: '600',
  },
  profileContent: {
    padding: 10,
  },
  profileSectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
    textAlign: 'center',
  },
  noPinsText: {
    textAlign: 'center',
    color: '#777',
    fontSize: 16,
    marginTop: 20,
  },
  backButton: {
    position: 'absolute',
    left: 15,
    top: 20,
    padding: 10,
  },
  pinsGrid: {
    padding: 10,
  },
  row: {
    justifyContent: 'space-between',
    marginBottom: 10,
  },
});

export default ProfileScreen;

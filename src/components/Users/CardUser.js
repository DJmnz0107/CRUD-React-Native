// components/Users/CardUser.js
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import useFetchUser from '../../hooks/useFetchUser';

const CardUser = ({ user }) => {
  const navigation = useNavigation();
  const { handleEliminar } = useFetchUser();

  const handleEditPress = () => {
    navigation.navigate('AddUser', { user }); // Pasar datos del usuario
  };

  const handleDeletePress = () => {
    handleEliminar(user.id);
  };

  return (
    <View style={styles.card}>
      <Text style={styles.cardTitle}>{user.nombre}</Text>
      <Text style={styles.cardText}>Edad: {user.edad}</Text>
      <Text style={styles.cardText}>Correo: {user.correo}</Text>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.editButton} onPress={handleEditPress}>
          <Text style={styles.buttonText}>Editar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.deleteButton} onPress={handleDeletePress}>
          <Text style={styles.buttonText}>Eliminar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFF',
    borderRadius: 12,
    padding: 20,
    marginVertical: 10,
    elevation: 4,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#5C3D2E',
    marginBottom: 5,
  },
  cardText: {
    fontSize: 16,
    color: '#3B2C24',
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 10,
    justifyContent: 'space-between',
  },
  editButton: {
    backgroundColor: '#7D5A50',
    padding: 10,
    borderRadius: 6,
    flex: 1,
    marginRight: 5,
  },
  deleteButton: {
    backgroundColor: '#C44536',
    padding: 10,
    borderRadius: 6,
    flex: 1,
    marginLeft: 5,
  },
  buttonText: {
    color: '#FFF',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default CardUser;

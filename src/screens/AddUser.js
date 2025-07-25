import React, { useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Alert,
  ScrollView,
} from 'react-native';
import useFetchUser from '../hooks/useFetchUser';

const AddUser = ({ route, navigation }) => {
  const {
    nombre,
    edad,
    correo,
    setNombre,
    setEdad,
    setCorreo,
    handleGuardar,
    handleActualizar,
  } = useFetchUser();

  const editingUser = route?.params?.user;

  useEffect(() => {
    if (editingUser) {
      setNombre(editingUser.nombre);
      setEdad(editingUser.edad.toString());
      setCorreo(editingUser.correo);
    }
  }, [editingUser]);

  const handleSubmit = () => {
    if (editingUser) {
      handleActualizar(editingUser.id);
    } else {
      handleGuardar();
    }
    navigation.goBack(); // volver después de guardar o actualizar
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>
        {editingUser ? 'Editar Usuario' : 'Agregar Usuario'}
      </Text>
      <Text style={styles.subtitle}>
        {editingUser
          ? 'Modifica los datos del usuario'
          : 'Ingresa la información del nuevo usuario'}
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Nombre"
        value={nombre}
        onChangeText={setNombre}
        placeholderTextColor="#A1866F"
      />
      <TextInput
        style={styles.input}
        placeholder="Edad"
        value={edad}
        onChangeText={setEdad}
        keyboardType="numeric"
        placeholderTextColor="#A1866F"
      />
      <TextInput
        style={styles.input}
        placeholder="Correo"
        value={correo}
        onChangeText={setCorreo}
        keyboardType="email-address"
        placeholderTextColor="#A1866F"
      />

      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>
          {editingUser ? 'Actualizar' : 'Guardar'}
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#EAD8C0',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 10,
    color: '#5C3D2E'
  },
  subtitle: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 20,
    color: '#5C3D2E'
  },
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#5C3D2E',
    borderRadius: 8,
    padding: 12,
    marginVertical: 10,
    backgroundColor: '#FFF',
    color: '#000'
  },
  button: {
    backgroundColor: '#5C3D2E',
    padding: 15,
    borderRadius: 10,
    width: '100%',
    marginTop: 20
  },
  buttonText: {
    color: '#FFF',
    fontWeight: 'bold',
    textAlign: 'center'
  }
});

export default AddUser;

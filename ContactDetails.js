import * as React from 'react';
import { Text, View, StyleSheet, Button, Linking} from 'react-native';
import { Platform } from 'react-native';
import { TouchableOpacity, Image } from 'react-native';



export default function ContactDetailsScreen ({ route, navigation }) {
  const {contact} = route.params;
  const mapUrl = Platform.select({
   ios: `maps:0,0?q=${contact.lat},${contact.lng}`,
   android: `geo:0,0?q=${contact.lat},${contact.lng}`
});
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.contactName}>{contact.name}</Text>
        <Text style={styles.contactDetails}>E-mail: {contact.email}</Text>
        <Text style={styles.contactDetails}>Telefone: {contact.phone}</Text>
      </View>
      <View style={styles.button} >
          <TouchableOpacity onPress={() => Linking.openURL(`mailto:${contact.email}`)}>
            <Image
              source={require('./assets/mail.png')}
              style={{ width: 100, height: 100 }} // Ajuste a largura e altura conforme necessário
            />
          </TouchableOpacity>
      </View>
      <View style={styles.button} >
          <TouchableOpacity onPress={() => Linking.openURL(mapUrl)}>
            <Image
              source={require('./assets/globo.png')}
              style={{ width: 100, height: 100 }} // Ajuste a largura e altura conforme necessário
            />
          </TouchableOpacity>
      </View>
      <View style={styles.button}>
        <TouchableOpacity onPress={() => Linking.openURL(`tel:${contact.phone}`)}>
          <Image
            source={require('./assets/tel.png')}
            style={{ width: 100, height: 100 }} // Ajuste a largura e altura conforme necessário
          />
        </TouchableOpacity>
      </View>
      <View style={styles.button} >
        <Button title="Voltar" onPress={() => navigation.navigate('ContactList')} />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
  contactName: {
    fontSize: 18,
    fontWeight: 'bold',
    height: 44,
  },
  contactDetails: {
    fontSize: 16,
    height: 44,
  },
  button: {
    padding: 15
  }
});


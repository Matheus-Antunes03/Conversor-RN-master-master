import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, TouchableOpacity, StyleSheet, Text, Image, TextInput } from 'react-native';
import { Header } from './components/Header';
import { Dropdown } from 'react-native-element-dropdown';

const data = [
  { label: 'Real', Value: '1' },
  { label: 'Dólar', Value: '2' },
  { label: 'Euro', Value: '3' },
  { label: 'Iene', Value: '4' },
  { label: 'Libra', Value: '5' },
  { label: 'Lira', Value: '6' }
]

function HomeTela({ navigation }) {
  return (
    <View style={styles.background}>
      <Header/>
        <div style={styles.primeiros}>
          <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Conversor')}>
              <Text style={styles.moeda}>R$</Text>
              <div/>
              <Text style={styles.nome}>Real</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Conversor')}>
              <Text style={styles.moeda}>US$</Text>
              <div/>
              <Text style={styles.nome}>Dólar</Text>
          </TouchableOpacity>
      </div>
      <div style={styles.outros}>
          <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Conversor')}>
              <Text style={styles.moeda}>€</Text>
              <div/>
              <Text style={styles.nome}>Euro</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Conversor')}>
              <Text style={styles.moeda}>¥</Text>
              <div/>
              <Text style={styles.nome}>Iene</Text>
          </TouchableOpacity>
      </div>
      <div style={styles.outros}>
          <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Conversor')}>
              <Text style={styles.moeda}>£</Text>
              <div/>
              <Text style={styles.nome}>Libra</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Conversor')}>
              <Text style={styles.moeda}>₺</Text>
              <div/>
              <Text style={styles.nome}>Lira</Text>
          </TouchableOpacity>
      </div>
      <TouchableOpacity style={styles.botaoHistorico} onPress={() => navigation.navigate('Historico')}>Histórico</TouchableOpacity>
    </View>
  )
}

function ConversorTela() {
  return (
    <View style={styles.background}>
      <Header/>
      <Text style={styles.title}>Conversor</Text>
      
      <div style={styles.box}>
        <div style={styles.boxOg}>
          <Dropdown style={styles.lista} data={data} labelField={'label'} valueField={'value'}></Dropdown>
          <TextInput style={styles.valorOg} keyboardType='numeric'/>
        </div>
        <Image style={styles.seta} source={require("./assets/seta-para-baixo.png")}/>
        <div style={styles.boxOg}>
          <Dropdown style={styles.lista} data={data} labelField={'label'} valueField={'value'}></Dropdown>
          <Text style={styles.valorOg}/>
        </div>
        <TouchableOpacity style={styles.converter}>Converter</TouchableOpacity>
      </div>
      <TouchableOpacity style={styles.botaoHistorico} onPress={() => navigation.navigate('Home')}>Home</TouchableOpacity>
      <TouchableOpacity style={styles.botaoHistorico} onPress={() => navigation.navigate('Historico')}>Histórico</TouchableOpacity>
    </View>
  )
}

function HistoricoTela() {
  return (
    <View style={styles.background}>
      <Header/>
      <Text style={styles.title}>Histórico</Text>
      <div style={styles.content}>
      </div>
      <TouchableOpacity style={styles.botaoHistorico} onPress={() => navigation.navigate('Home')}>Home</TouchableOpacity>
  </View>
  )
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeTela}/>
        <Stack.Screen name="Conversor" component={ConversorTela}/>
        <Stack.Screen name="Historico" component={HistoricoTela}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#101f54',
    width: 414,
    height: 896
  },
  lista: {
    backgroundColor: '#ffffff',
    width: 140,
    height: 40,
    borderRadius: 10,
    color: "#e98b1b"
  },
  primeiros: {
    display: "flex",
    justifyContent: "space-around",
    marginTop: 100
  },
  outros: {
    display: "flex",
    justifyContent: "space-around",
    marginTop: 30
  },
  card: {
    backgroundColor: '#ffca2c',
    width: 180,
    height: 180,
    borderRadius: 20,
    alignItems: 'center',
    shadowColor: "#e98b1b",
    shadowOffset: { width: 50, height: 50 },
    shadowOpacity: 0,
    shadowRadius: 30,
  },
  moeda: {
    color: "#ffffff",
    fontWeight: "bold",
    fontSize: 90,
    textShadowColor: "#e98b1b",
    textShadowRadius: 1,
    textShadowOffset: { width: -8, height: 0 },
  },
  nome: {
    color: "#ffffff",
    fontSize: 50,
    fontFamily: "sans-serif",
    fontWeight: "bold",
    textShadowColor: "#e98b1b",
    textShadowRadius: 1,
    textShadowOffset: { width: -8, height: 0 }
  },
  botaoHistorico: {
    backgroundColor: "#e98b1b",
    width: 170,
    height: 40,
    border: 'none',
    color: "#ffffff",
    fontWeight: "bold",
    fontSize: 30,
    fontFamily: 'sans-serif',
    textAlign: 'center',
    borderRadius: 20,
    marginTop: 30,
    marginLeft: 115
  },
  title: {
    color: "#ffffff",
    fontWeight: "bold",
    fontSize: 50,
    marginTop: 10,
    textAlign: "center",
    textShadowColor: "#e98b1b",
    textShadowRadius: 1,
    textShadowOffset: { width: -4, height: 0 },
  },
  box: {
      width: 350,
      height: 300,
      backgroundColor: "#ffca2c",
      margin: 'auto',
      marginTop: 20,
      borderRadius: 20,
  },
  boxOg: {
      display: 'flex',
      justifyContent: 'space-around',
      marginTop: 20
  },
  valorOg: {
      width: 140,
      height: 40,
      backgroundColor: "#ffffff",
      borderRadius: 10,
      color: "#e98b1b",
      fontFamily: "sans-serif",
      fontWeight: "bold",
      fontSize: 33,
      textAlign: "center"
  },
  seta: {
      width: 50,
      height: 50,
      margin: "auto",
      marginTop: 25
  },
  converter: {
      backgroundColor: "#e98b1b",
      width: 170,
      height: 40,
      border: 'none',
      color: "#ffffff",
      fontWeight: "bold",
      fontSize: 30,
      borderRadius: 20,
      marginTop: 30,
      marginLeft: 95,
      fontFamily: 'sans-serif',
      textAlign: 'center',
  },
  content: {
    width: 400,
    height: 600,
    backgroundColor: "#ffca2c",
    margin: 'auto',
    marginTop: 20,
    borderRadius: 20,
  },
})
export default App;
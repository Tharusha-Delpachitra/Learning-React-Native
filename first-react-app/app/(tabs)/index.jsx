import { View, Text, StyleSheet, ImageBackground, Pressable } from 'react-native'
import React from 'react'
import IcedCoffeeImg from '@/assets/images/iced-coffee.png'
import { Link } from 'expo-router'

const App = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={IcedCoffeeImg}
        resizeMode='cover'
        style={styles.image}
      >
        <Text style={styles.title}>Coffe shop</Text>

        <Link href="/contact" style={{marginHorizontal: 'auto'}} asChild>
          <Pressable style={styles.button}>
            <Text style={styles.buttonText}>Contact us</Text>
          </Pressable>
        </Link>

      </ImageBackground>
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column'
  },
  image: {
    width: '100%',
    height: '100%',
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center'
  },
  title: {
    color: 'white',
    fontSize: 42,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    marginBottom: 150
  },
  button: {
    height: 60,
    borderRadius: 20,
    justifyContent: 'center',
    backgroundColor: 'black',
    paddingHorizontal: 20
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 4
  }
})
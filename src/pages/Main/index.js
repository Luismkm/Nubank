import React from 'react'
import { View, Text, Image, ScrollView, TouchableOpacity, Animated } from 'react-native'
import Icon from '@expo/vector-icons/MaterialIcons'
import QRCode from 'react-native-qrcode-svg';
import { PanGestureHandler, State } from 'react-native-gesture-handler'

import styles from './styles'
import NavItem from '../../components/NavItem'
import TabItem from '../../components/TabItem'

import logo from '../../icons/Nubank_Logo.png'

export default Container = () => {
  let offset = 0
  const translateY = new Animated.Value(0)

  const animatedEvent = Animated.event(
    [
      {
        nativeEvent: {
          translationY: translateY,
        }    
      }
    ],
    { useNativeDriver: true },
  )

  function onHandlerStateChange(event) {
    if (event.nativeEvent.oldState === State.ACTIVE) {
      let opened = false
      const { translationY } = event.nativeEvent
      
      offset += translationY

      if (translationY >= 100){
        opened = true
      } else {
        translateY.setValue(offset)
        translateY.setOffset(0)
        offset = 0
      }

      Animated.timing(translateY, {
        toValue: opened ? 380 : 0,
        duration: 200,
        useNativeDriver: true,
      }).start(() => {
        offset = opened ? 380 : 0
        translateY.setOffset(offset)
        translateY.setValue(0)
      })
    }
  }

 return(
  <View style={styles.container}>

    <View style={styles.header}>
      <View style={styles.top}>
        <Image source={logo}/>
        <Text style={styles.name}>Luis</Text>
      </View>
      <Icon name="keyboard-arrow-down" size={20} color="#fff" />
    
      </View>

      <View style={styles.content}>
        <Animated.ScrollView style={{
          marginHorizontal: 30,
          opacity: translateY.interpolate({
            inputRange: [0, 150],
            outputRange: [0, 1]
          })
        }} 
        contentContainerStyle={styles.scrollMenu}
        >
          <View style={styles.code}>
            <QRCode
              value='https://github.com/Luismkm'
              size={80}
              color='#8B05BE'
              backgroundColor='#fff'
            />
          </View>

          <View style={styles.nav}>  
            <NavItem name="help-outline" title="Me ajuda" />
            <NavItem name="person-outline" title="Perfil" />
            <NavItem name="credit-card" title="Configurar cartão" />
            <NavItem name="smartphone" title="Configuração do app"/>

            <TouchableOpacity style={styles.signOut}>
              <Text style={styles.signOutText}>SAIR DO APP</Text>
            </TouchableOpacity>
          </View>

        </Animated.ScrollView>

        <PanGestureHandler
          onGestureEvent={animatedEvent}
          onHandlerStateChange={onHandlerStateChange}
        >
          <Animated.View style={styles.card,{
            flex: 1,
            backgroundColor: "#fff",
            borderRadius: 4,
            marginHorizontal: 20,
            height: '100%',
            position: 'absolute',
            left: 0,
            right: 0,
            top: 0,
            transform: [{
              translateY: translateY.interpolate({
                inputRange: [-350, 0, 380],
                outputRange: [-50, 0, 380],
                extrapolate: 'clamp',
              }),
            }],

          }}>
            
            <View style={styles.cardHeader}>
              <Icon name="attach-money" size={28} color="#666"/>
              <Icon name="visibility-off" size={28} color="#666"/>
            </View>
            <View style={styles.cardContent}>
              <Text style={styles.title}>Saldo disponível</Text>
              <Text style={styles.description}>R$ 182.525,78</Text>
            </View>
            <View style={styles.cardFooter}>
              <Text style={styles.annotation}>
                Transferência de R$ 12.525 recebida de Luis Moraes hoje às 06:00h
              </Text>
            </View>
          </Animated.View>
        </PanGestureHandler>

      </View>

      <Animated.View style={{
        height: 100,
        marginTop: 20,
        transform: [{
          translateY: translateY.interpolate({
            inputRange: [0, 380],
            outputRange: [0, 30],
            extrapolate: 'clamp',
          })
        }],
        opacity: translateY.interpolate({
          inputRange: [0, 380],
          outputRange: [1, 0.3],
          extrapolate: 'clamp',
        }),
      }}>

        <ScrollView 
          showsHorizontalScrollIndicator={false} 
          horizontal={true} 
          contentContainerStyle={styles.scrollContentContainer}
        >
          <TabItem name="person-add" title="Indicar amigos" />
          <TabItem name="chat-bubble-outline" title="Cobrar" />
          <TabItem name="arrow-downward" title="Depositar" />
          <TabItem name="arrow-upward" title="Transferir" />
          <TabItem name="lock" title="Bloquear cartão" />

        </ScrollView>
      </Animated.View>

  </View>
 )
}
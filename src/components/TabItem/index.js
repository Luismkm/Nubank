import React from 'react'
import { View, Text } from 'react-native'
import Icon from '@expo/vector-icons/MaterialIcons'

import styles from  './styles'

function TabItem({ name, title }) {
  return (
    <View style={ styles.tabItem }>
    <Icon name={ name } size={20} color="#fff" />
    <Text style={ styles.tabText }>{ title }</Text>
  </View>
  )
}

export default TabItem
import React from 'react'
import { View, Text } from 'react-native'
import Icon from '@expo/vector-icons/MaterialIcons'

import styles from  './styles'

function NavItem({ name, title }) {
  return (
    <View style={styles.navItem}>
    <Icon name={name} size={20} color="#fff" />
    <Text style={styles.navText}>{title}</Text>
  </View>
  )
}

export default NavItem
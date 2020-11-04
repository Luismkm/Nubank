import { StyleSheet } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8B05BE',
    paddingTop: getStatusBarHeight(),
  },

  header: {
    alignItems: 'center',
    paddingTop: 20,
    paddingHorizontal: 0,
    paddingBottom: 30,
  },

  top:{
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10
  },

  name:{
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
    marginLeft: 8,
  },

  code:{
    overflow: 'hidden',
    backgroundColor: '#fff',
    padding: 10,
    alignSelf: 'center',

  },

  nav:{
    marginTop: 30,
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: 'rgba(255,255,255, 0.8)',
    alignSelf: 'stretch',
  },

  signOut:{
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: 'rgba(255,255,255, 0.8)',
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 12,
    marginTop: 15,
  },

  signOutText:{
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 13,
  },

  scrollContentContainer:{
    paddingLeft: 10,
    paddingRight: 10,
  },

  content:{
    flex: 1,
    maxHeight: 400,
    zIndex: 5,
  },

  cardHeader:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 30,
  },

  cardContent:{
    flex: 1,
    paddingHorizontal: 30,
    paddingTop: 20,
  },

  title:{
    fontSize: 13,
    color: '#999'

  },

  description:{
    fontSize: 32,
    marginTop: 3,
    color: '#333'
  },

  cardFooter:{
    padding: 30,
    backgroundColor: '#eee',
    borderRadius: 4,

  },

  annotation:{
    fontSize: 12,
    color: '#333'
  },
})

export default styles
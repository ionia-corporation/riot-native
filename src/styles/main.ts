import { StyleSheet, ViewStyle, TextStyle, Dimensions, ImageStyle, Platform } from 'react-native';

const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;

const paragraph = {
  paddingTop: 10,
  paddingBottom: 10,
  paddingLeft: 20,
  paddingRight: 20,
} as TextStyle;

const errorMessage = Object.assign({}, paragraph, {
  color: '#FF4833',
} as TextStyle);

export const Colors = {
  white: '#ffffff',
  gray: '#555555',
  neonRed: '#fb0240',
  lightGray: '#9c9c9c',
  darkGray: '#323232',
  claret: '#6c001b',
  black: '#101010',
  warmGrey: '#7c7c7c',
  offGray: '#434343'
};

export const Styles = StyleSheet.create({
  container: {
    marginTop: Platform.OS === 'ios' ? 20 : 0,
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  } as ViewStyle,

  viewContainer: {
    backgroundColor: Colors.darkGray
  } as ViewStyle,

  loginHeader: {
    backgroundColor: Colors.neonRed,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: 50,
    paddingBottom: 50
  } as ViewStyle,

  loginHeaderImage: {
    transform: [{ scaleX: .7 }, {scaleY: .7}]
  } as ImageStyle,

  loginHeaderTitle: {
    fontSize: 30,
    fontWeight: 'bold'
  } as TextStyle,

  header: {
    backgroundColor: Colors.neonRed
  } as ViewStyle,

  headerBody: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center'
  } as ViewStyle,

  headerSide: {
    display: 'flex',
    flex: 0,
    minWidth: '15%'
  } as ViewStyle,

  headerTitle: {
    fontWeight: 'bold',
    fontSize: 25,
    color: Colors.white
  } as TextStyle,

  headerIcon: {
    fontSize: 25,
    color: Colors.black,
    paddingLeft: 10,
    paddingRight: 10
  } as TextStyle,

  title: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  } as TextStyle,

  logo: {
    marginBottom: 50,
  } as ImageStyle,

  subtitle: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  } as TextStyle,

  input: {
    backgroundColor: 'rgba(200, 200, 200, 0.4)',
    height: 40,
    paddingLeft: 45,
    borderRadius: 20,
    color: '#333333',
  },

  inputWrapper: {
    width: DEVICE_WIDTH,
    marginBottom: 10,
    paddingLeft: 20,
    paddingRight: 20,
  } as ViewStyle,

  listItem: {
    display: 'flex',
    flexDirection: 'row',
    marginLeft: 0,
    padding: 20,
    borderBottomColor: Colors.gray,
    borderBottomWidth: 1
  } as ViewStyle,

  listItemStatus: {
    color: Colors.lightGray,
    borderRadius: 50,
    backgroundColor: Colors.offGray,
    marginTop: 2,
    marginRight: 13,
    padding: 12
  } as TextStyle,

  listItemStatusOn: {
    color: Colors.white,
    backgroundColor: Colors.neonRed
  } as TextStyle,

  listItemTitle: {
    color: Colors.white,
    margin: 0,
    width: '100%',
    fontSize: 20
  } as TextStyle,

  listItemSubtitle: {
    color: Colors.warmGrey,
    margin: 0,
    width: '100%'
  } as TextStyle,

  listItemGroup: {
    flexDirection: 'column',
    backgroundColor: Colors.black
  } as ViewStyle,

  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingTop: 10,
    paddingLeft: 5,
  } as TextStyle,

  sectionDescription: {
    paddingTop: 5,
    paddingLeft: 5,
  } as TextStyle,

  sectionStatus: {
    paddingTop: 15,
    paddingBottom: 15,
    textAlign: 'center',
    color: '#333333',
  } as TextStyle,

  link: {
    color: '#11A0F8',
  } as TextStyle,

  paragraph,

  errorMessage,

  switchContainer: {
    width: DEVICE_WIDTH,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    alignContent: 'center',
    paddingLeft: 25,
    marginTop: -5,
    paddingTop: 0,
  } as ViewStyle,

  footerTab: {
    backgroundColor: '#131313'
  } as ViewStyle,

  addBarContainer: {
    flexDirection: 'row',
    backgroundColor: Colors.claret,
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 12
  } as ViewStyle,

  addBarButton: {
    paddingLeft: 5
  } as ViewStyle,

  addBarIcon: {
    fontSize: 25,
    color: Colors.neonRed
  } as TextStyle,

  addBarText: {
    color: Colors.neonRed,
    marginLeft: -7,
    fontSize: 15
  } as TextStyle
});

export default Styles;

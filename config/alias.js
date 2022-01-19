const paths = require("./paths");

//to create new alias, add constant name here
module.exports = {
  // Support React Native Web
  // https://www.smashingmagazine.com/2016/08/a-glimpse-into-the-future-with-react-native-for-web/
  "react-native": "react-native-web",
  SRC: paths.appSrc,
  AXIOS: paths.appSrc + "/axios",
  CONSTANTS: paths.appSrc + "/constants",
  COMPONENTS: paths.appSrc + "/components",
  CUSTOM_COMPONENTS: paths.appSrc + "/components/CustomUIComponents",
  REDUX: paths.appSrc + "/redux",
  STYLES: paths.appSrc + "/resources/styles",
  ASSETS: paths.appSrc + "/resources/images/",
  FONTS: paths.appSrc + "/resources/fonts/",
  INTL: paths.appSrc + "/resources/i18n",
  UTILS: paths.appSrc + "/utils",
};

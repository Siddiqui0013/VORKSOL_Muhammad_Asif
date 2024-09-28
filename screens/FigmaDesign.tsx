import React from 'react';
import { ScrollView, Image, StyleSheet, View, Dimensions, Text } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const { width } = Dimensions.get('window');

export default function CustomScreen() {
  return (
    <LinearGradient
      // colors={['#EC1BE35C', '#EC1BE300']}
      colors={['#EC1BE300', '#EC1BE300']}
      style={styles.gradient}
    >
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Image source={require('./assets/images/bar.png')} style={styles.headerImage} />

        <Image source={require('./assets/images/hero.png')} style={styles.sectionImage1} />

        <Image source={require('./assets/images/sec-1.png')} style={styles.sectionImage2} />

        <View style={styles.section1}>
          <Image style={styles.sec1img} source={require("./assets/images/sec1-img1.png")}></Image>
          <Image style={styles.sec1img} source={require("./assets/images/sec-img2.png")}></Image>
        </View>

        <Image source={require('./assets/images/sec-2.png')} style={styles.sectionImage2} />

        <Text style={styles.text}>Creators</Text>

        <Image source={require('./assets/images/sec-2img1.png')} style={styles.sectionImage2} />

        <Image source={require('./assets/images/sec-2img2.png')} style={styles.sectionImage2} />

        <Text style={styles.text2}>Discover more {`>`} </Text>
        
        <View style={styles.footer}>
          <Image style={styles.sec1img} source={require("./assets/images/footer1.png")}></Image>
          <Image style={styles.sec1img} source={require("./assets/images/footer2.png")}></Image>
        </View>



      </ScrollView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  gradient: {
    flex: 1, 
  },
  scrollContainer: {
    padding: 0,
    margin: 0,
    alignItems: 'center', 
  },
  headerImage: {
    width: '100%',
    height:55,
    resizeMode: 'contain',
  },
  sectionImage1: {
    width: width,
    height: 400, 
    resizeMode: 'cover',
    marginVertical: 0,
  },
  sectionImage2: {
    width: width,
    height: 200, 
    resizeMode: 'contain',
    marginVertical: 0, 
  },
  section1:{
    flex:1,
    alignItems:'center',
    justifyContent:"center",
    flexDirection:"row"
  },
  sec1img: {
    width: '45%', 
    aspectRatio: 1, 
    resizeMode:"contain"
  },
  text:{
    fontWeight:"bold",
    fontSize:40
  },
  text2:{
    fontWeight:"bold",
    fontSize:17,
    color:"purple"
  },
  footer: {
    flex:1,
    alignItems:'center',
    justifyContent:"center",
    flexDirection:"row"
  },
});













// import { View, Text } from "react-native";
// import React from "react";
// import LinearGradient from "react-native-linear-gradient";

// const FigmaDesign = () => {
//   return (

//   <LinearGradient
//   start={{x: 0.0, y: 0.25}} end={{x: 0.5, y: 1.0}}
//   locations={[0,0.5,0.6]}
//   colors={['#4c669f', '#3b5998', '#192f6a']}
//   >
//   <Text>
//     Sign in with Facebook
//   </Text>
// </LinearGradient>  

// );
// };

// export default FigmaDesign;

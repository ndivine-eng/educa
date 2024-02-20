import React from 'react';
import { View, Text, Image, StyleSheet, label, money } from 'react-native';

export default function Search({ title, image, price, text, picture, drip,label , money }) {
  return (
    
      <View style={styles.clothes}>
        <Text style={{ fontSize: 15 , }}>{title}</Text>
        <Image source={{ uri: `${image}` }} style={styles.img} />
        <View style={{ display: 'flex', flexDirection: 'row', backgroundColor:'rgba(0, 0, 0, 0.5)',width:'90%', justifyContent: 'space-between', position:'absolute', bottom:0, left:0, height:'25%', borderBottomEndRadius:20, borderBottomStartRadius:20}}>
          <Text style={{color:'white'}}>{price}</Text>
          <Text>{text}</Text>
        </View>
      </View>

      
   
  );
}

const styles = StyleSheet.create({
  clothes: {
    width:200,
    height:150,
    position: 'relative',
  
  
  
  },
 
  img: {
    width: '90%', 
    height: '100%',
    borderRadius: 20,
  
  },
});

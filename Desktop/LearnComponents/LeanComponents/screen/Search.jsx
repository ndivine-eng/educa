import React from 'react';
import { View, Text, Image, StyleSheet, label, money } from 'react-native';

export default function Search({ title, image, price, text, picture, drip,label , money }) {
  return (
    <View>
      <View style={styles.clothes}>
        <Text style={{ fontSize: 20 }}>{title}</Text>
        <Image source={{ uri: `${image}` }} style={styles.img} />
        <View style={{ display: 'flex', flexDirection: 'row', backgroundColor:'#6b6b69',width:200, justifyContent: 'space-between' }}>
          <Text>{price}</Text>
          <Text>{text}</Text>
        </View>
      </View>

      <View style={styles.container}>
        <View>
          <Image source={{ uri: `${picture}` }} style={styles.img} />
          <Image source={{ uri: `${drip}` }} style={styles.img} />
          <View style={{ display: 'flex', flexDirection: 'column',width:200, gap: 10 }}>
            <Text>{label}</Text>
            <Text>{money}</Text>
          </View>
         
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  clothes: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
      
  },
  img: {
    width: 200, 
    height: 150,
  },
});

import { StyleSheet, Text, View, Image} from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign';
import React from 'react'


export default function Card({picture, label, money}) {
  return (
    <View style={styles.container}>
        <View >
            <View style={{position:'relative', gap:10}}>
          <Image source={{ uri: `${picture}` }} style={styles.img} />
          <AntDesign name="hearto" size={20} color="black" style={{position:'absolute', right:10, top:10, backgroundColor:'white', borderRadius:100, padding:5}}/>

            </View>

          <View style={{ display: 'flex', flexDirection: 'column',width:200, gap: 10 }}>
            <Text>{label}</Text>
            <Text>{money}</Text>
          </View>
         
        </View>
      </View>
  )
}

const styles = StyleSheet.create({
    container: {
        width:'100%',
        justifyContent: 'center',
        alignItems: 'center',
          
      },
      img: {
        width: 180, 
        height: 150,
      },
})
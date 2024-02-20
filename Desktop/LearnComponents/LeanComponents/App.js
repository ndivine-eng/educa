import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, ScrollView } from 'react-native';
import Search from './screen/Search';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Card from './screen/Card';

export default function App() {
  const data = [
    {
      title: '#bestSeller',
      image: 'https://tse1.mm.bing.net/th?id=OIP.xe61Ugagcj_rwPr4HvfQvQHaFh&pid=Api&P=0&h=220',
      text: 'Gj Jean',
      price: '$46.00',
    },
    {
      title: '#2bestSeller',
      image: 'https://tse1.mm.bing.net/th?id=OIP.Dw11c8nn6mEhoYV8xvdWGwHaE7&pid=Api&P=0&h=220',
      text: 'Gj Jean',
      price: '$46.00',
    },
    {
      title: '#3bestSeller',
      image: 'https://tse1.mm.bing.net/th?id=OIP.grbJGpNWRHaSp_YTbJFywQHaE8&pid=Api&P=0&h=220',
      text: 'Gj Jean',
      price: '$46.00',
    },
    {
      title: '#4bestSeller',
      image: 'https://tse1.mm.bing.net/th?id=OIP.xe61Ugagcj_rwPr4HvfQvQHaFh&pid=Api&P=0&h=220',
      text: 'Gj Jean',
      price: '$46.00',
    },
    {
      title: '#5bestSeller',
      image: 'https://tse1.mm.bing.net/th?id=OIP.Dw11c8nn6mEhoYV8xvdWGwHaE7&pid=Api&P=0&h=220',
      text: 'Gj Jean',
      price: '$46.00',
     },
  ];
const clothes= [
  {
      picture: 'https://tse2.mm.bing.net/th?id=OIP.AEvQklzT63Y4gBMTkvuaCAHaF_&pid=Api&P=0&h=220',
      label: 'white t-shirt',
      money: '$46.00',
    },
    {
      picture: 'https://tse2.mm.bing.net/th?id=OIP.StVd7xyn99MUuhg4-7ttwwHaK2&pid=Api&P=0&h=220',
      label: 'Blue t-shirt',
      money: '$46.00',
    }
]

  return (
    <View style={styles.container}>
      <ScrollView>
      <StatusBar style="auto" />
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <AntDesign name="arrowleft" size={24} color="black" style={{ borderWidth: 1, borderColor: '#cccccc', borderRadius: 80, padding: 10, backgroundColor: '#f0f0f0', marginLeft: 20 }} />
        <Text style={{ fontSize: 25 }}>Search</Text>
        <Entypo name="sound-mix" size={24} color="black" style={{ borderRadius: 80, padding: 10, marginRight: 20 }} />
      </View>
      <View style={{ flexDirection: 'row', width: 350, borderWidth: 1, borderColor: '#cccccc', borderRadius: 80, padding: 10, backgroundColor: '#f0f0f0', marginLeft: 20, marginTop: 10 }}>
        <AntDesign name="search1" size={24} color="black" />
        <TextInput placeholder='Search...' style={{ flex: 1, marginLeft: 10 }} />
        <MaterialCommunityIcons name="tune-variant" size={24} color="black" />
      </View>
      <View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ marginTop: 20, paddingLeft: 20, backgroundColor: '#fefefe' }}>
        <Text style={{ fontSize: 15, marginLeft: 20, marginTop: 20, backgroundColor:'#c59c5e',borderRadius:15,padding:5,color:'white',width:60 }}>All</Text>
        <Text style={{ fontSize: 15, marginLeft: 20, marginTop: 20, backgroundColor:'white',borderRadius:15,padding:5,width:60 }}>Man</Text>
        <Text style={{ fontSize: 15, marginLeft: 20, marginTop: 20, backgroundColor:'white',borderRadius:15,padding:5,width:80 }}>Woman</Text>
        <Text style={{ fontSize: 15, marginLeft: 20, marginTop: 20, backgroundColor:'white',borderRadius:15,padding:5,width:60 }}>Baby</Text>
        <Text style={{ fontSize: 15, marginLeft: 20, marginTop: 20, backgroundColor:'white',borderRadius:15,padding:5,width:60 }}>Dress</Text>
        <Text style={{ fontSize: 15, marginLeft: 20, marginTop: 20, backgroundColor:'white',borderRadius:15,padding:5,width:60 }}>shoes</Text>
        </ScrollView>
      </View>

      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ marginTop: 20, gap:10 }}>
        {data.map((item, index) => (
          <View style={{ margin: 3, width: 200, backgroundColor: 'white', borderRadius: 10,height:200 }} key={index}>
            <Search title={item.title} image={item.image} text={item.text} price={item.price} />
          </View>
        ))}
      </ScrollView>

      <Text style={{ fontSize: 20, fontWeight: 'bold', marginLeft: 20, marginTop: 20, }}>
        Product result (45)
      </Text>
      <View style={{ marginTop: 20, paddingLeft: 3, display: 'flex', flexDirection: 'row', flexWrap: 'wrap', }}>
        {clothes.map((item, index) => (
          <View style={{ margin: 3, width: 200, backgroundColor: '#f0f0f0', borderRadius: 10,height:200,flexWrap:'wrap' }} key={index}>
            <Card  picture={item.picture} label={item.label} money={item.money}/>
            <Card  picture={item.picture} label={item.label} money={item.money}/>

          </View>
        ))}
      </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    marginTop: 50
  },
});

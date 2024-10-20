
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, FlatList, Alert, Pressable, TextInput, SafeAreaView,Image ,ScrollView} from 'react-native';
import axios from 'axios';
import { Ionicons } from '@expo/vector-icons';
import {productsData} from './data';
import { useNavigation } from '@react-navigation/native';
export default function Screen02(){
      const navigation=useNavigation();
 const [selectedCategory, setSelectedCategory] = useState('Smart Phone');
  const [selectedType, setSelectedType] = useState('bestSales'); // Mặc định Best Sales
  const [showAll, setShowAll] = useState(false); // Mặc định chỉ hiển thị 4 sản phẩm
  const getProducts = () => {
    const categoryData = productsData.find(cat => cat.category === selectedCategory);
    if (categoryData) {
      const products = categoryData.products[selectedType];
      return showAll ? products : products.slice(0, 4); // Hiển thị 4 sản phẩm hoặc tất cả
    }
    return [];
  };

  const handleCategoryChange = (category) => {

    setSelectedCategory(category);
    setSelectedType('bestSales'); // Khi chọn danh mục mới, mặc định về Best Sales
    setShowAll(false); // Reset hiển thị sản phẩm
  };

  const handleTypeChange = (type) => {
    setSelectedType(type);
    setShowAll(false); // Reset hiển thị sản phẩm
  };

  const products = getProducts()

  const Itembox=({item})=>{
    return(
        <View style={{width:'100%',flexDirection:'row',alignItems:'center',height:80,borderWidth:1,borderColor:'#000'}}>
        <View style={{flex:20,flexDirection:'row',gap:20}}>
       <View style={{justifyContent:'center',justifyContent:'center'}}>
        <Image source={item.url} />
       </View>
       <View style={{gap:20,}}>
       <Text style={{fontSize:18,fontWeight:'bold'}}>  {item.name}</Text>
        <Image source={require('../../img/Rating5.png')} />

       </View>

        </View>
        <View style={{flex:20 ,position:'absolute',right:5}}>
        <Ionicons name="cash-outline" size={20} />
        <Text style={{fontWeight:'bold',fontSize:20}}>
        ${item.price}
        </Text>
        </View>


        </View>

    )
  };

  return(
   <View style={styles.container}>
     <View style={{flex:15,width:'100%',gap:20}}>
     <View style={{flex:40,width:'100%',flexDirection:'row',justifyContent:'space-between',alignItems:'center',marginTop:25}}>
      <View style={{flexDirection:'row',alignItems:'center'}}>
     <Pressable
     onPress={()=>{navigation.navigate('Screen_01')}}
     >
      <Ionicons name="chevron-back-outline" size={20} />
     </Pressable>
      <Text style={{fontSize:18,fontWeight:'bold'}}>
      Electronics
      </Text>

      </View>
      <View style={{flexDirection:'row',alignItems:'center',gap:10}}>
      <Ionicons name="cart-outline" size={20}/>
      <Image source={require('../../img/codicon_account.png')} />
      </View>
       

     </View>
     <View style={{flex:60,width:'100%',flexDirection:'row',justifyContent:'space-between'}} >
     <TouchableOpacity
     style={{backgroundColor:'lightgray',height:45,flexDirection:'row',alignItems:'center',
     width:'75%' ,borderRadius:5,gap:10}}
     >
     <Image source={require('../../img/search.png')}style={{marginLeft:10}} />
    <TextInput 
      placeholder="Search"
    />
     </TouchableOpacity>
      <Pressable
      style={{backgroundColor:'lightgray',height:45,width:45,borderRadius:5}}
      >
     
     </Pressable>
      </View>
     </View>
       <View style={{flex:75,width:'100%'}}>
       <View style={{flex:20,gap:10}}>
       <View style={{flex:20,width:'95%',flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
       <Text style={{fontSize:20,fontWeight:'bold'}}> Categories
       </Text>
          <Text style={{color:'gray'}}> 
          See all >
       </Text>

       </View>
       <View style={{flex:80,width:'100%',flexDirection:'row',justifyContent:'space-between'}}>
        <Pressable
        style={{borderRadius:10,height:90,width:'30%',justifyContent:'center',alignItems:'center',backgroundColor:'purple'}}
        onPress={() => handleCategoryChange('Smart Phone')}
        >
        <Image source={require('../../img/smart.png')} />
        </Pressable>
         <Pressable
        style={{borderRadius:10,height:90,width:'30%',justifyContent:'center',alignItems:'center',backgroundColor:'pink'}}
        onPress={() => handleCategoryChange('iPad')}
        >
        <Image source={require('../../img/ipad.png')} />
        </Pressable>
         <Pressable
        style={{borderRadius:10,height:90,width:'30%',justifyContent:'center',alignItems:'center',backgroundColor:'blue'}}
        onPress={() => handleCategoryChange('MacBook')}
        >
        <Image source={require('../../img/macbook.png')} />
        </Pressable>
       </View>


       </View>
        <View style={{flex:75,width:'100%'}}>
        <View style={{flex:10,flexDirection:'row',justifyContent:'space-between',width:'100%'}}>
        <Pressable
        style={{
            backgroundColor: selectedType === 'bestSales' ? 'lightgray' : 'transparent',width:'30%',height:25,borderRadius:10,justifyContent:'center',alignItems:'center'
        }}
        onPress={() => handleTypeChange('bestSales')}
        >
        <Text>Best sellers </Text>        
        </Pressable>
 <Pressable
        style={{  backgroundColor: selectedType === 'bestMatched' ? 'lightgray' : 'transparent',
         width:'30%',height:25,borderRadius:10,justifyContent:'center',alignItems:'center'
        }}
        onPress={() => handleTypeChange('bestMatched')}
        >
        <Text>Best machtes </Text>        
        </Pressable>
         <Pressable
        style={{  backgroundColor: selectedType === 'popular' ? 'lightgray' : 'transparent',
   
         width:'30%',height:25,borderRadius:10,justifyContent:'center',alignItems:'center'
        }}
        onPress={() => handleTypeChange('popular')}
        >
        <Text>Best Popular </Text>        
        </Pressable>

        </View>
         <View style={{flex:60}}>
           <FlatList
        data={products}
        
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
         <Itembox  item={item}/>
        )}
      />

    
        </View>
         <View style={{flex:30,width:'100%',gap:10,marginTop:10}}>
         {products.length > 0 && !showAll && (
         <Pressable
         style={{borderRadius:10,backgroundColor:'lightgray',width:'100%',height:45,justifyContent:'center',alignItems:'center',gap:10}}
         onPress={() => setShowAll(true)}
         >
         <Text>See all</Text>
         </Pressable>)}
         <View style={{width:'100%',alignItems:'center'}}>
         <Image source={require('../../img/banner.png')}
         style={{borderRadius:10}} />
         </View>
         <View
         style={{flexDirection:'row',justifyContent:'center',alignItems:'center',gap:5}}>
         <View style={{height:10,width:10,borderRadius:50,backgroundColor:'gray'}} />
           <View style={{height:10,width:10,borderRadius:50,backgroundColor:'gray'}} />
             <View style={{height:10,width:10,borderRadius:50,backgroundColor:'gray'}} />
         </View>


        

        </View>

       </View>
     </View>
       <View style={{flex:15,width:'100%',justifyContent:'flex-end'}}>
     <View style={{flexDirection:'row',width:'100%',height:55,justifyContent:'center',alignItems:'flex-end',borderTopColor:'#000',marginTop:10,borderTopWidth:1,gap:50}}>
       <Pressable>
  <Image source={require('../../img/clarity_home-solid.png')} 
  style={{height:30,width:30,color:'blue'}}
  />
  <Text>
  Home
  </Text>


       </Pressable>
         <Pressable>
  <Image source={require('../../img/search.png')}   style={{height:30,width:30,color:'blue'}}/>
  <Text>
  Search
  </Text>


       </Pressable>
         <Pressable>
  <Image source={require('../../img/mdi_heart-outline.png')}   style={{height:30,width:30,color:'blue'}}/>
  <Text>
  Heart
  </Text>


       </Pressable>
         <Pressable>
  <Image source={require('../../img/solar_inbox-outline.png')}   style={{height:30,width:30,color:'blue'}}/>
  <Text>
  Mail
  </Text>


       </Pressable>
         <Pressable>
  <Image source={require('../../img/codicon_account.png')}  style={{height:30,width:30,color:'blue'}} />
  <Text>
  Account
  </Text>


       </Pressable>
     </View>
       
     </View>

    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
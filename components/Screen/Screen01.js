import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, FlatList, Alert, Pressable, TextInput, SafeAreaView,Image ,ScrollView} from 'react-native';
import axios from 'axios';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function Screen01(){
  const navigation= useNavigation();
  const [name,setname]= useState('');
  const [password,setpassword]=useState('');
  const [show,setshow]= useState(false)
  const showeye=()=>{
    setshow(!show);
  }
  const data=[
    {use:'admin'
    ,password:'admin'}
  ]
  const navia_Screen02=()=>{
     navigation.navigate('Screen_02');
  }
const checklogin=()=>{
  if(name===''|| password=='')
  {
    Alert.alert('nhập thông tin đầy đủ');
  }
  else{
 let validUser = false; 
    data.map((item) => {
      if (item.use === name && item.password === password) {
        validUser = true; 
      }
    });

    if (validUser) {
      Alert.alert('Đăng nhập thành công');
      navia_Screen02();
      // Thực hiện thêm các logic khác như điều hướng
    } else {
      Alert.alert('Sai tên đăng nhập hoặc mật khẩu');
    }}
}

  return(
    <View style={styles.container}>
   <View style={{flex:40,width:'100%'}}>
    <View
    style={{flex:1,width:'100%',justifyContent:'flex-end',alignItems:'center',gap:10}}>
    <Image source={require('../../img/icon.png')} style={{height:100,width:100}} />
    <Text style={{fontSize:25,fontWeight:'bold'}}>
    Hello  Again!
    </Text>
    <Text>
    Log into your accoutn
    </Text>



    </View>
   </View>
    <View style={{flex:60,width:'100%',marginTop:20}}>
<View style={{flex:70, alignItems:'center',gap:20}}>
    <TouchableOpacity
    style={styles.inputtext}
    >
    <Ionicons name="mail-outline" size={25} style={{marginLeft:15}} />

    <TextInput
     placeholder='Enter your email address'
     value={name}
     onChangeText={(text)=>setname(text)}
      />
    </TouchableOpacity>
        <TouchableOpacity
    style={styles.inputtext}
    >
    <Ionicons name="lock-closed-outline" size={25} style={{marginLeft:15}} />

    <TextInput
     placeholder='Enter your email address'
     value={password}
     onChangeText={(text)=>setpassword(text)}
     keyboardType='password'
     secureTextEntry={!show}
      />
      <Pressable
      onPress={showeye}>
      <Ionicons name={show?'eye':'eye-off'} size={25} style={{ marginLeft:60}}/>
      </Pressable>
    </TouchableOpacity>
   <View style={{width:'90%',alignItems:'flex-end'}}>
    <Text style={{color:'blue'}}>
    Forgot password?
    </Text>
    <TouchableOpacity style={{
      backgroundColor:'blue',width:'100%',borderRadius:10,height:50,justifyContent:'center',marginTop:10
    }}
    onPress={checklogin}
    >
    <Text style={{textAlign:'center',color:'#fff'}}>
    Continue
    </Text>

    </TouchableOpacity>
   </View>
</View>
<View style={{flex:30}}>
<View style={{flex:20,width:'100%',justifyContent:'center',alignItems:'center',flexDirection:'row'}}>
<View style={styles.line} />
<Text >
 or
</Text>
<View style={styles.line} />
 </View>
<View style={{flex:80,flexDirection:'row',justifyContent:'center',alignItems:'center'}}>

 <Image source={require('../../img/google.png')} size={20}/>
 <Image source={require('../../img/face.png')} size={20}/>
  <Image source={require('../../img/apple.png')} size={20}/>
 </View>
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
  inputtext:{
flexDirection:'row',borderWidth:1,borderColor:'#000',borderRadius:10,width:'90%',height:50,alignItems:'center',gap:10
  },
   line: {

       
        height: 1,
        width:100,
        marginTop: 10,
        backgroundColor: '#000',
        marginHorizontal: 10,
    },

  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
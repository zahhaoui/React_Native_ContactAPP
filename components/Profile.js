import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';

export default class ProfileView extends Component {

  render() {
    return (
     <View style={styles.container}>
     

          <View style={styles.header}>
            <View style={styles.headerContent}>
                <Image style={styles.avatar} source={{uri: 'https://bootdey.com/img/Content/avatar/avatar2.png'}}/>
                <Text style={styles.name}>
                  Mohammed Amine Zahhaoui 
                </Text>

            </View>
          </View>

          <View style={styles.profileDetail}>
            <View style={styles.detailContent}>
              <Text style={styles.title}>Numero de Telephone</Text>
              <Text style={styles.count}>0661356543</Text>
            </View>
            <View style={styles.detailContent}>
              <Text style={styles.title}>Groupe</Text>
              <Text style={styles.count}>Groupe promo</Text>
            </View>
          </View>

          <View style={styles.body}>
            <View style={styles.bodyContent}>
                          <Text style={styles.description}>Lorem ipsum dolor sit amet, saepe sapientem eu nam. Qui ne assum electram expetendis, omittam deseruisse consequuntur ius an,</Text>
  <TouchableOpacity style={styles.buttonContainer}>
                <Text>Appeler</Text>  
              </TouchableOpacity> 
              <TouchableOpacity style={styles.buttonContainer}>
                <Text>Envoyer un message</Text>  
              </TouchableOpacity> 
            </View>
        </View>
 </View>   

    );
  }
}

const styles = StyleSheet.create({
 
  header:{
    backgroundColor: "#00CED1",
  },
  headerContent:{
    padding:30,
    alignItems: 'center',
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    marginBottom:10,
  },
  name:{
    fontSize:22,
    color:"#FFFFFF",
    fontWeight:'600',
  },
  profileDetail:{
    alignSelf: 'center',
    marginTop:200,
    alignItems: 'center',
    flexDirection: 'row',
    position:'absolute',
    backgroundColor: "#ffffff"
  },
  detailContent:{
    margin:10,
    alignItems: 'center'
  },
  title:{
    fontSize:20,
    color: "#00CED1"
  },
  count:{
    fontSize:18,
  },
  userInfo:{
    fontSize:16,
    color:"#778899",
    fontWeight:'600',
    marginTop:100,

  },
  bodyContent: {
    flex: 1,
    alignItems: 'center',
    padding:30,
    marginTop:40
  },
  textInfo:{
    fontSize:18,
    marginTop:20,
    color: "#696969",
  },
  buttonContainer: {
    marginTop:10,
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:250,
    borderRadius:30,
    backgroundColor: "#00CED1",
  },
  description:{
    fontSize:20,
    color: "#00CED1",
    marginTop:10,
    textAlign: 'center'
  },
});

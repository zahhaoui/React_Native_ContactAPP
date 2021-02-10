import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Alert,
  ScrollView,
  TextInput,
  FlatList,
  Button,
  Dimensions,
  KeyboardAvoidingView
} from 'react-native';
const { width, height } = Dimensions.get('window');
export default class Chat extends Component {

  constructor(props) {
    super(props);
    this.state = {
      msg: '',
      messages: [
        {id:1, sent: true,  msg: 'Salam Khalil',   image:'https://www.bootdey.com/img/Content/avatar/avatar1.png'},
        {id:2, sent: true,  msg: 'Comment ca marche mon frere?',   image:'https://www.bootdey.com/img/Content/avatar/avatar1.png'},
        {id:3, sent: false, msg: 'Hamdolah et toi ?', image:'https://www.bootdey.com/img/Content/avatar/avatar6.png'},
        {id:4, sent: true,  msg: 'Hamdolah ca marche.',   image:'https://www.bootdey.com/img/Content/avatar/avatar1.png'},
        {id:5, sent: false, msg: 'Tu as fini le projet Mobile?', image:'https://www.bootdey.com/img/Content/avatar/avatar6.png'},
        {id:6, sent: true,  msg: 'Oui je suis dans la derniere phase du developpement il me reste que l interface du memo et l appel', image:'https://www.bootdey.com/img/Content/avatar/avatar1.png'},
        {id:7, sent: false, msg: 'Tres bien bon courage', image:'https://www.bootdey.com/img/Content/avatar/avatar6.png'},
      ]
    };
    this.send = this.send.bind(this);
    this.reply = this.reply.bind(this);
    this.renderItem   = this._renderItem.bind(this);
  }

  reply() {
    var messages = this.state.messages;
    messages.push({
      id:Math.floor((Math.random() * 99999999999999999) + 1),
      sent: false,
      msg: this.state.msg,
      image:'https://www.bootdey.com/img/Content/avatar/avatar6.png'
    });
    this.setState({msg:'', messages:messages});
  }

  send() {
    if (this.state.msg.length > 0) {
      var messages = this.state.messages;
      messages.push({
        id:Math.floor((Math.random() * 99999999999999999) + 1),
        sent: true,
        msg: this.state.msg,
        image:'https://www.bootdey.com/img/Content/avatar/avatar1.png'
      });
      this.setState({messages:messages});
      setTimeout(() => {
        this.reply();
      }, 2000);
    }
  }

  _renderItem = ({item}) => {
    if (item.sent === false) {
      return (
        <View style={styles.eachMsg}>
          <Image source={{ uri: item.image}} style={styles.userPic} />
          <View style={styles.msgBlock}>
            <Text style={styles.msgTxt}>{item.msg}</Text>
          </View>
        </View>
      );
    } else{
      return (
        <View style={styles.rightMsg} >
          <View style={styles.rightBlock} >
            <Text style={styles.rightTxt}>{item.msg}</Text>
          </View>
          <Image source={{uri: item.image}} style={styles.userPic} />
        </View>
      );
    }
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
          <KeyboardAvoidingView behavior="padding" style={styles.keyboard}>
            <FlatList 
              style={styles.list}
              extraData={this.state}
              data={this.state.messages}
              keyExtractor = {(item) => {
                return item.id;
              }}
              renderItem={this.renderItem}/>
            <View style={styles.input}>
              <TextInput
                style={{flex: 1 }}
                value={this.state.msg}
                placeholderTextColor = "#696969"
                onChangeText={msg => this.setState({ msg })}
                blurOnSubmit={false}
                onSubmitEditing={() => this.send()}
                placeholder="Type a message"
                returnKeyType="send"/>
            </View>
          </KeyboardAvoidingView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  keyboard: {
    flex: 1,
    justifyContent: 'center',
  },
  image: {
    width,
    height,
  },
  header: {
    height: 65,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#075e54',
  },
  left: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  right: {
    flexDirection: 'row',
  },
  chatTitle: {
    color: '#fff',
    fontWeight: '600',
    margin: 10,
    fontSize: 15,
  },
  chatImage: {
    width: 30,
    height: 30,
    borderRadius: 15,
    margin: 5,
  },
  input: {
    flexDirection: 'row',
    alignSelf: 'flex-end',
    padding: 10,
    height: 40,
    width: width - 20,
    backgroundColor: '#fff',
    margin: 10,
    shadowColor: '#3d3d3d',
    shadowRadius: 2,
    shadowOpacity: 0.5,
    shadowOffset: {
      height: 1,
    },
    borderColor:'#696969',
    borderWidth:1,
  },
  eachMsg: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    margin: 5,
  },
  rightMsg: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    margin: 5,
    alignSelf: 'flex-end',
  },
  userPic: {
    height: 40,
    width: 40,
    margin: 5,
    borderRadius: 20,
    backgroundColor: '#f8f8f8',
  },
  msgBlock: {
    width: 220,
    borderRadius: 5,
    backgroundColor: '#ffffff',
    padding: 10,
    shadowColor: '#3d3d3d',
    shadowRadius: 2,
    shadowOpacity: 0.5,
    shadowOffset: {
      height: 1,
    },
  },
  rightBlock: {
    width: 220,
    borderRadius: 5,
    backgroundColor: '#97c163',
    padding: 10,
    shadowColor: '#3d3d3d',
    shadowRadius: 2,
    shadowOpacity: 0.5,
    shadowOffset: {
      height: 1,
    },
  },
  msgTxt: {
    fontSize: 15,
    color: '#555',
    fontWeight: '600',
  },
  rightTxt: {
    fontSize: 15,
    color: '#202020',
    fontWeight: '600',
  },
}); 
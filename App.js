// import React from 'react';
// import {View, Text, TextInput, TouchableOpacity} from 'react-native';
// import {useState} from 'react';
// const App = () => {
//   const [state, setstate] = useState(false);
//   return (
//     <View
//       style={{backgroundColor: '#511be3',flex: 1}}>
//       <View
//         style={{  paddingTop: '45%',  paddingLeft: '10%',  paddingBottom: '20%',}}>
//         <Text style={{fontSize: 40, color: '#fff'}}>Welcome</Text>
//       </View>
//       {state ? (
//         <View
//           style={{  backgroundColor: '#fff',  borderTopStartRadius: 60,  flex: 1,  borderTopEndRadius: 60,}}>
//           <Text
//             style={{  color: 'black',  fontSize: 30,  paddingLeft: '10%',  paddingTop: 35,  paddingBottom: 25,
//           }}> Login
//           </Text>
//           <TextInput
//             style={{  borderBottomColor: 'black',  borderBottomWidth: 2,  marginLeft: 40,  color: 'black',  marginRight: 40,}}
//              placeholder={'Email'} placeholderTextColor="silver" value={Text}
//           />
//           <TextInput placeholder={'Password'} secureTextEntry={true} placeholderTextColor="silver" value={Text}
//             style={{  borderBottomColor: 'black',  borderBottomWidth: 2,  marginLeft: 40,  marginTop: 40,  color: 'black',  marginRight: 40,}}/>
//           <TouchableOpacity
//             style={{ backgroundColor: 'blue', width: 175, height: 60, marginTop: 50, borderRadius: 30, alignSelf: 'center', justifyContent: 'center', alignItems: 'center',}}>
//             <Text style={{color: '#fff', fontSize: 20}}>login</Text>
//           </TouchableOpacity>
//           <View style={{display: 'flex', marginTop: 50, alignItems: 'center'}}>
//             <Text style={{color: 'black', fontSize: 18}}>
//               Create an account?
//             </Text>
//             <Text
//               onPress={() => setstate(!state)}
//               style={{Left: 50,fontWeight: 'bold',color: 'black',fontSize: 18,}}>
//               Sign up
//             </Text>
//           </View>
//         </View>
//       ) : (
//         <View
//           style={{ backgroundColor: '#fff', borderTopStartRadius: 60, flex: 1, borderTopEndRadius: 60,}}>
//           <Text
//             style={{color: 'black',fontSize: 30,paddingLeft: '10%',paddingTop: 35,paddingBottom: 25,}}>
//              Create an account
//           </Text>
//           <TextInput
//             style={{  borderBottomColor: 'black',  borderBottomWidth: 2,  marginLeft: 40,  color: 'black',  marginRight: 40,}}
//             placeholder={'Name'}
//             placeholderTextColor="silver"
//             value={Text}
//           />
//           <TextInput
//             style={{  borderBottomColor: 'black',  borderBottomWidth: 2,  marginLeft: 40,  marginTop: 30,color: 'black',  marginRight: 40,}}
//             placeholder={'Email'}
//             placeholderTextColor="silver"
//             value={Text}
//           />
//           <TextInput
//             placeholder={'Password'}
//             secureTextEntry={true}
//             placeholderTextColor="silver"
//             value={Text}
//             style={{ borderBottomColor: 'black', borderBottomWidth: 2, marginLeft: 40, marginTop: 30, color: 'black', marginRight: 40,}}/>
//           <TouchableOpacity
//             style={{ backgroundColor: 'blue', width: 175, height: 60, marginTop: 50, borderRadius: 30, alignSelf: 'center', justifyContent: 'center', alignItems: 'center',}}>
//             <Text style={{color: '#fff', fontSize: 20}}>Su</Text>
//           </TouchableOpacity>
//           <View style={{display: 'flex', marginTop: 40, alignItems: 'center'}}>
//             <Text
//               onPress={() => setstate(!state)}
//               style={{Left: 50,fontWeight: 'bold',color: 'black',fontSize: 18,
//               }}>
//              Already have an account
//             </Text>
//           </View>
//         </View>
//       )}
//     </View>
//   );
// };

// export default App;
import React, { useState } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View } from "react-native";

const App = () => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Hello World!</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>Hide Modal</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.textStyle}>Show Modal</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 9,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
});

export default App;
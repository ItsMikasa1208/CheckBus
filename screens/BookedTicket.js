import { View, TextInput, Modal, FlatList, TouchableOpacity, Text ,StyleSheet,Pressable,Alert,Image} from 'react-native';
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import MapView from 'react-native-maps';
import DropDownPicker from 'react-native-dropdown-picker';
import { FontAwesome } from '@expo/vector-icons';

const BookedTicket = ({route}) => {
const {routename}=route.params;
const {busno}=route.params;
const{drivername}=route.params;
const navigation = useNavigation();
const [modalVisible, setModalVisible] = useState(true);
  //const [modalVisible, setmodalVisible] = useState(false);
   
      const [open, setOpen] = useState(false);
      const [value, setValue] = useState(null);
      const [items, setItems] = useState([
        {label: 'UTI bank', value: 'UTI bank'},
        {label: 'Sadharsivam Nagar', value: 'Sadharsivam Nagar'},
        {label: 'Kaiveli', value: 'Kaiveli'},
        {label: 'Ram Nagar', value: 'Ram Nagar'}
       
      ]);

    return (
      <View style={styles.container}>

        <Text style={{ borderBottomColor: 'grey', borderBottomWidth: StyleSheet.hairlineWidth,fontSize:25,alignSelf:"center",marginBottom:20 }}>V-{busno} {routename}</Text>

        <Image
        style={{height:300,width:300,alignSelf:"center"}}
        source={require('../assets/qrcode.png')}
      />
<Text style={{marginTop:30,fontWeight:"bold",fontSize:20,textAlign:'center',}}>Ticket Details</Text>
<View style={{flexDirection:"row",alignSelf:"center",justifyContent:"space-between",marginTop:20}}>
        <View style={{marginRight:80}}>
          <Text style={{marginLeft:20,marginTop:10,fontWeight:"bold",fontSize:18}}>Bus Name</Text>
          <Text style={{marginLeft:20,marginTop:10,fontWeight:"bold",fontSize:18}}>Bus Number</Text>
          <Text style={{marginLeft:20,marginTop:10,fontWeight:"bold",fontSize:18}}>Driver Name</Text>

        </View>
        <View>
          <Text style={{marginLeft:20,marginTop:10,fontSize:18}}>{routename}</Text>
          <Text style={{marginLeft:20,marginTop:10,fontSize:18}}>{busno}</Text>
          <Text style={{marginLeft:20,marginTop:10,fontSize:18}}>{drivername}</Text>

        </View>
        </View>

        

        
        
      </View>
    );
  };
  
  const styles = StyleSheet.create({

  container:{
    flex:1, 
    marginTop:'40%',
    padding:20,

  },
  button: {
    borderRadius: 10,
    padding: 10,
    backgroundColor:"#84c8cd",
    marginTop:60

  },

  button1: {
    borderRadius: 10,
    padding: 10,
    backgroundColor:"red",
    marginTop:60,
    width:"50%", 
    alignSelf:"center"

  },





    // container: {
    //   flex: 1,
    //   margin:15
    //   //backgroundColor:"white"
    // },
    // centeredView: {
    //     flex: 1,
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     //marginTop: ,
    //   },
    // modalView: {
    //    // marginTop: "10%",
    //     width:"90%",
    //     backgroundColor: 'white',
    //     borderRadius: 20,
    //     padding: 10,
    //     alignItems: 'center',
    //     shadowColor: '#000',
    //     // shadowOffset: {
    //     //   width: 0,
    //     //   height: 2,
    //     // },
    //     // shadowOpacity: 0.25,
    //     // shadowRadius: 4,
    //     elevation: 20,
    //   },
    //   button: {
    //     borderRadius: 10,
    //     padding: 10,
    //     elevation: 2,
    //   },
    //   buttonOpen: {
    //     backgroundColor: '#F194FF',
    //   },
    //   buttonClose: {
    //     backgroundColor: '#2196F3',
    //   },
    //   textStyle: {
    //     color: 'white',
    //     fontWeight: 'bold',
    //     textAlign: 'center',
    //   },
    //   modalText: {
    //     marginBottom: 15,
    //     textAlign: 'center',
    //   },


  
  });

  export default BookedTicket;

     {/* <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
          <Text style={{fontWeight:"bold",fontSize:25,color:"black"}}>V-51 Kovilambakkam</Text>

          <View style={{  borderBottomColor: 'grey', borderBottomWidth: StyleSheet.hairlineWidth,marginTop:10}}/>

          <View style={{marginTop:20,marginBottom:30}}>
                <DropDownPicker
            open={open}
            value={value}
            items={items}
            setOpen={setOpen}
            setValue={setValue}
            setItems={setItems}
            />
          </View>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.textStyle}>Book</Text>
            </Pressable>
          </View>
        </View>
      </Modal> */}
        
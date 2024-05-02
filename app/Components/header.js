import React, { useState } from 'react';

import { View, StyleSheet, Text, Image, ActivityIndicator, SafeAreaView,TouchableOpacity,FlatList,ScrollView } from 'react-native';
import SliderMenu from './sliderbar';


const Header = () => {
  

    const categories = ['all', 'categories', 'sports', 'politics', 'health']; // Add your categories here

    
    const renderItem = ({ item }) => (
      <View >
        <View style={styles.categoryItem}>
          <Text style={styles.categoryText}>{item}</Text>
        </View>
        </View>
      );

      const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
    };
  
    const closeMenu = () => {
      setIsMenuOpen(false);
    };

  return (
    <ScrollView>
      <SafeAreaView style={styles.all}>
      <SliderMenu isOpen={isMenuOpen} onClose={closeMenu} />
        <View style={styles.headertop}>
        <View style={styles.menuLogo}>
             <TouchableOpacity onPress={toggleMenu} style={styles.menuButton}>

                <Image 
                    source={require('../../assets/icons/menu.png')}
                    style={styles.iconMenu}
                    />
            </TouchableOpacity>
           
           

                <Image 
                source={require('../../assets/img/logo.png')}
                style={styles.logo}
                />

        </View>
        
        <View style={styles.otherIcon}>

            <TouchableOpacity>
                <Image 
                source={require('../../assets/icons/Search-icon.png')}
                style={styles.iconserch}
                />
            </TouchableOpacity>

            <Image 
            source={require('../../assets/icons/icon-park-outline_local.png')}
            style={styles.iconLocal}
            />

            <TouchableOpacity  style={styles.button}>
                <Text style={styles.buttonText}>Sign In</Text>
            </TouchableOpacity>
            
    </View>
    <View>

    </View>

  </View>
  <View style={styles.sectionCategory}>

    <FlatList
        data={categories}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
  />

  </View>
    </SafeAreaView>
    </ScrollView>
    
  )
}
const styles = StyleSheet.create({
  all:{
          backgroundColor:'#E4E4E4',
         
          height:1000,
        },
    headertop:{
        width:'100%',
        height:75,
        backgroundColor:'#E4E4E4',
        flexDirection:'row',
        justifyContent: 'space-between',
        borderBottomColor:"#223165",
        borderBottomWidth:1
    },
     //icon menu and logo
     menuLogo:{
        flexDirection:'row',
        alignItems:'center',
        paddingHorizontal:15
    },
    iconMenu:{
        marginRight:10
    },
    //end menu and logo
     //icon buuton and icons search..
     otherIcon:{
        flexDirection:'row',
        alignItems:'center',
    },
    button: {
        width:100,
        height:35,
        backgroundColor: '#223165',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft:15
        
      },
      buttonText:{
        color:'#fff',
      },
      iconLocal:{
        marginLeft:15
      },
      iconserch:{
        marginLeft:40
      },
      //End icon buuton and icons search..

      //sliderCategory
      sectionCategory:{
        backgroundColor:'#fff'
      
      },
      categoryItem:{
        backgroundColor:"#F0EEEE",
        marginLeft:10,
        padding:10,
        marginTop:15,
        marginBottom:15,
        borderRadius:10,
        elevation: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.3,
        shadowRadius: 1,  
      },
      categoryText:{
        color:'#223165',
        textTransform:'uppercase',
        fontWeight:'bold'
      },
      //End sliderCategory
})
export default Header
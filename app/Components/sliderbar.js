import React, { useRef, useEffect } from 'react';
import { View, TouchableOpacity, StyleSheet, Text, Animated, Dimensions,Image } from 'react-native';



const SliderMenu = ({ isOpen, onClose }) => {
  
  const menuAnimation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    toggleMenu();
  }, [isOpen]);

  const toggleMenu = () => {
    const toValue = isOpen ? 1 : 0;
    Animated.timing(menuAnimation, {
      toValue,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  return (
    <Animated.View style={[styles.sliderMenu, { transform: [{ translateX: menuAnimation.interpolate({
      inputRange: [0, 1],
      outputRange: [-300, 0],
    }) }] }]}>
     
      <TouchableOpacity onPress={onClose} style={styles.closeButton}>
                <Image 
                    source={require('../../assets/icons/IocnSliderBar/cloiseMenu.png')}
                    style={styles.iconCloisMenu}
                />
      </TouchableOpacity>
      <View style={styles.slideMenuIcon}>
      <Image 
                    source={require('../../assets/icons/IocnSliderBar/iocnMenuSlider1.png')}
                    style={styles.iconCloisMenu1}
                />
                <Image 
                    source={require('../../assets/icons/IocnSliderBar/iocnMenuSlider2.png')}
                    
                />
      </View>




      <TouchableOpacity style={styles.menuItem}>
                  <Image 
                    source={require('../../assets/icons/IocnSliderBar/Post.png')}
                    style={styles.Icons}
                    />
                  <Text style={styles.TextMenu}>Post</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.menuItem}>
                  <Image 
                    source={require('../../assets/icons/IocnSliderBar/Post.png')}
                    style={styles.Icons}
                    />
                  <Text style={styles.TextMenu}>Events</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.menuItem}>
                  <Image 
                    source={require('../../assets/icons/IocnSliderBar/Post.png')}
                    style={styles.Icons}
                    />
                  <Text style={styles.TextMenu}>Directory</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.menuItem}>
                  <Image 
                    source={require('../../assets/icons/IocnSliderBar/Post.png')}
                    style={styles.Icons}
                    />
                  <Text style={styles.TextMenu}>Ads</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.menuItem}>
                  <Image 
                    source={require('../../assets/icons/IocnSliderBar/Post.png')}
                    style={styles.Icons}
                    />
                  <Text style={styles.TextMenu}>Members</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.menuItem}>
                  <Image 
                    source={require('../../assets/icons/IocnSliderBar/Post.png')}
                    style={styles.Icons}
                    />
                  <Text style={styles.TextMenu}>Store</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.menuItem}>
                  <Image 
                    source={require('../../assets/icons/IocnSliderBar/Post.png')}
                    style={styles.Icons}
                    />
                  <Text style={styles.TextMenu}>Help</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.menuItem}>
                  <Image 
                    source={require('../../assets/icons/IocnSliderBar/Post.png')}
                    style={styles.Icons}
                    />
                  <Text style={styles.TextMenu}>Legal Pages</Text>
      </TouchableOpacity>
     


      <View style={styles.following}>
        <Text style={styles.textFollowing}>Following</Text>
        <TouchableOpacity style={styles.ListFollowing}>
                  <Image 
                    source={require('../../assets/icons/IocnSliderBar/Ellipse1.png')}
                    style={styles.Icons}
                    />
                  <Text style={styles.TextUser}>Username</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.ListFollowing}>
                  <Image 
                    source={require('../../assets/icons/IocnSliderBar/Ellipse1.png')}
                    style={styles.Icons}
                    />
                  <Text style={styles.TextUser}>Username</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.ListFollowing}>
                  <Image 
                    source={require('../../assets/icons/IocnSliderBar/Ellipse1.png')}
                    style={styles.Icons}
                    />
                  <Text style={styles.TextUser}>Username</Text>
      </TouchableOpacity>
      </View>


      <View style={styles.Theme}>
        <Text style={styles.textTheme}>Theme</Text>
        <TouchableOpacity style={styles.ListTheme}>
                  <Image 
                    source={require('../../assets/icons/IocnSliderBar/gg_dark-mode.png')}
                    style={styles.Icons}
                    />
                  <Text style={styles.TextTheme}>System Default</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.ListTheme}>
                  <Image 
                    source={require('../../assets/icons/IocnSliderBar/entypo_light-down.png')}
                    style={styles.Icons}
                    />
                  <Text style={styles.TextTheme}>System Default</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.ListTheme}>
                  <Image 
                    source={require('../../assets/icons/IocnSliderBar/ic_outline-dark-mode.png')}
                    style={styles.Icons}
                    />
                  <Text style={styles.TextTheme}>System Default</Text>
      </TouchableOpacity>
      
      </View>

    </Animated.View>
  );
};

const styles = StyleSheet.create({
  sliderMenu: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: 200,
    height: 1000, // Use screen height dynamically
    backgroundColor: '#fff',
    zIndex: 1,
    elevation: 5,
    paddingTop: 50, // Adjust as needed
  },
  closeButton: {
    position: 'absolute',
    top:50,
    left: 180,
  },
  menuItem: {
    padding: 10,
    flexDirection:'row',
    paddingLeft:20
  },
  slideMenuIcon:{
    paddingLeft:20,
    flexDirection:'row',
    bottom:15
    
    
  },
  iconCloisMenu1:{
    marginRight:30,
  },
  Icons:{
    marginRight:10
  },
  TextMenu:{
    fontWeight:'bold'
  },
  following:{
    padding:10,
    borderBottomWidth:2,
    marginHorizontal:20
  },
  textFollowing:{
    color:'#000',
    fontSize:10,
    textTransform:'uppercase'
  },
  ListFollowing:{
    marginTop:15,
    flexDirection:'row',
    alignItems:'center',
    marginBottom:10
    
  },
  Theme:{
    padding:10,
    borderBottomWidth:2,
    marginHorizontal:20
  },
  textTheme:{
    color:'#000',
    fontSize:10,
    textTransform:'uppercase',
    marginTop:10,
  },
  ListTheme:{
    marginTop:15,
    flexDirection:'row',
    alignItems:'center',
    marginBottom:10
    
  },
  Theme:{
    padding:10,
    
    marginHorizontal:20
  },

});

export default SliderMenu;

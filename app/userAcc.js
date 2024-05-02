import React from 'react'
import { View, StyleSheet, Text, Image, ActivityIndicator, SafeAreaView,TouchableOpacity,FlatList,ScrollView } from 'react-native';
import { EvilIcons ,Entypo ,FontAwesome6,FontAwesome,AntDesign,FontAwesome5,Fontisto  } from '@expo/vector-icons';





const UserAcc = () => {
    
  const categories = ['all', 'categories', 'sports', 'politics', 'health']; // Add your categories here

  const renderItem = ({ item }) => (
    <View >
      <View style={styles.categoryItem}>
        <Text style={styles.categoryText}>{item}</Text>
      </View>
      </View>
    );

  return (
    <ScrollView>
    <SafeAreaView style={styles.all}>
      <View>

        <View style={styles.headertop}>
        <View style={styles.menuLogo}>
            <TouchableOpacity>

                <Image 
                source={require('../assets/icons/menu.png')}
                style={styles.iconMenu}
                />
                </TouchableOpacity>

                <Image 
                source={require('../assets/img/logo.png')}
                style={styles.logo}
                />

        </View>
        
        <View style={styles.otherIcon}>

            <TouchableOpacity>
                <Image 
                source={require('../assets/icons/Search-icon.png')}
                style={styles.iconserch}
                />
            </TouchableOpacity>

            <Image 
            source={require('../assets/icons/icon-park-outline_local.png')}
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
    <View style={styles.SectioCoverProfile}>
        
        <View >
        <Image 
                source={require('../assets/img/imageCover.png')}
                style={styles.CoverProfile}
        />
           <View>
            <TouchableOpacity style={styles.addFriend}>
                    <Image 
                        source={require('../assets/icons/add-friend.png')}
                     />
                    <Text style={styles.textAddFollow}>Follow</Text>
                </TouchableOpacity>
           </View>
        </View>
         <Image 
                source={require('../assets/img/Profile.jpg')}
                style={styles.imgProfile}
        />
        <Text style={styles.nameProfie}>Jimmy Hopkins</Text>

        <View style={styles.iconSocial}>

          <FontAwesome name="facebook-f" size={19} color="black" style={styles.icon}/>
          <FontAwesome6 name="x-twitter" size={19} color="black" style={styles.icon} />
          <FontAwesome name="linkedin" size={19} color="black" style={styles.icon} />
          <Entypo name="instagram" size={19} color="black" style={styles.icon} />
          <AntDesign name="skype" size={19} color="black" style={styles.icon} />
          <AntDesign name="youtube" size={19} color="black" style={styles.icon} />
          <FontAwesome6 name="discord" size={19} color="black" style={styles.icon} />
          <FontAwesome5 name="telegram-plane" size={19} color="black" style={styles.icon} />
          <Fontisto name="world-o" size={19} color="black" style={styles.icon} />
      
      </View>
      <Text style={styles.bioParag}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text>

      <View style={styles.sectionFollo}>
        
        <View style={styles.followers}>
          <Text style={styles.textfollw}>7,534</Text>
          <Text>Followers</Text>
        </View>

        <View style={styles.followers}>
          <Text style={styles.textfollw}>2,143</Text>
          <Text>Following</Text>
        </View>

        <View style={styles.posts}>
          <Text style={styles.textfollw}>1,000</Text>
          <Text>Posts</Text>
        </View>

      </View>   

      <View style={styles.SectionNavigat}>
          <TouchableOpacity style={styles.btnNavActive}>
            <Text style={styles.textBtnNavActive}>Account</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnNav}>
            <Text style={styles.textBtnNav}>Posts</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnNav}>
            <Text style={styles.textBtnNav}>Gallery</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnNav}>
            <Text style={styles.textBtnNav}>Followers</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnNav}>
            <Text style={styles.textBtnNav}>Ads</Text>
          </TouchableOpacity>
      </View>


    </View>
  

    <View style={styles.SectionbioParag2}>
          <View style={styles.icontext}>
            <Image 
              source={require('../assets/icons/mdi_biography.png')}
            />   
            <Text style={styles.textbio}>Biography</Text>

          </View>
          <Text style={styles.Pargraphbio}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text>
      </View>

      <View style={styles.BasicInformation}>
         <View style={styles.icontextinfo}>
            <Image 
              source={require('../assets/icons/iconamoon_profile-fill.png')}
            />   
            <Text style={styles.textinfo}>Basic Information</Text>     
          </View>
          <View style={styles.userinfo}>
                <View >
                  <Text style={styles.textinfo1}>Username</Text>
                  <Text style={styles.textinfo1}>First & Last Name </Text>
                  <View style={styles.gender}>
                    <Image 
                        source={require('../assets/icons/gender.png')}
                        style={styles.icongender}
                    />   
                    <Text style={styles.textinfo1}>Gender</Text>
                  </View>
                  <Text style={styles.textinfo1}>Date of Birth</Text>
                  <Text style={styles.textinfo1}>Occupation</Text>
                  <Text style={styles.textinfo1}>Education</Text>
                </View>   

                <View>
                  <Text style={styles.textinfo2}>AmandaSmith</Text>
                  <Text style={styles.textinfo2}>Amanda Smith</Text>
                  <Text style={styles.textinfo2}>Male</Text>
                  <Text style={styles.textinfo2}>00 / 00 / 0000</Text>
                  <Text style={styles.textinfo2}>Occupation</Text>
                  <Text style={styles.textinfo2}>Education</Text>
                </View>
          </View>
            <View style={styles.icontextinfo}>
              <Image 
                source={require('../assets/icons/iconamoon_profile-fill.png')}
              />   
              <Text style={styles.textinfo}>Contact Information</Text>     
            </View>
            
          <View style={styles.userinfo}>
                <View >
                <View style={styles.gender}>
                    <Image 
                        source={require('../assets/icons/gender.png')}
                        style={styles.icongender}
                    />   
                    <Text style={styles.textinfo1}>Phone Number</Text>
                  </View>
                  
                  
                  <View style={styles.gender}>
                    <Image 
                        source={require('../assets/icons/gender.png')}
                        style={styles.icongender}
                    />   
                    <Text style={styles.textinfo1}>Email </Text>
                  </View>
                  <View style={styles.gender}>
                    <Image 
                        source={require('../assets/icons/gender.png')}
                        style={styles.icongender}
                    />   
                    <Text style={styles.textinfo1}>Website URL</Text>
                  </View>
                  
                  
                </View>   

                <View>
                  <Text style={styles.textinfo2}>+00 0000 0000</Text>
                  <Text style={styles.textinfo2}>jimmyhop33@example.com</Text>
                  <Text style={styles.textinfo2}>https://www.website-link.com</Text>
                  
                </View>
          </View>
                      
      </View>

      <View style={styles.BasicInformation}>
         <View style={styles.icontextinfo}>
            <Image 
              source={require('../assets/icons/iconamoon_profile-fill.png')}
            />   
            <Text style={styles.textinfo}>Location</Text>     
          </View>
          <View style={styles.userinfo}>
                <View >
                  <View style={styles.gender}>
                      <Image 
                          source={require('../assets/icons/gender.png')}
                          style={styles.icongender}
                      />   
                        <Text style={styles.textinfo1}>ZIP Code</Text>
                    </View>
                    <View style={styles.gender}>
                      <Image 
                          source={require('../assets/icons/gender.png')}
                          style={styles.icongender}
                      />   
                         <Text style={styles.textinfo1}>Country</Text>
                    </View>
                 
                  <View style={styles.gender}>
                    <Image 
                        source={require('../assets/icons/gender.png')}
                        style={styles.icongender}
                    />   
                    <Text style={styles.textinfo1}>County</Text>
                  </View>
                  <View style={styles.gender}>
                    <Image 
                        source={require('../assets/icons/gender.png')}
                        style={styles.icongender}
                    />   
                    <Text style={styles.textinfo1}>State</Text>
                  </View>
                  <View style={styles.gender}>
                    <Image 
                        source={require('../assets/icons/gender.png')}
                        style={styles.icongender}
                    />   
                    <Text style={styles.textinfo1}>City</Text>
                  </View>
                  
                 
                </View>   

                <View>
                  <Text style={styles.textinfo2}>914941</Text>
                  <Text style={styles.textinfo2}>United State</Text>
                  <Text style={styles.textinfo2}>San Diego</Text>
                  <Text style={styles.textinfo2}>California</Text>
                  <Text style={styles.textinfo2}>La Mesa</Text>
                 
                </View>
          </View>
            
          
                      
      </View>

      <View style={styles.footer1}>

      </View>
      <View style={styles.footer2}>
        <Image 
                  source={require('../assets/img/logo.png')}
                  
          />
      </View>
</View>
    </SafeAreaView>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
        all:{
          backgroundColor:'#E4E4E4',
         
          height:'100%',
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
          //Profile and cover
          SectioCoverProfile:{
            backgroundColor:'#fff'
          },
          CoverProfile:{
            
            width:'100%',
            height:70,
            resizeMode:'cover'
          },
          imgProfile:{
            position:'absolute',
            width:60,
            height:60,
            left:170,
            top:40,
            borderRadius:50
          },
          addFriend:{
            width:100,
            position:'absolute',
            alignItems:'center',
            flexDirection:'row',
            backgroundColor:'#fff',
            padding:5,
            bottom:10,
            left:310,
            justifyContent:'center'
          },
          textAddFollow:{
            fontSize:10,
            marginLeft:5
          },
          nameProfie:{
            marginTop:30,
            alignSelf:'center',
            fontSize:19,
            fontWeight:'bold'
            
          },
          iconSocial:{
            marginTop:10,
            flexDirection:'row',
            justifyContent:'center',
            alignItems: 'center',
            
          },
          icon: {
            marginRight: 15, // Add space between icons
          },
          bioParag:{
            textAlign:'center',
            fontSize:10,
            marginTop:10
          },
          sectionFollo:{
            marginTop:10,
            alignSelf:'center',
            flexDirection:'row',
            
          },
          followers:{
            borderRightWidth:1,
            flexDirection:'row',
            marginRight:15,
            paddingRight:4
          },
          posts:{
            flexDirection:'row',
            paddingRight:4
          },
          textfollw:{
            paddingRight:5,
            fontWeight:'bold'
          },
           //end Profile and cover
          //Navigation bar   
           SectionNavigat:{
            alignItems:'center',
            padding:10,
            marginTop:5,
            width:'100%',
            height:50,
            backgroundColor:"#223165",
            justifyContent:'center',
            flexDirection:'row'

           },
           btnNavActive:{
            
            width:65,
            padding:5,
            backgroundColor:'#fff',
            marginRight:30,
            borderRadius:10,
            marginLeft:50
           },
           textBtnNavActive:{
            color:'#223165',
            
           },
           btnNav:{
            width:60,
            padding:5,
            marginRight:25,
            borderRadius:10
           },
           textBtnNav:{
            color:'#fff'
           },
           //
           SectionbioParag2:{
            marginTop:10,
            marginLeft:10,
            marginRight:10,
            height:70,
            backgroundColor:'#fff'
           }  ,
           icontext:{
            padding:10,
            flexDirection:'row',
            alignItems:'center'

           },
           textbio:{
            color:'#223165',
            fontSize:10,
            marginLeft:5,
            fontWeight:'bold'
           },
           Pargraphbio:{
            fontSize:11,
            textAlign:'justify',
            paddingHorizontal:20,
            fontWeight:'bold'
           },
           BasicInformation:{
            marginTop:10,
            marginLeft:10,
            marginRight:10,
        
           
            backgroundColor:'#fff'
           },
           icontextinfo:{
            padding:10,
            flexDirection:'row',
            alignItems:'center',
            borderBottomWidth:1,
            marginHorizontal:10
           },
           textinfo:{
            color:'#000',
            fontSize:10,
            marginLeft:5,
            fontWeight:'bold'
           },
           userinfo:{
            flexDirection:'row',
            padding:10,
            
           },
           textinfo1:{
            color:'#223165',
            fontWeight:'bold',
            fontSize:11,
            marginBottom:15,
           },
           textinfo2:{
            marginLeft:20,
            alignContent:'flex-end',
            color:'#000',
            fontWeight:'bold',
            fontSize:11,
            marginBottom:15,
           },
           gender:{
            flexDirection:'row'
           },
           icongender:{
            marginRight:10
           },
           //footer
           footer1:{
            marginTop:20,
            backgroundColor:'#fff',
            width:'100%',
            height:150,
            borderBottomWidth:3,
            borderBottomColor:'#223165'
           },
           footer2:{
            alignItems:'center',
            width:'100%',
            backgroundColor:'#fff',
            height:50,
            justifyContent:'center'
           }








       
})

export default UserAcc

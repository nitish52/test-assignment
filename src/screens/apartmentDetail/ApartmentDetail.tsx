import React, {FC} from 'react';
import {View,ScrollView,SafeAreaView} from 'react-native';
import styles from './ApartmentDetail.style';
import Header from '../../common/header/Header';
import HomeComponent from '../../common/header/HomeComponent';
import { Colors } from '../../utils/colors';

const ApartmentDetail:FC=()=>{

    return(
        <SafeAreaView>
    <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={styles.backgroundStyle}>
        <Header title="Green Sky Apartment" />
        <View style={{flexDirection:'row'}}>
        <View style={{flexDirection:'column',flex:1}}>
            <HomeComponent title={'Property Data'} imgsrc={require('../../assets/images/subject_property_icon.png')} features={["Inspection Report"]} bgColor={Colors.LightPink}/>
            <HomeComponent title={'Subject Property'} imgsrc={require('../../assets/images/subject_property_icon.png')} features={["Property","Address","Identification"]} bgColor={Colors.LightBlue}/>
            <HomeComponent title={'Site Info'} imgsrc={require('../../assets/images/subject_property_icon.png')} features={["Lot","Site features","Offsite Features","Site Utilities"]} bgColor={Colors.LightSky}/>
            <HomeComponent title={'Buildings'} imgsrc={require('../../assets/images/subject_property_icon.png')} features={["Building Details","Exterior Deficiencies","Exterior Updates"]} bgColor={Colors.LightBlue}/>
        </View>
        <View style={{flexDirection:'column',flex:1}}>
            <HomeComponent title={'Units'} imgsrc={require('../../assets/images/subject_property_icon.png')} features={["Unit Details","Unit Features","Heating System","Cooling System","Mechanical Deficiencies","Garage"]} bgColor={Colors.LightYellow}/>
            <HomeComponent title={'Levels'} imgsrc={require('../../assets/images/subject_property_icon.png')} features={["Level1"]} bgColor={Colors.LightBlue}/>
            <HomeComponent title={'Rooms'} imgsrc={require('../../assets/images/subject_property_icon.png')} features={["Room1"]} bgColor={Colors.LightPink}/>
            <HomeComponent title={'Anciallary'} imgsrc={require('../../assets/images/subject_property_icon.png')} features={["Anciallary Details","Alley","Appliances","Exterior","Gas"]} bgColor={Colors.LightYellow}/>

        </View>
        </View>
      
        </ScrollView>
      </SafeAreaView>
    );
}

export default ApartmentDetail;
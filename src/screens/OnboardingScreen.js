import React from 'react'
import { TouchableOpacity } from 'react-native';
import { SafeAreaView, Image, Text, View } from 'react-native'
import Onboarding from 'react-native-onboarding-swiper';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const OnboardingScreen = ({ navigation }) => {
    const Skip = ({ ...props }) => {
        return <TouchableOpacity><Text
            style={{
                color: 'white',
                fontSize: hp(2.5),
                paddingHorizontal: wp(2)
            }} {...props}>Skip</Text>
        </TouchableOpacity>
    }
    const Next = ({ ...props }) => {
        return <TouchableOpacity>
            <Text
                style={{
                    color: 'white',
                    fontSize: hp(2.5),
                    paddingHorizontal: wp(2)
                }} {...props} >Next</Text>
        </TouchableOpacity>
    }
    const Done = ({ ...props }) => {
        return <TouchableOpacity>
            <Text
                style={{
                    color: 'white',
                    fontSize: hp(2.5),
                    paddingHorizontal: wp(2)
                }} {...props} >Done</Text>
        </TouchableOpacity>
    }
    const Dots = ({ selected }) => {
        return <View
            style={{
                width: wp(3),
                height: wp(3),
                marginHorizontal: wp(1),
                borderRadius: wp(1.5),
                backgroundColor: selected ? '#fff' : 'rgba(0,0,0,0.7)'
            }} ></View>
    }
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Onboarding
                onSkip={() => navigation.navigate('HomeScreen')}
                onDone={() => navigation.navigate('HomeScreen')}
                SkipButtonComponent={Skip}
                NextButtonComponent={Next}
                DoneButtonComponent={Done}
                DotComponent={Dots}
                pages={[
                    {
                        backgroundColor: 'blue',
                        image: <Image source={require('../assets/images/image1.png')} style={{ width: wp(86), height: wp(86) }} />,
                        title: 'Wanderlust Welcoming',
                        subtitle: 'From Booking to Boarding, Setting Sail for Success',
                    },
                    {
                        backgroundColor: 'yellow',
                        image: <Image source={require('../assets/images/image2.png')} style={{ width: wp(86), height: wp(86) }} />,
                        title: 'Globetrotter Guide',
                        subtitle: 'Unveiling the Secrets of Seamless Travel.',
                    },
                    {
                        backgroundColor: 'red',
                        image: <Image source={require('../assets/images/image3.png')} style={{ width: wp(86), height: wp(86) }} />,
                        title: 'Smooth Sailing',
                        subtitle: 'Navigating New Adventures with Confidence',
                    }
                ]}
            />
        </SafeAreaView>
    )
}

export default OnboardingScreen
import React from 'react';
import { useState } from 'react';
import { Text, View, StyleSheet, ScrollView, Image, TouchableOpacity, TextInput, Alert, Switch } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Formik, Form, yupToFormErrors } from 'formik';
import * as Yup from 'yup';
// //import RadioForm from 'react-native-simple-radio-button';
// import RadioButton from 'react-native-paper/lib/typescript/src/components/RadioButton/RadioButton';
// import { CheckBox, In } from 'react-native-check-box';


const basicInformationSchema = Yup.object().shape({
    firstname: Yup.string()
        .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field ")
        .min(2, 'too short')
        .max(50, 'too long')
        .required('Required'),
    lastname: Yup.string()
        .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field ")
        .min(2, 'too short')
        .max(50, 'too long')
        .required('Required'),
    email: Yup.string()
        .email('Invalid email')
        .required('Required'),
    mobile: Yup.string()
        .min(10, 'Must be exactly 10 digits')
        .max(10, 'Must be exactly 10 digits'),
    address: Yup.string()
        .min(5)
        .required('Required'),
    city: Yup.string()
        .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field ")
        .required('Required'),
    pincode: Yup.string()
        .matches(/^[0-9]+$/, "Must be only digits")
        .required('Required'),
    state: Yup.string()
        .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field ")
        .required('Required'),
    country: Yup.string()
        .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field ")
        .required('Required'),
    // gender: Yup.string()
    //     .required('Required'),
});

function BasicInformation({ toggleTheme, isDarkTheme }) {

    const navigation = useNavigation();
    const [maleColor, setMalecolor] = useState('none');
    const [femaleColor, setFemalecolor] = useState('none');
    const [genders, setGender] = useState('');



    const handleMale = () => {
        setMalecolor('purple');
        setFemalecolor('white');
        setGender('Male');
    }

    const handleFemale = () => {
        setFemalecolor('purple');
        setMalecolor('white');
        setGender('Female');
    }

    return (

        <ScrollView>

            {/* <Switch
                trackColor={{ false: "#767577", true: "#81b0ff" }}
                thumbColor={isDarkTheme ? "purple" : "#f4f3f4"}
                onValueChange={toggleTheme}
                value={isDarkTheme}

            /> */}
            {isDarkTheme ?

                <View style={{ flexDirection: 'row', marginTop: 20, marginLeft: 60 }}>
                    <Image source={require('./assets/active1.png')} />
                    <Image source={require('./assets/arrow.png')} style={{ marginTop: 8 }} />
                    <Image source={require('./assets/inactive2w.png')} />
                    <Image source={require('./assets/arrow.png')} style={{ marginTop: 8 }} />
                    <Image source={require('./assets/inactive3w.png')} />
                </View>

                :

                <View style={{ flexDirection: 'row', marginTop: 20, marginLeft: 60 }}>
                    <Image source={require('./assets/active1.png')} />
                    <Image source={require('./assets/arrow.png')} style={{ marginTop: 8 }} />
                    <Image source={require('./assets/inactive2.png')} />
                    <Image source={require('./assets/arrow.png')} style={{ marginTop: 8 }} />
                    <Image source={require('./assets/inactive3.png')} />
                </View>
            }


            <Formik initialValues={{
                firstname: '',
                lastname: '',
                email: '',
                mobile: '',
                address: '',
                city: '',
                pincode: '',
                state: '',
                country: '',
                gender: '',
            }}
                validationSchema={basicInformationSchema}
                onSubmit={values => {
                    values.gender = genders;
                    console.log(values.gender);
                    console.log(JSON.stringify(values))
                }}

            >

                {({ values, errors, touched, handleChange, setFieldTouched, handleSubmit, isValid }) => (
                    <View>
                        <TextInput
                            placeholder='First Name'
                            placeholderTextColor='grey'
                            style={styles.input}
                            value={values.firstname}
                            onChangeText={handleChange('firstname')}
                            onBlur={() => setFieldTouched('firstname')}
                        />
                        {touched.firstname && errors.firstname && (<Text style={styles.error}>{errors.firstname}</Text>)}

                        <TextInput
                            placeholder='Last Name'
                            placeholderTextColor='grey'
                            style={styles.input}
                            value={values.lastname}
                            onChangeText={handleChange('lastname')}
                            onBlur={() => setFieldTouched('lastname')}
                        />
                        {touched.lastname && errors.lastname && (<Text style={styles.error}>{errors.lastname}</Text>)}

                        <TextInput
                            placeholder='Email Address'
                            placeholderTextColor='grey'
                            style={styles.input}
                            value={values.email}
                            onChangeText={handleChange('email')}
                            onBlur={() => setFieldTouched('email')}
                        />
                        {touched.email && errors.email && (<Text style={styles.error}>{errors.email}</Text>)}

                        <TextInput
                            placeholder='Mobile Number'
                            keyboardType='numeric'
                            maxLength={10}
                            placeholderTextColor='grey'
                            style={styles.input}
                            value={values.mobile}
                            onChangeText={handleChange('mobile')}
                            onBlur={() => setFieldTouched('mobile')}
                        />
                        {touched.mobile && errors.mobile && (<Text style={styles.error}>{errors.mobile}</Text>)}

                        <View style={{ flexDirection: 'row' }}>
                            <View style={{ flexDirection: 'row', marginLeft: 55, marginTop: 20 }}>
                                <TouchableOpacity onPress={handleMale}>
                                    <View style={styles.radioMale} value='male'><View style={{ height: 20, width: 20, borderRadius: 40, backgroundColor: maleColor, margin: 4 }}></View></View>
                                </TouchableOpacity>
                                <Text style={{ color: 'grey', marginLeft: 5, fontSize: 20 }}>Male</Text>
                            </View>
                            <View style={{ flexDirection: 'row', marginLeft: 50, marginTop: 20 }}>
                                <TouchableOpacity onPress={handleFemale} style>
                                    <View style={styles.radioFemale}><View style={{ height: 20, width: 20, borderRadius: 40, backgroundColor: femaleColor, margin: 4 }}></View></View>
                                </TouchableOpacity>
                                <Text style={{ color: 'grey', marginLeft: 4, fontSize: 20 }}>Female</Text>
                            </View>
                        </View>
                        {touched.gender && errors.gender && (<Text style={styles.error}>{errors.gender}</Text>)}




                        <TextInput
                            placeholder='Address'
                            placeholderTextColor='grey'
                            style={styles.input}
                            value={values.address}
                            onChangeText={handleChange('address')}
                            onBlur={() => setFieldTouched('address')}
                        />
                        {touched.address && errors.address && (<Text style={styles.error}>{errors.address}</Text>)}


                        <TextInput
                            placeholder='City'
                            placeholderTextColor='grey'
                            style={styles.input}
                            value={values.city}
                            onChangeText={handleChange('city')}
                            onBlur={() => setFieldTouched('city')}
                        />
                        {touched.city && errors.city && (<Text style={styles.error}>{errors.city}</Text>)}

                        <TextInput
                            placeholder='Pincode'
                            placeholderTextColor='grey'
                            style={styles.input}
                            value={values.pincode}
                            onChangeText={handleChange('pincode')}
                            onBlur={() => setFieldTouched('pincode')}
                        />
                        {touched.pincode && errors.pincode && (<Text style={styles.error}>{errors.pincode}</Text>)}

                        <TextInput
                            placeholder='State'
                            placeholderTextColor='grey'
                            style={styles.input}
                            value={values.state}
                            onChangeText={handleChange('state')}
                            onBlur={() => setFieldTouched('state')}
                        />
                        {touched.state && errors.state && (<Text style={styles.error}>{errors.state}</Text>)}

                        <TextInput
                            placeholder='Country'
                            placeholderTextColor='grey'
                            style={styles.input}
                            value={values.country}
                            onChangeText={handleChange('country')}
                            onBlur={() => setFieldTouched('country')}
                        />
                        {touched.country && errors.country && (<Text style={styles.error}>{errors.country}</Text>)}

                        <TouchableOpacity onPress={handleSubmit} onPressIn={() => navigation.navigate('EducationDetails')}>
                            <Text style={styles.next} >Next</Text>
                        </TouchableOpacity>
                    </View>
                )}
            </Formik>



        </ScrollView>
    )
}

const styles = StyleSheet.create({

    next: {
        color: '#fff',
        borderColor: 'purple',
        borderRadius: 10,
        borderWidth: 1,
        fontSize: 25,
        marginRight: 10,
        textAlign: 'center',
        marginLeft: 250,
        marginTop: 20,
        marginBottom: 20,
        backgroundColor: 'purple'
    },
    input: {
        marginLeft: 30,
        marginTop: 20,
        fontSize: 20,
        borderWidth: 1,
        borderColor: 'purple',
        borderRadius: 10,
        flex: 1,
        marginRight: 30,
        textAlign: 'center',
        color: 'black'
    },
    radioMale: {
        borderRadius: 100,
        borderWidth: 1,
        borderColor: 'purple',
        height: 30,
        width: 30,
        backgroundColor: 'white'
    },
    radioFemale: {
        borderRadius: 100,
        borderWidth: 1,
        borderColor: 'purple',
        height: 30,
        width: 30,
        backgroundColor: 'white'
    },
    error: {
        color: 'red',
        marginLeft: 35
    }
})

export default BasicInformation;
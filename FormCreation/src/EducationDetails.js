import React from 'react';
import { useState } from 'react';
import { Text, View, StyleSheet, ScrollView, Image, TouchableOpacity, TextInput, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Formik, Form, yupToFormErrors } from 'formik';
import { SelectList } from 'react-native-dropdown-select-list';
import * as Yup from 'yup';


const basicInformationSchema = Yup.object().shape({
    collegename: Yup.string()
        .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field ")
        .min(2, 'too short')
        .max(150, 'too long')
        .required('Required'),
    universityname: Yup.string()
        .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field ")
        .min(2, 'too short')
        .max(150, 'too long')
        .required('Required'),
    // degree: Yup.string()
    //     .required('Required'),
    // course: Yup.string()
    //     .required('Required'),
    cgpa: Yup.string()
        .min(1)
        .matches(/^[0-9]+$/, "Must be only digits")
        .required('Required'),
    year: Yup.string()
        .matches(/^[0-9]+$/, "Must be only digits")
        .min(4, 'too short')
        .max(4, 'too long')
        .required('Required'),

});

function EducationDetails({ isDarkTheme }) {
    const navigation = useNavigation();
    const [degree, setDegree] = useState('');
    const [course, setCourse] = useState('')
    const [degreeError, setDegreeError] = useState("");
    const [courseError, setCourseError] = useState("");

    const degrees = [
        { key: 'B.E', value: 'B.E' },
        { key: 'M.E', value: 'M.E' },
        { key: 'B.SC', value: 'B.SC' },
    ]

    const courses = [
        { key: 'Computer Science Engineering', value: 'Computer Science Engineering' },
        { key: 'Mechanical Engineering', value: 'Mechanical Engineering' },
        { key: 'Electronics and Communication Engineering', value: 'Electronics and Communication Engineering' },
        { key: 'Electrical and Electronics Engineering', value: 'Electrical and Electronics Engineering' },
        { key: 'Information Technology', value: 'Information Technology' },
        { key: ' Electronics and Telecommunication Engineering', value: ' Electronics and Telecommunication Engineering' },
        { key: 'Textile Engineering', value: 'Textile Engineering' },
        { key: 'Biotechnology Engineering', value: 'Biotechnology Engineering' }
    ]



    return (

        <ScrollView>
            {isDarkTheme ?

                <View style={{ flexDirection: 'row', marginTop: 20, marginLeft: 60 }}>
                    <Image source={require('./assets/inactive1w.png')} />
                    <Image source={require('./assets/arrow.png')} style={{ marginTop: 8 }} />
                    <Image source={require('./assets/active2.png')} />
                    <Image source={require('./assets/arrow.png')} style={{ marginTop: 8 }} />
                    <Image source={require('./assets/inactive3w.png')} />
                </View>
                :
                <View style={{ flexDirection: 'row', marginTop: 20, marginLeft: 60 }}>
                    <Image source={require('./assets/inactive1.png')} />
                    <Image source={require('./assets/arrow.png')} style={{ marginTop: 8 }} />
                    <Image source={require('./assets/active2.png')} />
                    <Image source={require('./assets/arrow.png')} style={{ marginTop: 8 }} />
                    <Image source={require('./assets/inactive3.png')} />
                </View>

            }



            <Formik initialValues={{
                collegename: '',
                universityname: '',
                degree: degree,
                course: course,
                cgpa: '',
                year: '',
            }}
                validationSchema={basicInformationSchema}
                onSubmit={values => {
                    values.degree = degree;
                    values.course = course;
                    if (!degree) {
                        setDegreeError("Required");
                        return; // stop submission
                    }

                    if (!course) {
                        setCourseError("Required");
                        return; // stop submission
                    }

                    console.log(JSON.stringify(values))
                }}

            >

                {({ values, errors, touched, handleChange, setFieldTouched, handleSubmit, isValid, onChange }) => (
                    <View>
                        <TextInput
                            placeholder='College Name'
                            placeholderTextColor='grey'
                            style={styles.input}
                            value={values.collegename}
                            onChangeText={handleChange('collegename')}
                            onBlur={() => setFieldTouched('collegename')}
                        />
                        {touched.collegename && errors.collegename && (<Text style={styles.error}>{errors.collegename}</Text>)}

                        <TextInput
                            placeholder='University Name'
                            placeholderTextColor='grey'
                            style={styles.input}
                            value={values.universityname}
                            onChangeText={handleChange('universityname')}
                            onBlur={() => setFieldTouched('universityname')}

                        />
                        {touched.universityname && errors.universityname && (<Text style={styles.error}>{errors.universityname}</Text>)}


                        <SelectList
                            setSelected={setCourse}
                            data={courses}
                            placeholder='Select course'
                            defaultOption={{ Key: 0, value: 'Computer Science Engineering' }}
                            value={values.course}
                            onValueChange={(value) => {
                                setCourse(value);
                                console.log(value);
                                if (!value || value === "") {
                                    setCourseError("Required");
                                } else {
                                    setCourseError("");
                                }
                                setCourse(value);
                            }}
                            //onBlur={() => setFieldTouched('course')}
                            inputStyles={{
                                color: 'grey',
                                fontSize: 20,
                            }}
                            boxStyles={{
                                borderWidth: 1,
                                borderColor: 'purple',
                                marginTop: 20,
                                marginLeft: 30,
                                marginRight: 30,


                            }}
                            dropdownTextStyles={{
                                color: 'grey',

                            }}
                            dropdownStyles={{
                                borderColor: 'purple',
                                borderWidth: 1,
                                marginLeft: 30,
                                marginRight: 30,

                            }}


                        />
                        {courseError ? <Text style={styles.error}>{courseError}</Text> : null}

                        <SelectList
                            setSelected={setDegree}
                            data={degrees}
                            placeholder='Select Degree'
                            defaultOption={{ Key: 'B.E', value: 'B.E' }}
                            onValueChange={(value) => {
                                setDegree(value);
                                if (!value || value === "") {
                                    setDegreeError("Required");
                                } else {
                                    setDegreeError("");
                                }
                                setDegree(value);
                            }}
                            //onBlur={() => setFieldTouched('degree')}
                            inputStyles={{
                                color: 'grey',
                                fontSize: 20,
                            }}
                            boxStyles={{
                                borderWidth: 1,
                                borderColor: 'purple',
                                marginTop: 20,
                                marginLeft: 30,
                                marginRight: 30,

                            }}
                            dropdownTextStyles={{
                                color: 'grey',

                            }}
                            dropdownStyles={{
                                borderColor: 'purple',
                                borderWidth: 1,
                                marginLeft: 30,
                                marginRight: 30
                            }}

                        />
                        {degreeError ? <Text style={styles.error}>{degreeError}</Text> : null}

                        <TextInput
                            placeholder='CGPA'
                            placeholderTextColor='grey'
                            style={styles.input}
                            value={values.cgpa}
                            onChangeText={handleChange('cgpa')}
                            onBlur={() => setFieldTouched('cgpa')}
                        />
                        {touched.cgpa && errors.cgpa && (<Text style={styles.error}>{errors.cgpa}</Text>)}

                        <TextInput
                            placeholder='Passing Year'
                            placeholderTextColor='grey'
                            style={styles.input}
                            value={values.year}
                            onChangeText={handleChange('year')}
                            onBlur={() => setFieldTouched('year')}
                        />
                        {touched.year && errors.year && (<Text style={styles.error}>{errors.year}</Text>)}

                        <View style={{ flexDirection: 'row', marginTop: 20, marginBottom: 20 }}>
                            <TouchableOpacity onPress={() => navigation.navigate('BasicInfo')}>
                                <Text style={styles.previous} >Previous</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={handleSubmit} onPressIn={() => navigation.navigate('WorkDetails')}>
                                <Text style={styles.next} >Next</Text>
                            </TouchableOpacity>
                        </View>
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
        marginLeft: 60,
        paddingLeft: 20,
        paddingRight: 20,
        backgroundColor: 'purple'
    },
    previous: {
        color: '#fff',
        borderColor: 'purple',
        borderRadius: 10,
        borderWidth: 1,
        fontSize: 25,
        marginRight: 10,
        textAlign: 'center',
        marginLeft: 30,
        paddingLeft: 20,
        paddingRight: 15,
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
        // textAlign: 'center',
        color: 'black',
        paddingLeft: 20
    },
    error: {
        color: 'red',
        marginLeft: 35
    }

})

export default EducationDetails;
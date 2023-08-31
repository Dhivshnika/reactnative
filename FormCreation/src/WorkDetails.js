import React from 'react';
import { useState } from 'react';
import { Text, View, StyleSheet, ScrollView, Image, TouchableOpacity, TextInput, Modal, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Formik, } from 'formik';
import * as Yup from 'yup';
import DocumentPicker from 'react-native-document-picker';
import { MultipleSelectList } from 'react-native-dropdown-select-list';



const basicInformationSchema = Yup.object().shape({
    companyname: Yup.string()
        .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field ")
        .min(2, 'too short')
        .max(50, 'too long')
        .required('Required'),
    role: Yup.string()
        .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field ")
        .min(2, 'too short')
        .max(50, 'too long')
        .required('Required'),
    experiance: Yup.string()
        .matches(/^[0-9]+$/, "Must be only digits")
        .required('Required'),
    location: Yup.string()
        .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field ")
        .min(2, 'too short')
        .max(50, 'too long')
        .required('Required'),
    // skill: Yup.string()
    //     .required('Required'),
});


function WorkDetails({ isDarkTheme }) {
    const navigation = useNavigation();
    const [skill, setSkill] = useState('');
    const [documentUri, setDocumentUri] = useState('');
    const [img, setimg] = useState('');
    const [imageUri, setImageUri] = useState('');

    const selectDocument = async () => {
        try {
            const document = await DocumentPicker.pickSingle({
                type: [DocumentPicker.types.pdf],
            });
            console.log(document);
            setDocumentUri(document);
        }
        catch (err) {
            if (DocumentPicker.isCancel(err)) {
                console.log('User cancelled the upload', err);
            }
            else {
                console.log('DocumentPicker error', err);
            }
        }

    }

    const selectImage = async () => {
        try {
            const image = await DocumentPicker.pickSingle({
                type: [DocumentPicker.types.images],
            });
            console.log(image);
            setimg(image);
            setImageUri(image.uri);

        }
        catch (err) {
            if (DocumentPicker.isCancel(err)) {
                console.log('User cancelled the upload', err);
            }
            else {
                console.log('DocumentPicker error', err);
            }
        }
    }
    const skills = [
        { key: 'java', value: 'java' },
        { key: 'C', value: 'C' },
        { key: 'javaScript', value: 'javaScript' },
        { key: 'Database Management System', value: 'Database Management System' },
        { key: 'react', value: 'react' },
        { key: 'angular', value: 'angular' },
        { key: 'html', value: 'html' },
        { key: 'css', value: 'css' },
        { key: 'Bootstrape', value: 'Bootstrape' },
        { key: 'React native', value: 'React native' },
        { key: 'Node', value: 'Node' },
    ]

    return (

        <ScrollView>
            {isDarkTheme ?
                <View style={{ flexDirection: 'row', marginTop: 20, marginLeft: 60 }}>
                    <Image source={require('./assets/inactive1w.png')} />
                    <Image source={require('./assets/arrow.png')} style={{ marginTop: 8 }} />
                    <Image source={require('./assets/inactive2w.png')} />
                    <Image source={require('./assets/arrow.png')} style={{ marginTop: 8 }} />
                    <Image source={require('./assets/active3.png')} />
                </View>

                :

                <View style={{ flexDirection: 'row', marginTop: 20, marginLeft: 60 }}>
                    <Image source={require('./assets/inactive1.png')} />
                    <Image source={require('./assets/arrow.png')} style={{ marginTop: 8 }} />
                    <Image source={require('./assets/inactive2.png')} />
                    <Image source={require('./assets/arrow.png')} style={{ marginTop: 8 }} />
                    <Image source={require('./assets/active3.png')} />
                </View>
            }
            <Formik initialValues={{
                companyname: '',
                role: '',
                experiance: '',
                location: '',
                skills: [],

            }}
                validationSchema={basicInformationSchema}
                onSubmit={values => {
                    values.skills = skill;
                    console.log(values.skills);
                    console.log(JSON.stringify(values))
                }}

            >

                {({ values, errors, touched, handleChange, setFieldTouched, setFieldValue, handleSubmit, isValid }) => (
                    <View>

                        <TextInput
                            placeholder='Company Name'
                            placeholderTextColor='grey'
                            style={styles.input}
                            value={values.companyname}
                            onChangeText={handleChange('companyname')}
                            onBlur={() => setFieldTouched('companyname')}
                        />
                        {touched.companyname && errors.companyname && (<Text style={styles.error}>{errors.companyname}</Text>)}

                        <TextInput
                            placeholder='Role'
                            placeholderTextColor='grey'
                            style={styles.input}
                            value={values.role}
                            onChangeText={handleChange('role')}
                            onBlur={() => setFieldTouched('role')}
                        />
                        {touched.role && errors.role && (<Text style={styles.error}>{errors.role}</Text>)}

                        <TextInput
                            placeholder='Year Of Experiance'
                            placeholderTextColor='grey'
                            style={styles.input}
                            value={values.experiance}
                            onChangeText={handleChange('experiance')}
                            onBlur={() => setFieldTouched('experiance')}
                        />
                        {touched.experiance && errors.experiance && (<Text style={styles.error}>{errors.experiance}</Text>)}

                        <TextInput
                            placeholder='Location'
                            placeholderTextColor='grey'
                            style={styles.input}
                            value={values.location}
                            onChangeText={handleChange('location')}
                            onBlur={() => setFieldTouched('location')}
                        />
                        {touched.location && errors.location && (<Text style={styles.error}>{errors.location}</Text>)}

                        <MultipleSelectList
                            setSelected={(selectedSkills) => {
                                setFieldValue('skills', selectedSkills);
                                setSkill(selectedSkills);
                            }}
                            data={skills}
                            placeholder='Select Skill'
                            defaultOption={{ Key: 0, value: 'Java' }}
                            // value={values.skill}
                            // onChangeText={handleChange('skill')}
                            // onBlur={() => setFieldTouched('skill')}
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

                        <View style={styles.imgView}>
                            {img ? (
                                <View style={{ marginLeft: 30, marginTop: 20 }}>
                                    <TouchableOpacity onPress={() => navigation.navigate('ImagePreview', { image: imageUri })}>
                                        <Image source={{ uri: img.uri }} style={styles.selectedImage} />

                                    </TouchableOpacity>
                                    <Text style={styles.selectedImageName}>{img.name}</Text>
                                </View>
                            ) : (
                                <View style={{ marginTop: 30 }}>
                                    <TouchableOpacity onPress={selectImage}>
                                        <Image source={require('./assets/imageUpload.png')} style={{ marginLeft: 90 }} />
                                    </TouchableOpacity>
                                    <Text style={{ textAlign: 'center', fontWeight: 'bold' }}>Supported formates : jpg & png</Text>
                                </View>
                            )}
                            <TouchableOpacity onPress={selectImage}>
                                <Text style={styles.uploadImg}>Select Image</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.docView}>
                            {documentUri ? (
                                <View style={{ marginLeft: 30, marginTop: 20 }}>
                                    <TouchableOpacity onPress={() => navigation.navigate('DocumentPreview', { previewUri: documentUri.uri })}>
                                        <Image source={require('./assets/pdf.png')} style={{ height: 100, width: 100, marginLeft: 60 }} />
                                    </TouchableOpacity>
                                    <Text style={{ color: 'black', marginTop: 10, textAlign: 'center', marginRight: 20, color: '#fff' }}>{documentUri.name} ({documentUri.type})</Text>
                                </View>
                            ) : (
                                <View style={{ marginTop: 30 }}>
                                    <Image source={require('./assets/upload.png')} style={{ marginLeft: 90 }} />
                                    <Text style={{ textAlign: 'center', fontWeight: 'bold' }}>Supported formates : PDF only</Text>
                                </View>
                            )}
                            <TouchableOpacity onPress={selectDocument}>
                                <Text style={styles.uploadDoc}>Select Document</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={{ flexDirection: 'row', marginTop: 30, marginBottom: 20 }}>
                            <TouchableOpacity onPress={() => navigation.navigate('EducationDetails')}>
                                <Text style={styles.previous} >Previous</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={handleSubmit}>
                                <Text style={styles.submit} >Submit</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                )}
            </Formik>



        </ScrollView>
    )
}

const styles = StyleSheet.create({

    submit: {
        color: '#fff',
        borderColor: 'purple',
        borderRadius: 10,
        borderWidth: 1,
        fontSize: 25,
        marginRight: 10,
        textAlign: 'center',
        marginLeft: 50,
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
        paddingLeft: 20,
        color: 'black'
    },
    error: {
        color: 'red',
        marginLeft: 35
    },
    uploadDoc: {
        color: 'purple',
        fontSize: 20,
        textAlign: 'center',
        fontWeight: 'bold',
        padding: 10,
        marginTop: 15,

    },
    uploadImg: {
        color: 'purple',
        fontSize: 20,
        textAlign: 'center',
        fontWeight: 'bold',
        padding: 10,


    },
    selectedImage: {
        height: 150,
        width: 150,
        marginLeft: 50,
        borderRadius: 100,
        borderWidth: 1,
        borderColor: 'purple',

    },
    imageName: {
        color: 'purple',
        marginTop: 10,
        flexShrink: 1,

    },
    docView: {
        backgroundColor: '#BDB5D5',
        height: 250,
        width: '82 %',
        marginLeft: 35,
        marginRight: 20,
        borderRadius: 10,
        borderStyle: 'dashed',
        borderWidth: 1,
        borderColor: 'purple',
        marginTop: 20
    },
    imgView: {
        backgroundColor: '#BDB5D5',
        height: 250,
        width: '82 %',
        marginLeft: 35,
        marginRight: 20,
        borderRadius: 10,
        borderStyle: 'dashed',
        borderWidth: 1,
        borderColor: 'purple',
        marginTop: 20
    },

    selectedImageName: {
        color: 'black',
        marginTop: 10,
        textAlign: 'center',
        marginRight: 20,
        color: '#fff'
    },

    pdfPreviewContainer: {
        marginTop: 20,
        paddingHorizontal: 10,
    },

    pdfPreview: {
        flex: 1, height: 300,
    },

    modalBackground: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
    },

    modalImage: {
        width: '80%',
        height: '80%',
        resizeMode: 'contain',
    }
})

export default WorkDetails; 
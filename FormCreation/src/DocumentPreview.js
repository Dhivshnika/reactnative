import { View, Text, Dimensions, PermissionsAndroid, Alert } from 'react-native';
import React, { useEffect } from 'react';
import Pdf from 'react-native-pdf';
import { WebView } from 'react-native-webview';
import FileViewer from 'react'
import { useColorScheme } from 'react-native';

function DocumentPreview({ route }) {

    const { previewUri } = route.params;

    useEffect(() => {
        requestStoragePermission();
    }, []);

    const requestStoragePermission = async () => {
        try {
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
                {
                    title: 'File Access Permission',
                    message: 'This app needs access to your files',
                    buttonNeutral: 'Ask Me Later',
                    buttonNegative: 'Cancel',
                    buttonPositive: 'OK',
                }
            );
            if (granted !== PermissionsAndroid.RESULTS.GRANTED) {
                Alert.alert('Permission Denied!', 'You need to give storage permission to continue');
            }
        } catch (err) {
            console.warn(err);
        }
    };

    return (
        <Pdf
            source={{ uri: 'content://com.android.providers.media.documents/document/document%3A1000003392' }}
            style={{ flex: 1, width: Dimensions.get('window').width }}
        />
    );
}

export default DocumentPreview;

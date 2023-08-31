import React from 'react';
import { Text, View, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

function ImagePreview({ route }) {
    const navigation = useNavigation();
    const { image } = route.params;

    return (

        <View style={styles.background}>
            <Image source={{ uri: image }} style={styles.image} />
        </View>
    )
}

const styles = StyleSheet.create({

    background: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
    },

    image: {
        width: '80%',
        height: '80%',
        resizeMode: 'contain',
    }
})

export default ImagePreview;
import React, { useState } from "react";
import { View, Text, ScrollView, TouchableOpacity, Image, StyleSheet, Modal, Switch, SafeAreaView } from "react-native";

function Calculation() {

    const [input, setInput] = useState('');
    const [operator, setOperator] = useState('');
    const [secondInput, setSecondInput] = useState('');
    const [output, setOutput] = useState();
    const [modalVisible, setModalVisible] = useState(false);
    const [isDarkTheme, setIsDarkTheme] = useState(false);

    const toggleTheme = () => {
        setIsDarkTheme(prevTheme => !prevTheme);
    };

    const handleInput1 = () => {
        if (operator === '') {
            const number = input + '1';
            setInput(number);
        }
        else {
            const number = secondInput + '1';
            setSecondInput(number);
        }
    }
    const handleInput2 = () => {
        if (operator === '') {
            const number = input + '2';
            setInput(number);
        }
        else {
            const number = secondInput + '2';
            setSecondInput(number);
        }
    }
    const handleInput3 = () => {
        if (operator === '') {
            const number = input + '3';
            setInput(number);
        }
        else {
            const number = secondInput + '3';
            setSecondInput(number);
        }
    }
    const handleInput4 = () => {
        if (operator === '') {
            const number = input + '4';
            setInput(number);
        }
        else {
            const number = secondInput + '4';
            setSecondInput(number);
        }
    }
    const handleInput5 = () => {
        if (operator === '') {
            const number = input + '5';
            setInput(number);
        }
        else {
            const number = secondInput + '5';
            setSecondInput(number);
        }
    }
    const handleInput6 = () => {
        if (operator === '') {
            const number = input + '6';
            setInput(number);
        }
        else {
            const number = secondInput + '6';
            setSecondInput(number);
        }
    }
    const handleInput7 = () => {
        if (operator === '') {
            const number = input + '7';
            setInput(number);
        }
        else {
            const number = secondInput + '7';
            setSecondInput(number);
        }
    }
    const handleInput8 = () => {
        if (operator === '') {
            const number = input + '8';
            setInput(number);
        }
        else {
            const number = secondInput + '8';
            setSecondInput(number);
        }
    }
    const handleInput9 = () => {
        if (operator === '') {
            const number = input + '9';
            setInput(number);
        }
        else {
            const number = secondInput + '9';
            setSecondInput(number);
        }
    }
    const handleInput0 = () => {
        if (operator === '') {
            const number = input + '0';
            setInput(number);
        }
        else {
            const number = secondInput + '0';
            setSecondInput(number);
        }
    }
    const handleInput00 = () => {
        if (operator === '') {
            const number = input + '00';
            setInput(number);
        }
        else {
            const number = secondInput + '00';
            setSecondInput(number);
        }
    }

    const handleDot = () => {
        if (operator === '') {
            const number = input + '.';
            setInput(number);
        }
        else {
            const number = secondInput + '.';
            setSecondInput(number);
        }
    }

    const handleOutput = () => {
        const numInput = Number(input);
        const numSecondInput = Number(secondInput);

        if (operator === '+') {
            const number = numInput + numSecondInput;
            setOutput(number)
        }
        if (operator === '-') {
            const number = numInput - numSecondInput;
            const value = eval(number).toFixed(3);
            setOutput(value);
        }
        if (operator === '*') {
            const number = numInput * numSecondInput;
            const value = eval(number).toFixed(3);
            setOutput(value);
        }
        if (operator === '/') {
            const number = numInput / numSecondInput;
            const value = eval(number).toFixed(3);
            setOutput(value);
        }
        if (operator === '%') {
            const number = numInput % numSecondInput;
            const value = eval(number).toFixed(3);
            setOutput(value);
        }
    }


    const handleClear = () => {
        setInput('');
        setSecondInput('');
        setOperator('');
        setOutput();
    }

    const handleBackspace = () => {
        if (operator === '') {
            const newInput = String(input).slice(0, -1);
            setInput(newInput ? Number(newInput) : '');
            handleOutput();
        } else if (secondInput !== '' && secondInput !== null) {
            const newSecondInput = String(secondInput).slice(0, -1);
            setSecondInput(newSecondInput ? Number(newSecondInput) : '');
            handleOutput();
        }
        else if (secondInput === '' || secondInput === null) {
            setOperator('');
            handleOutput();
        }
        else {
            setOperator('');
            handleOutput();
        }
    }


    return (
        <SafeAreaView style={{ backgroundColor: isDarkTheme ? 'black' : '#fff' }}>
            <View>
                <TouchableOpacity onPress={() => { setModalVisible(!modalVisible) }}>
                    <Image source={require('./assets/menu.png')} style={{ marginLeft: 330, paddingTop: 5, height: 30, width: 30 }} />
                </TouchableOpacity>
                <Modal animationType='fade'
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                        setModalVisible(!modalVisible);
                    }}

                >
                    <View>
                        <TouchableOpacity onPress={() => setModalVisible(false)} style={styles.modal}>
                            <Text style={{ marginLeft: 10, marginTop: 2 }}>Dark Theme
                            </Text>
                            <Switch
                                trackColor={{ false: "#767577", true: "#81b0ff" }}
                                thumbColor={isDarkTheme ? "black" : "#f4f3f4"}
                                onValueChange={toggleTheme}
                                value={isDarkTheme}

                            />
                        </TouchableOpacity>
                    </View>
                </Modal>
                <ScrollView style={styles.display}>
                    <Text style={[styles.output, { color: isDarkTheme ? '#fff' : 'black' }]}>{input} {operator} {secondInput}</Text>
                    <Text style={[styles.output, { color: isDarkTheme ? '#fff' : 'black' }]}>{output}</Text>
                </ScrollView>
            </View>
            <View style={{ paddingTop: 15 }}>
                <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity onPress={handleClear}>
                        <Image source={require('./assets/c.png')} style={{ height: 36, width: 36, marginTop: 20, marginLeft: 30 }} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={handleBackspace}>
                        <Image source={require('./assets/backspace.png')} style={{ height: 36, width: 36, marginTop: 20, marginLeft: 50 }} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setOperator('%')}>
                        <Image source={require('./assets/percent.png')} style={{ height: 36, width: 36, marginTop: 20, marginLeft: 60 }} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setOperator('/')}>
                        <Image source={require('./assets/divide.png')} style={{ height: 36, width: 36, marginTop: 20, marginLeft: 50 }} />
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity onPress={handleInput7}>
                        <Text style={[styles.buttonText, { color: isDarkTheme ? '#fff' : 'black' }]}>7</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={handleInput8}>
                        <Text style={[styles.buttonText, { color: isDarkTheme ? '#fff' : 'black' }]}>8</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={handleInput9}>
                        <Text style={[styles.buttonText, { color: isDarkTheme ? '#fff' : 'black' }]}>9</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setOperator('*')} style={{ paddingTop: 18, marginLeft: 25 }}>
                        <Image source={require('./assets/multiple.png')} style={{ height: 30, width: 30, marginTop: 15, }} />
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity onPress={handleInput4}>
                        <Text style={[styles.buttonText, { color: isDarkTheme ? '#fff' : 'black' }]}>4</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={handleInput5}>
                        <Text style={[styles.buttonText, { color: isDarkTheme ? '#fff' : 'black' }]}>5</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={handleInput6}>
                        <Text style={[styles.buttonText, { color: isDarkTheme ? '#fff' : 'black' }]}>6</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setOperator('-')} style={{ paddingTop: 15, marginLeft: 20 }}>
                        <Image source={require('./assets/minus.png')} style={{ height: 35, width: 35, marginTop: 10, }} />
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity onPress={handleInput1}>
                        <Text style={[styles.buttonText, { color: isDarkTheme ? '#fff' : 'black' }]}>1</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={handleInput2}>
                        <Text style={[styles.buttonText, { color: isDarkTheme ? '#fff' : 'black' }]}>2</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={handleInput3}>
                        <Text style={[styles.buttonText, { color: isDarkTheme ? '#fff' : 'black' }]}>3</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setOperator('+')} style={{ paddingTop: 11 }}>
                        <Image source={require('./assets/plus.png')} style={{ margin: 20, height: 35, width: 35, marginTop: 15, }} />
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', paddingBottom: 10 }}>
                    <TouchableOpacity onPress={handleInput00}>
                        <Text style={[styles.buttonText, { fontSize: 35, color: isDarkTheme ? '#fff' : 'black' }]}>00</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={handleInput0}>
                        <Text style={[styles.buttonText, { color: isDarkTheme ? '#fff' : 'black' }]}>0</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={handleDot}>
                        <Text style={[styles.buttonText, { color: isDarkTheme ? '#fff' : 'black' }]}>.</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={handleOutput} style={{ marginLeft: 10, marginTop: 5 }}>
                        <Image source={require('./assets/equal.png')} style={{ height: 60, width: 60, marginTop: 10, }} />
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({

    display: {
        height: 300,
        borderBottomWidth: 1,
        borderColor: 'grey',
        paddingTop: 200,

    },
    buttonText: {
        fontSize: 40,
        margin: 19,
        padding: 1,
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 100,
        //elevation: 3
    },
    buttonIcon: {
        height: 57,
        width: 57,
        margin: 10,
        marginTop: 23,
        borderWidth: 1,
        borderColor: '#177774',
        backgroundColor: '#177774',
        borderRadius: 100
    },
    buttonImage: {
        height: 35,
        width: 35,
        marginTop: 11,
        marginLeft: 9
    },
    buttonDouble: {
        margin: 19,
        paddingLeft: 15,
        paddingRight: 15,
    },
    buttonStar: {
        margin: 19,
        paddingLeft: 15,
        paddingRight: 15,
        paddingTop: 1,
        borderRadius: 100,
        backgroundColor: '#177774',
        borderColor: '#177774',
        height: 50,
        width: 50,
        alignItems: 'center'
    },
    output: {
        fontSize: 20,
        marginTop: 10,
        marginLeft: 10,
        textAlign: 'right',
        marginRight: 10
    },
    modal: {
        backgroundColor: '#177774',
        width: '40%',
        borderRadius: 10,
        marginLeft: 180,
        marginTop: 10,
        flexDirection: 'row'
    }
})

export default Calculation;
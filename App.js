import React, {useState} from 'react';
import {StyleSheet, View, Text, SafeAreaView, StatusBar} from 'react-native';
import Form from './src/components/Form.js';
import Footer from './src/components/Footer.js';

import colors from './src/utils/colors';

export default function App() {
  const [capital, setCapital] = useState(null);
  const [interes, setInteres] = useState(null);
  const [months, setMonths] = useState(null);

  const calculate = () => {
    console.log('capital =>' + capital);
    console.log('interes =>' + interes);
    console.log('months =>' + months);
  };

  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={styles.header}>
        <View style={styles.background} />
        <Text style={styles.titleApp}>Cotizador de préstamos</Text>
        <Form
          setCapital={setCapital}
          setInteres={setInteres}
          setMonths={setMonths}
        />
      </SafeAreaView>
      <View>
        <Text>RESULT</Text>
      </View>
      <Footer calculate={calculate} />
    </>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 290,
    alignItems: 'center',
  },
  titleApp: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 15,
  },
  background: {
    backgroundColor: colors.PRIMARY_COLOR,
    height: 200,
    width: '100%',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    position: 'absolute',
    zIndex: -1,
  },
});

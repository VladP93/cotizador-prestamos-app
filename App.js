import React from 'react';
import {StyleSheet, View, Text, SafeAreaView, StatusBar} from 'react-native';
import Form from './src/components/Form.js';

import colors from './src/utils/colors';

export default function App() {
  return (
    <SafeAreaView>
      <StatusBar barStyle="light-content" />
      <View style={styles.header}>
        <View style={styles.background} />
        <Text style={styles.titleApp}>Cotizador de préstamos</Text>
        <Form />
      </View>
      <View>
        <Text>RESULT</Text>
      </View>
      <View>
        <Text>FOOTER</Text>
      </View>
    </SafeAreaView>
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

import React from 'react';
import {StyleSheet, View, TextInput} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import colors from '../utils/colors';

export default function Form(props) {
  const {setCapital, setInteres, setMonths} = props;

  return (
    <View style={styles.viewForm}>
      <View style={styles.viewImputs}>
        <TextInput
          placeholder="Cantidad del préstamo"
          keyboardType="numeric"
          style={styles.input}
          onChange={(e) => setCapital(e.nativeEvent.text)}
        />
        <TextInput
          placeholder="Interés %"
          keyboardType="numeric"
          style={[styles.input, styles.inputPercentage]}
          onChange={(e) => setInteres(e.nativeEvent.text)}
        />
      </View>
      <RNPickerSelect
        style={pickerSelectStyles}
        onValueChange={(value) => setMonths(value)}
        items={[
          {label: '3 Meses', value: 3},
          {label: '6 Meses', value: 6},
          {label: '12 Meses/1 Año', value: 12},
          {label: '24 Meses/2 Año', value: 24},
          {label: '36 Meses/3 Año', value: 36},
          {label: '48 Meses/4 Año', value: 48},
          {label: '60 Meses/5 Año', value: 60},
          {label: '72 Meses/6 Año', value: 72},
        ]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  viewForm: {
    position: 'absolute',
    bottom: 0,
    width: '85%',
    paddingHorizontal: 50,
    backgroundColor: colors.PRIMARY_COLOR_DARK,
    borderRadius: 30,
    height: 180,
    justifyContent: 'center',
  },
  viewImputs: {
    flexDirection: 'row',
  },
  input: {
    height: 50,
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderColor: colors.PRIMARY_COLOR,
    borderRadius: 5,
    width: '60%',
    marginRight: 5,
    marginLeft: -5,
    marginBottom: 10,
    color: '#000',
    paddingHorizontal: 20,
  },
  inputPercentage: {
    width: '40%',
    marginLeft: 5,
  },
});

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 4,
    color: 'black',
    paddingRight: 30,
    backgroundColor: '#FFF',
    marginLeft: -5,
    marginRight: -5,
  },
  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 0.5,
    borderColor: 'grey',
    borderRadius: 8,
    color: 'black',
    paddingRight: 30,
    backgroundColor: '#FFF',
  },
});

import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Text, SafeAreaView, StatusBar} from 'react-native';
import Form from './src/components/Form.js';
import ResultCalculation from './src/components/ResultCalculation.js';
import Footer from './src/components/Footer.js';

import colors from './src/utils/colors';

export default function App() {
  const [capital, setCapital] = useState(null);
  const [interes, setInteres] = useState(null);
  const [months, setMonths] = useState(null);
  const [total, setTotal] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    if (capital && interes && months) {
      calculate();
    } else {
      reset();
    }
  }, [capital, interes, months]);

  const calculate = () => {
    reset();
    if (!capital) {
      setErrorMessage('Por favor, ingrese la cantidad del préstamo.');
    } else if (!interes) {
      setErrorMessage('Por favor, ingrese el interés a aplica.r');
    } else if (!months) {
      setErrorMessage('Por favor, seleccione el plazo a pagar.');
    } else {
      // CALCULADORA EJEMPLO
      // const i = interes / 100;
      // const fee = capital / ((1 - Math.pow(i + 1, -months)) / i);
      // setTotal({
      //   monthlyFee: fee.toFixed(2),
      //   totalPayable: (months * fee).toFixed(2),
      // });

      //CALCULADORA DE INTERES ANUAL
      const i = 1 / (1 + interes / 100 / 12);
      const div = 1 - Math.pow(i, months);
      const pagoMensual = (capital * (1 - i)) / (i * div);
      const pagoTotal = pagoMensual * months;
      setTotal({
        monthlyFee: pagoMensual.toFixed(2),
        totalPayable: pagoTotal.toFixed(2),
      });
    }
  };

  const reset = () => {
    setErrorMessage('');
    setTotal(null);
  };

  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={styles.header}>
        <View style={styles.background} />
        <Text style={styles.titleApp}>Cotizador de préstamos</Text>
        <Text style={styles.titleApp}>con interés anual</Text>
        <Form
          setCapital={setCapital}
          setInteres={setInteres}
          setMonths={setMonths}
        />
      </SafeAreaView>
      <ResultCalculation
        errorMessage={errorMessage}
        capital={capital}
        interes={interes}
        months={months}
        total={total}
      />
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

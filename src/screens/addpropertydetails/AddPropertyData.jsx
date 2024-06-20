import React from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux'
import { storePropertyData, State } from '../../state'

const validationSchema = Yup.object().shape({
  collectionType: Yup.string()
    .required('Collection Type is required'),
  caseFileId: Yup.string()
    .required('Case File ID is required'),
    lpaId:Yup.string()
    .required('LPA ID is required'),
    pdasubmitterentity:Yup.string()
    .required('PDA Submitter Entity is required'),
});

const AddPropertyData = () => {
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={{ collectionType: '',caseFileId:'',lpaId:'',pdasubmitterentity:''}}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        dispatch(storePropertyData(values));
        console.log(values);
      }}
    >
      {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
        <View style={styles.container}>
          <TextInput
            style={styles.input}
            onChangeText={handleChange('collectionType')}
            onBlur={handleBlur('collectionType')}
            value={values.collectionType}
            placeholder="Collection Type"
          />
          {touched.collectionType && errors.collectionType && <Text style={styles.errorText}>{errors.collectionType}</Text>}
          
          <TextInput
            style={styles.input}
            onChangeText={handleChange('caseFileId')}
            onBlur={handleBlur('caseFileId')}
            value={values.caseFileId}
            placeholder="Case File ID"
          />
          {touched.caseFileId && errors.caseFileId && <Text style={styles.errorText}>{errors.caseFileId}</Text>}
          

          <TextInput
          style={styles.input}
          onChangeText={handleChange('lpaId')}
          onBlur={handleBlur('lpaId')}
          value={values.lpaId}
          placeholder="LPA ID"
        />
        {touched.lpaId && errors.lpaId && <Text style={styles.errorText}>{errors.lpaId}</Text>}
        
        <TextInput
          style={styles.input}
          onChangeText={handleChange('pdasubmitterentity')}
          onBlur={handleBlur('pdasubmitterentity')}
          value={values.pdasubmitterentity}
          placeholder="PDA Submitter Entity"
        />
        {touched.pdasubmitterentity && errors.pdasubmitterentity && <Text style={styles.errorText}>{errors.pdasubmitterentity}</Text>}
        
          <Button onPress={handleSubmit} title="Submit" />
        </View>
      )}
    </Formik>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
  },
});

export default AddPropertyData;

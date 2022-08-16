import {
  Box,
  InputGroup,
  InputLeftAddon,
  Stack,
  Text,
  FormControl,
  Select,
  Button,
  InputRightAddon,
  Radio,
  RadioGroup,
  Input,
  Flex,
  Center,
  Container,
  FormErrorMessage,
} from '@chakra-ui/react';
import { Formik, useFormik } from 'formik';
import React, { useState } from 'react';
import { AddIcon } from '@chakra-ui/icons';
import * as Yup from 'yup';
import axios from 'axios';
import CommonInput from '../components/CommonInput';

// https://crudcrud.com/api/9dc6202cc6f742ed905f4997cb5ed3ef

const MasterformScreen = () => {
  const [radioValue, setradioValue] = useState('morning');
  const [file, setFile] = useState({});

  const convertToBase64 = (filer) => {
    console.log('fileinsideBase64', filer);
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(filer);
      fileReader.onload = () => {
        resolve(fileReader.result);
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };
  const fileUpload = async (event) => {
    console.log(event);
    setFile(event.target.files[0]);
    console.log('file', file);
    const filer = event.target.files[0];
    const base64 = await convertToBase64(filer);
    console.log('base64', base64);
  };
  // console.log('file', file);
  // console.log('filename', file.name);

  const selectFile = () => {
    console.log('file selected');
    document.getElementById('selectfile').click();
  };
  //adding to crud crud
  const formSubmit = async (values) => {
    console.log('values inside submit', values);
    // const data = await axios.post(
    //   'https://crudcrud.com/api/9dc6202cc6f742ed905f4997cb5ed3ef/product',
    //   values
    // );
    // console.log(data);
  };

  const formik = useFormik({
    initialValues: {
      name: '',
      contact: '',
      aadhar: '',
      stockpoint: '',
      joiningdate: '',
      reportingmanager: '',
      bloodgroup: '',
      emergencycontact: '',
      //  aadharupload: JSON.stringify(file.name),
      position: '',
      employeetype: '',
      shift: radioValue,
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .max(15, 'Must be 15 characters or less')
        .required('Required'),
      contact: Yup.string().required('Required'),
      aadhar: Yup.string().required('Required'),
    }),
    onSubmit: (values) => {
      console.log('values', values);
      formSubmit(values);
    },
  });
  return (
    <Container maxW={{ lg: '3xl' }} alignItems="left">
      <form onSubmit={formik.handleSubmit}>
        <Box p={['20px', '20px']}>
          <Text fontWeight="400" fontSize={['28px', '32px']} textAlign="center">
            Employee Master Form
          </Text>
          <Text fontWeight="400" fontSize="24px" mt="12px">
            Employee Details
          </Text>
          <Box
            display="flex"
            gap="20px"
            flexDir={['column', 'column', 'row', 'row']}
          >
            <Box>
              <Stack spacing={4} mt="20px">
                <FormControl isInvalid={formik.errors.name}>
                  <CommonInput
                    type="text"
                    name="name"
                    onChange={formik.handleChange}
                    value={formik.values.name}
                    onBlur={formik.handleBlur}
                    label="Employee Name"
                    formik={formik}
                  />
                </FormControl>

                {/* <FormErrorMessage>{form.errors.name}</FormErrorMessage> */}
                <FormControl isInvalid={formik.errors.contact}>
                  <CommonInput
                    type="text"
                    placeholder="90 12 43 65 76"
                    name="contact"
                    formik={formik}
                    label="Contact"
                    onChange={formik.handleChange}
                    value={formik.values.contact}
                    onBlur={formik.handleBlur}
                  />
                </FormControl>
                <FormControl isInvalid={formik.errors.aadhar}>
                  <CommonInput
                    type="text"
                    placeholder="180 0545 3031"
                    name="aadhar"
                    formik={formik}
                    label="Aadhar"
                    onChange={formik.handleChange}
                    value={formik.values.aadhar}
                    onBlur={formik.handleBlur}
                  />
                </FormControl>

                <FormControl>
                  <InputGroup>
                    <InputLeftAddon children="Stock point" bg="#ffff" />
                    <Select
                      placeholder="Select option"
                      name="stockpoint"
                      onChange={formik.handleChange}
                      value={formik.values.stockpoint}
                    >
                      <option value="option1">Option 1</option>
                      <option value="option2">Option 2</option>
                      <option value="option3">Option 3</option>
                    </Select>
                  </InputGroup>
                </FormControl>

                <FormControl>
                  <InputGroup>
                    <InputLeftAddon children="Joining Date" bg="#ffff" />
                    <Input
                      type="datetime-local"
                      placeholder="DD/MM/YY"
                      name="joiningdate"
                      onChange={formik.handleChange}
                      value={formik.values.joiningdate}
                    />
                  </InputGroup>
                </FormControl>

                <FormControl>
                  <CommonInput
                    type="text"
                    name="reportingmanager"
                    formik={formik}
                    label="Reporting Manager"
                    onChange={formik.handleChange}
                    value={formik.values.reportingmanager}
                    onBlur={formik.handleBlur}
                  />
                </FormControl>
              </Stack>
            </Box>
            <Box>
              <Stack spacing={4} mt="20px">
                <FormControl>
                  <CommonInput
                    type="text"
                    name="bloodgroup"
                    formik={formik}
                    label="Bood Group"
                    onChange={formik.handleChange}
                    value={formik.values.bloodgroup}
                    onBlur={formik.handleBlur}
                  />
                </FormControl>
                <FormControl>
                  <CommonInput
                    type="text"
                    placeholder="444 444 444"
                    name="emergencycontact"
                    formik={formik}
                    label="Emergency Num"
                    onChange={formik.handleChange}
                    value={formik.values.emergencycontact}
                    onBlur={formik.handleBlur}
                  />
                </FormControl>

                <Box border="0.5px solid #e2e8f0" borderRadius="5px">
                  <InputGroup>
                    {/* <button>File Upload</button> */}

                    <Input
                      id="selectfile"
                      display="none"
                      type="file"
                      placeholder="Aadhar Proof Upload"
                      name="aadharupload"
                      onChange={fileUpload}
                      value={formik.values.aadharupload}
                    />
                    <InputLeftAddon
                      children={<AddIcon onClick={selectFile} />}
                    />
                    <Text textAlign="center" mt="6px" ml="5px">
                      {file.name ? file.name : 'Aadhar Upload'}
                    </Text>
                  </InputGroup>
                </Box>

                <InputGroup>
                  <InputLeftAddon children="Position/Title" bg="#ffff" />
                  <Select
                    placeholder="Select option"
                    name="position"
                    onChange={formik.handleChange}
                    value={formik.values.position}
                  >
                    <option value="option1">Option 1</option>
                    <option value="option2">Option 2</option>
                    <option value="option3">Option 3</option>
                  </Select>
                </InputGroup>
                <InputGroup>
                  <InputLeftAddon children="Employee type" bg="#ffff" />
                  <Select
                    placeholder="Select option"
                    name="employeetype"
                    onChange={formik.handleChange}
                    value={formik.values.employeetype}
                  >
                    <option value="option1">Option 1</option>
                    <option value="option2">Option 2</option>
                    <option value="option3">Option 3</option>
                  </Select>
                </InputGroup>

                <InputGroup border="0.5px solid #e2e8f0" borderRadius="5px">
                  <InputLeftAddon
                    children="shift"
                    bg="#ffff"
                    border="none"
                    borderRight="0.5px solid #e2e8f0"
                  />
                  <Box display="grid" placeItems="center" ml="30px" gap="20px">
                    <RadioGroup onChange={setradioValue} value={radioValue}>
                      <Stack direction="row">
                        <Radio value="morning">Morning</Radio>
                        <Radio value="evening">Evening</Radio>
                      </Stack>
                    </RadioGroup>
                  </Box>
                </InputGroup>
              </Stack>
            </Box>
          </Box>
          <Box display="flex" justifyContent="flex-end" mt="20px">
            <Button
              type="submit"
              w="200px"
              color="#ffff"
              bg="#18B83B"
              textAlign="center"
              _hover={{ bg: 'red' }}
            >
              Save Employee
            </Button>
          </Box>
        </Box>
      </form>
    </Container>
  );
};

export default MasterformScreen;

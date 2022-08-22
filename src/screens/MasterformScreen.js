import {
  Box,
  InputGroup,
  InputLeftAddon,
  Stack,
  Text,
  FormControl,
  Select,
  Button,
  Radio,
  RadioGroup,
  Input,
  Container,
  FormErrorMessage,
} from '@chakra-ui/react';
import { Formik, useFormik } from 'formik';
import React, { useState } from 'react';
import { AddIcon } from '@chakra-ui/icons';
import * as Yup from 'yup';
import CommonInput from '../components/CommonInput';
import { masterFormSubmit } from '../actions/MasterFormactions';
import { useDispatch } from 'react-redux';

const MasterformScreen = () => {
  const [radioValue, setradioValue] = useState('morning');
  const [file, setFile] = useState({});
  // const [base64, setBase64] = useState('');
  const [formData, setFormData] = useState('');
  const dispatch = useDispatch();
  const convertToBase64 = (filer) => {
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
  // const fileUpload = async (event) => {
  //   console.log('entered onChange file upload');
  //   setFile(event.target.files[0]);
  //   const filer = event.target.files[0];
  //   setBase64(await convertToBase64(filer));
  // };
  // console.log('base64', base64);
  const fileUpload = (e) => {
    console.log(e.target.files[0]);
    setFile(e.target.files[0]);
    const fileName = e.target.files[0];
    const formData = new FormData();
    formData.append('image', fileName);
    console.log('form-Data', formData);
    setFormData(formData);
  };
  const selectFile = () => {
    console.log('file selected');
    document.getElementById('selectfile').click();
  };

  const formik = useFormik({
    initialValues: {
      name: '',
      contact: '',
      aadhar: '',
      stockPoint: '',
      joiningDate: '',
      reportingManager: '',
      bloodGroup: '',
      emergencyContact: '',
      position: '',
      employeeType: '',
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
      dispatch(masterFormSubmit(values, formData));
    },
  });
  return (
    <Container maxW={{ lg: '3xl' }} alignItems="left">
      <Box as="form" onSubmit={formik.handleSubmit}>
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
                <FormControl
                  isInvalid={formik.errors.name && formik.touched.name}
                >
                  <CommonInput
                    type="text"
                    name="name"
                    title="empName"
                    onChange={formik.handleChange}
                    value={formik.values.name}
                    label="Employee Name"
                    formik={formik}
                    onBlur={formik.handleBlur}
                  />
                  {/* {console.log('formik', formik.errors.name)} */}
                  {formik.touched.name && formik.errors.name ? (
                    <FormErrorMessage>{formik.errors.name}</FormErrorMessage>
                  ) : null}
                </FormControl>

                {/* <FormErrorMessage>{form.errors.name}</FormErrorMessage> */}
                {/* {console.log('formik contact', formik.errors.contact)}
                {console.log(formik)} */}
                <FormControl
                  isInvalid={formik.errors.contact && formik.touched.contact}
                >
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
                  {formik.touched.contact && formik.errors.contact ? (
                    <FormErrorMessage>{formik.errors.contact}</FormErrorMessage>
                  ) : null}
                </FormControl>

                <FormControl
                  isInvalid={formik.errors.aadhar && formik.touched.aadhar}
                >
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
                  {formik.touched.aadhar && formik.errors.aadhar ? (
                    <FormErrorMessage>{formik.errors.aadhar}</FormErrorMessage>
                  ) : null}
                </FormControl>

                <FormControl>
                  <InputGroup>
                    <InputLeftAddon children="Stock point" bg="#ffff" />
                    <Select
                      placeholder="Select option"
                      name="stockPoint"
                      onChange={formik.handleChange}
                      value={formik.values.stockPoint}
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
                      name="joiningDate"
                      onChange={formik.handleChange}
                      value={formik.values.joiningDate}
                    />
                  </InputGroup>
                </FormControl>

                <FormControl>
                  <CommonInput
                    type="text"
                    name="reportingManager"
                    formik={formik}
                    label="Reporting Manager"
                    onChange={formik.handleChange}
                    value={formik.values.reportingManager}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.reportingManager &&
                  formik.errors.reportingManager ? (
                    <FormErrorMessage>
                      {formik.errors.reportingManager}
                    </FormErrorMessage>
                  ) : null}
                </FormControl>
              </Stack>
            </Box>
            <Box>
              <Stack spacing={4} mt="20px">
                <FormControl>
                  <CommonInput
                    type="text"
                    name="bloodGroup"
                    formik={formik}
                    label="Bood Group"
                    onChange={formik.handleChange}
                    value={formik.values.bloodGroup}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.bloodGroup && formik.errors.bloodGroup ? (
                    <FormErrorMessage>
                      {formik.errors.bloodGroup}
                    </FormErrorMessage>
                  ) : null}
                </FormControl>
                <FormControl>
                  <CommonInput
                    type="text"
                    placeholder="444 444 444"
                    name="emergencyContact"
                    formik={formik}
                    label="Emergency Num"
                    onChange={formik.handleChange}
                    value={formik.values.emergencyContact}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.emergencyContact &&
                  formik.errors.emergencyContact ? (
                    <FormErrorMessage>
                      {formik.errors.emergencyContact}
                    </FormErrorMessage>
                  ) : null}
                </FormControl>

                <Box border="0.5px solid #e2e8f0" borderRadius="5px">
                  <InputGroup>
                    <Input
                      id="selectfile"
                      display="none"
                      type="file"
                      placeholder="Aadhar Proof Upload"
                      name="aadharUpload"
                      onChange={fileUpload}
                      // value={formik.values.aadharUpload}
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
                    name="employeeType"
                    onChange={formik.handleChange}
                    value={formik.values.employeeType}
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
      </Box>
    </Container>
  );
};

export default MasterformScreen;

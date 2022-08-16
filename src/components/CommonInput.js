import {
  FormErrorMessage,
  Input,
  InputGroup,
  InputLeftAddon,
} from '@chakra-ui/react';
import React from 'react';

const CommonInput = ({
  type,
  name,
  formik,
  placeholder,
  label,
  onChange,
  value,
  onBlur,
}) => {
  return (
    <>
      <InputGroup>
        <InputLeftAddon children={label} bg="#ffff" />
        <Input
          type={type}
          name={name}
          onChange={onChange}
          value={value}
          onBlur={onBlur}
          placeholder={placeholder}
        />
      </InputGroup>
      {formik.touched.name && formik.errors.name ? (
        <FormErrorMessage>{formik.errors.name}</FormErrorMessage>
      ) : null}
    </>
  );
};

export default CommonInput;

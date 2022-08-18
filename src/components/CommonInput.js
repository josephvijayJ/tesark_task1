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
  title,
}) => {
  return (
    <InputGroup>
      <InputLeftAddon children={label} bg="#ffff" />
      <Input
        type={type}
        name={name}
        onChange={onChange}
        value={value}
        placeholder={placeholder}
        onBlur={onBlur}
        title={title}
      />
    </InputGroup>
  );
};

export default CommonInput;

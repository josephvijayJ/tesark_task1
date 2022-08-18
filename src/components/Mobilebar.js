import { Box, Button, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from '@chakra-ui/react';
import data from '../sidebarData.json';

const Mobilebar = () => {
  return (
    <>
      <Box
        flexDirection="column"
        w="270px"
        h="100vh"
        borderRadius="4px"
        bg="#373737"
        alignItems="center"
        gap="10px"
        display="flex"
      >
        <Box align="center">
          <Button w="200px" borderRadius="8px" bg="#E45159" mt="10px">
            <Text color="#FFFFFF">Add Customer +</Text>
          </Button>
          <Button w="200px" borderRadius="8px" p="10px" bg="#18B83B" mt="10px">
            <Text color="#FFFFFF">Daily Indents</Text>
          </Button>
        </Box>

        <Box
          borderRadius="8px"
          border="1px solid #E45159"
          w="200px"
          dispaly="flex"
          flexDirection="column"
          align="center"
          justifyContent="center"
        >
          {data.map((item, index) => (
            <Box m="5px" key={index}>
              <Text
                color="#ffff"
                mb="4px"
                textAlign="left"
                ml="40px"
                marginBottom="10px"
              >
                {item.name}
              </Text>
              {item.subdata.length !== 0 &&
                item.subdata.map((ele, index) => (
                  <Accordion
                    defaultIndex={[1]}
                    allowMultiple
                    color="white"
                    key={index}
                  >
                    <AccordionItem borderStyle="none">
                      <h2>
                        <AccordionButton>
                          <Box flex="1">{ele.name}</Box>
                          <AccordionIcon />
                        </AccordionButton>
                      </h2>
                      <AccordionPanel
                        pb={4}
                        d="flex"
                        flexDirection="column"
                        textAlign="right"
                      >
                        {ele.data.map((item, index) => {
                          return <Text key={index}>{item.val}</Text>;
                        })}
                      </AccordionPanel>
                    </AccordionItem>
                  </Accordion>
                ))}
            </Box>
          ))}
        </Box>
      </Box>
    </>
  );
};

export default Mobilebar;

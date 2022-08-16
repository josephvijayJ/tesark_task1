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

const Sidebar = () => {
  // let values = JSON.parse(data);
  console.log(data);
  return (
    <>
      <Box
        flexDirection={{ lg: 'column' }}
        w="270px"
        h="100vh"
        borderRadius="4px"
        bg="#373737"
        alignItems="center"
        gap="10px"
        // display={['none', 'none', 'none', 'flex']}
        display={{ base: 'none', md: 'none', lg: 'flex' }}
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
          // h="763px"
          w="200px"
          dispaly="flex"
          flexDirection="column"
          align="center"
          justifyContent="center"
          cursor="pointer"
        >
          {data.map((item, index) => (
            <Box m="5px">
              <Text
                color="#ffff"
                key={index}
                mb="4px"
                textAlign="left"
                ml="40px"
                marginBottom="10px"
              >
                {item.name}
              </Text>
              {item.subdata.length !== 0 &&
                item.subdata.map((ele, index) => (
                  <Accordion defaultIndex={[1]} allowMultiple color="white">
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
                        {/* {console.log('data', ele)} */}
                        {ele.data.map((item) => {
                          return <Text>{item.val}</Text>;
                        })}
                      </AccordionPanel>
                    </AccordionItem>
                  </Accordion>
                  // <>
                  //   <Text>{ele.name}</Text>
                  //   <Text>{ele.data}</Text>
                  // </>
                ))}
            </Box>
          ))}
        </Box>
      </Box>
    </>
  );
};

export default Sidebar;

// height: 48px;
// width: 200px;
// left: 35px;
// top: 40px;
// border-radius: 8px;
// padding: 10px;

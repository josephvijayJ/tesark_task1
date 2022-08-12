import { HamburgerIcon } from '@chakra-ui/icons';
import {
  Box,
  Button,
  Icon,
  Image,
  Input,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from '@chakra-ui/react';
import Sidebar from './Sidebar';

const Topbar = () => {
  const [sidebar, setsideBar] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <Box h="72px" backgroundColor="#E2E2E2">
      <Box
        color="#D61119"
        fontWeight="700"
        fontSize="37px"
        lineheight="43.px"
        letterSpacing="1%"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Image
          width="120px"
          height="27px"
          src={require('../images/sneha logo red 1.png')}
          alt="Sneha logo"
        />{' '}
        <Box ml="10px">HOTEL TEAM</Box>
        {/* <HamburgerIcon display={['block', 'block', 'block', 'none']} /> */}
        {/* side bar */}
        <>
          <Button
            ref={btnRef}
            onClick={onOpen}
            color="#D61119"
            display={['flex', 'flex', 'flex', 'none']}
          >
            <Icon as={HamburgerIcon} />
          </Button>
          <Drawer
            isOpen={isOpen}
            placement="right"
            onClose={onClose}
            finalFocusRef={btnRef}
          >
            <DrawerOverlay />
            <DrawerContent>
              <DrawerCloseButton />

              <DrawerBody>
                <Sidebar />
              </DrawerBody>
            </DrawerContent>
          </Drawer>
        </>
      </Box>
    </Box>
  );
};

export default Topbar;
// Weight
// 700
// Size
// 36.96px

// 119.21px
// Height
// 27.82px
// Line height
// 43.39px
// Letter
// 1%

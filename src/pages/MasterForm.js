import { Box, Grid, GridItem } from '@chakra-ui/react';
import React from 'react';
import Sidebar from '../components/Sidebar';
import Topbar from '../components/Topbar';
import MasterformScreen from '../screens/MasterformScreen';

const MasterForm = () => {
  return (
    <>
      <Box>
        <Topbar />
        <Grid templateColumns="repeat(8, 1fr)" gap={3}>
          <GridItem colSpan={1}>
            <Sidebar />
          </GridItem>
          <GridItem colSpan={7}>
            <MasterformScreen />
          </GridItem>
        </Grid>
      </Box>
    </>
  );
};

export default MasterForm;
{
  /* <GridItem colSpan={2} h='10' bg='tomato' />
  <GridItem colStart={4} colEnd={6} h='10' bg='papayawhip' /> */
}

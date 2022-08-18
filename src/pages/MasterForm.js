import { Box, Grid, GridItem } from '@chakra-ui/react';
import React from 'react';
import Sidebar from '../components/Sidebar';
import Topbar from '../components/Topbar';
import MasterformScreen from '../screens/MasterformScreen';
import { useSelector } from 'react-redux';

const MasterForm = () => {
  const data = useSelector((state) => state.masterForm);
  console.log('reducer Data', data);
  return (
    <>
      <Box>
        <Topbar />
        <Grid templateColumns="repeat(8, 1fr)" gap={1}>
          <GridItem colSpan={1}>
            <Sidebar />
          </GridItem>
          <GridItem colSpan={['8', '8', '8', '7']}>
            <MasterformScreen />
          </GridItem>
        </Grid>
      </Box>
    </>
  );
};

export default MasterForm;

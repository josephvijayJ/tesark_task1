import { Box, Grid, GridItem } from '@chakra-ui/react';
import React from 'react';
import Sidebar from '../components/Sidebar';
import Topbar from '../components/Topbar';
import MasterformScreen from '../screens/MasterformScreen';
import { useDispatch, useSelector } from 'react-redux';
import { masterFormSubmit } from '../actions/MasterFormactions';

const MasterForm = () => {
  const dispatch = useDispatch();

  dispatch(masterFormSubmit());
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
{
  /* <GridItem colSpan={2} h='10' bg='tomato' />
  <GridItem colStart={4} colEnd={6} h='10' bg='papayawhip' /> */
}

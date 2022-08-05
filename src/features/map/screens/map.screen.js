import React from 'react';
import { Map } from '../components/map.component';
import { SafeArea } from '../../../components/utils/safe-area.component';

export const MapScreen = () => {
  return (
    <SafeArea>
      <Map />
    </SafeArea>
  );
};

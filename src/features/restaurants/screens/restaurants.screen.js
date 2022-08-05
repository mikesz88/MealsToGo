import React from 'react';
import { Searchbar } from 'react-native-paper';
import styled from 'styled-components/native';
import { StatusBar, SafeAreaView } from 'react-native';
import { RestaurantInfoCard } from '../components/restaurant-info-card.component';

const SafeArea = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `margin-Top: ${StatusBar.currentHeight}px`}
`;

const SearchContainer = styled.View`
  padding: ${({ theme: { space } }) => space.sixteen};
`;

const RestaurantListContainer = styled.View`
  flex: 1;
  padding: ${({ theme: { space } }) => space.sixteen};
`;

export const RestaurantsScreen = () => {
  return (
    <SafeArea>
      <SearchContainer>
        <Searchbar />
      </SearchContainer>
      <RestaurantListContainer>
        <RestaurantInfoCard />
      </RestaurantListContainer>
    </SafeArea>
  );
};

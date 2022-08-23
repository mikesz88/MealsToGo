import React, { useState, useContext } from 'react';
import styled from 'styled-components/native';
import { SearchBar } from 'react-native-paper';
import { LocationContext } from '../../../services/location/location.context';

const SearchContainer = styled.View`
  padding: ${({ theme: { space } }) => space.sixteen};
`;

export const Search = () => {
  const { keyword, search } = useContext(LocationContext);
  const [searchKeyword, setSearchKeyword] = useState(keyword);

  return (
    <SearchContainer>
      <SearchBar
        placeholder="Search for a location"
        value={searchKeyword}
        onSubmitEditing={() => {
          search(searchKeyword);
        }}
        onChangeText={(text) => {
          setSearchKeyword(text);
        }}
      />
    </SearchContainer>
  );
};

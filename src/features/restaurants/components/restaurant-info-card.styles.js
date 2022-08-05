import styled from 'styled-components/native';
import { Card } from 'react-native-paper';

export const RestaurantCard = styled(Card)`
  background-color: ${({ theme: { colors } }) => colors.bg.primary};
`;

export const RestaurantCardCover = styled(Card.Cover)`
  padding: ${({ theme: { space } }) => space.sixteen};
  background-color: ${({ theme: { colors } }) => colors.bg.primary};
`;

export const Address = styled.Text`
  font-family: ${({ theme: { fonts } }) => fonts.body};
  font-size: ${({ theme: { fontSizes } }) => fontSizes.caption};
`;

export const Info = styled.View`
  padding: ${({ theme: { space } }) => space.sixteen};
`;

export const Rating = styled.View`
  flex-direction: row;
  padding-top: ${({ theme: { space } }) => space.eight};
  padding-bottom: ${({ theme: { space } }) => space.eight};
`;
export const Section = styled.View`
  flex-direction: row;
  align-items: center;
`;
export const SectionEnd = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: flex-end;
`;

export const Icon = styled.Image`
  width: 15px;
  height: 15px;
`;

import React from 'react';
import styled from 'styled-components/native';
import { Card } from 'react-native-paper';
import { SvgXml } from 'react-native-svg';
import star from '../../../../assets/star';
import open from '../../../../assets/open';
import { Spacer } from '../../../components/spacer/spacer.component';

const RestaurantCard = styled(Card)`
  background-color: ${({ theme: { colors } }) => colors.bg.primary};
`;

const RestaurantCardCover = styled(Card.Cover)`
  padding: ${({ theme: { space } }) => space.sixteen};
  background-color: ${({ theme: { colors } }) => colors.bg.primary};
`;

const Address = styled.Text`
  font-family: ${({ theme: { fonts } }) => fonts.body};
  font-size: ${({ theme: { fontSizes } }) => fontSizes.caption};
`;

const Title = styled.Text`
  font-family: ${({ theme: { fonts } }) => fonts.heading};
  font-size: ${({ theme: { fontSizes } }) => fontSizes.body};
  color: ${({ theme: { colors } }) => colors.ui.primary};
`;

const Info = styled.View`
  padding: ${({ theme: { space } }) => space.sixteen};
`;

const Rating = styled.View`
  flex-direction: row;
  padding-top: ${({ theme: { space } }) => space.eight};
  padding-bottom: ${({ theme: { space } }) => space.eight};
`;
const Section = styled.View`
  flex-direction: row;
  align-items: center;
`;
const SectionEnd = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: flex-end;
`;

const StyledImage = styled.Image`
  width: 15px;
  height: 15px;
`;

const ClosedText = styled.Text`
  color: ${({ theme: { colors } }) => colors.ui.error};
`;

export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = 'Some Restaurant',
    icon = 'https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png',
    photos = [
      'https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg',
    ],
    address = '100 some random street',
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily = true,
  } = restaurant;

  const ratingArray = Array.from(new Array(Math.floor(rating)));

  return (
    <RestaurantCard elevation={5}>
      <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
      <Info>
        <Title>{name}</Title>
        <Section>
          <Rating>
            {ratingArray.map((_, index) => (
              <SvgXml key={index} xml={star} width={20} height={20} />
            ))}
          </Rating>
          <SectionEnd>
            {isClosedTemporarily && (
              <ClosedText variant="label">CLOSED TEMPORARILY</ClosedText>
            )}
            <Spacer position="left" size="small">
              {isOpenNow && <SvgXml xml={open} width={20} height={20} />}
            </Spacer>
            <Spacer position="left" size="small">
              <StyledImage source={{ uri: icon }} />
            </Spacer>
          </SectionEnd>
        </Section>
        <Address>{address}</Address>
      </Info>
    </RestaurantCard>
  );
};

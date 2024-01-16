import React from 'react'
import { Text, View,Image } from 'react-native';
import styled from 'styled-components';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Container=styled(View)`
margin:0 20px;
`;
const SectionFirst=styled(View)`
height:70px;
flex-direction:row;
align-items: center;
justify-content:space-between;
`;
const SectionSecond=styled(View)`
`;
const Popular=styled(View)`
flex-direction:row;
`;
const TextPopular=styled(Text)`
font-size:17px;
margin:0 8px;
text-decoration:coral underline;
`;
const Card = styled(View)`
  margin:8px 0;
  background-color: #fff;
  padding: 16px;
  border-radius: 8px;
  height: 150px;
  shadow-color: #000;
  shadow-opacity: 0.2;
  shadow-radius: 5px;
  elevation: 5; /* For Android */
  flex-direction:row;
  justify-content:space-between;
  align-items:center;
`;
const StyledImage = styled(Image)`
width: 140px;
  height: 140px;
  shadow-color: #000;
  shadow-opacity: 0.7;
  shadow-radius: 5px;
  elevation: 5;
`;

export const CardComponent = () => {
  return (
    <Container>
        <SectionFirst>
            <Popular>
                <TextPopular>Cheese</TextPopular>
                <TextPopular>Popular</TextPopular>
            </Popular>
            <Popular>
            <Ionicons name='language-outline' size={35} color={'coral'} />
            <Ionicons name='volume-high-outline' size={35} color={'coral'} />
            </Popular>
        </SectionFirst>
        <SectionSecond>
                <Card>
                <StyledImage
                source={{
                    uri: "https://img.freepik.com/photos-gratuite/pepperoni-finement-tranche-est-garniture-pizza-populaire-dans-pizzerias-style-americain-isole-fond-blanc-nature-morte_639032-229.jpg?w=740&t=st=1705354437~exp=1705355037~hmac=a15d6571c99b6a2481f45db4a8962e7798f303c9a3bcfe29d13ba1acd65a6c8d"
                }}/>
                <View>
                    <Text style={{fontSize:22,fontWeight:'bold'}}>Pepperoni</Text>
                    <Text style={{color:'coral',fontSize:20,marginVertical:5}}>&#9733;&#9733;&#9733;&#9733;</Text>
                    <Text style={{color:'coral',fontSize:20}}>18$</Text>
                </View>
                <Ionicons name='add-circle-sharp' size={50} color={'coral'} />
                </Card>
              <Card>
              <StyledImage
                source={{
                    uri: "https://img.freepik.com/free-photo/meat-chicken-mushrooms-pizza-isolated-white-background-top-view-photo-menu_639032-224.jpg?w=740&t=st=1705355923~exp=1705356523~hmac=9ce915a8c7964262e3e092f5257473e258ba471f5ad2dd998e38262744a385fa"
                }}
                    />
                    <View>
                    <Text style={{fontSize:22,fontWeight:'bold'}}>Supreme</Text>
                    <Text style={{color:'coral',fontSize:20,marginVertical:5}}>&#9733;&#9733;&#9733;&#9733;</Text>
                    <Text style={{color:'coral',fontSize:20}}>18$</Text>
                </View>
                <Ionicons name='add-circle-sharp' size={50} color={'coral'} />
            </Card>
            <Card>
              <StyledImage
                source={{
                    uri: "https://img.freepik.com/free-photo/delicious-italian-pizza-with-tomato-olives-pepperoni-mushrooms-top-view-isolated-white-background-still-life-copy-space_639032-299.jpg?w=740&t=st=1705355966~exp=1705356566~hmac=2cff24647cd8f5d87d5bcb2322331eb96c8c79974a8cef337b603573ab0f095c"
                }}
                    />
                    <View>
                    <Text style={{fontSize:22,fontWeight:'bold'}}>House Special</Text>
                    <Text style={{color:'coral',fontSize:20,marginVertical:5}}>&#9733;&#9733;&#9733;&#9733;</Text>
                    <Text style={{color:'coral',fontSize:20}}>18$</Text>
                </View>
                <Ionicons name='add-circle-sharp' size={50} color={'coral'} />
            </Card>
        </SectionSecond>
    </Container>
  )
}

import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, SafeAreaView } from 'react-native';
import styled from 'styled-components';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Badge, Searchbar } from 'react-native-paper';
import { useFonts, DynaPuff_400Regular } from '@expo-google-fonts/dynapuff';
import { CardComponent } from './components/card.component';

const SafeArea = styled(SafeAreaView)`
  flex: 1;
  background-color: #fff;
`;

const Header = styled(View)`
  background-color: coral;
  height: 230px;
`;

const Top = styled(View)`
  margin: 20px;
  height: 50px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const SearchBan = styled(View)`
  margin: 0 20px;
  height: 50px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const Category = styled(View)`
  margin: 20px;
  height: 50px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const Cate = styled(Text)`
  font-size: 15px;
  padding: 16px;
  border-radius: 8px;
  border-radius: 8px;
  background-color: #fff;
  width: 75px;
  text-align: center;
  border-radius: 35px;
  opacity: 0.7;
`;

export default function App() {
  const [oswaldLoaded] = useFonts({
    DynaPuff_400Regular,
  });

  if (!oswaldLoaded) {
    return null; // or some loading indicator
  }

  return (
    <SafeArea>
      <Header>
        <Top>
          <Ionicons name='person-circle' size={50} color={'white'} />
          <Text style={{ fontFamily: 'DynaPuff_400Regular', fontSize: 30, color: '#fff', fontWeight: 'bold' }}>Food Land</Text>
          <Ionicons name='cart-outline' size={50} color={'white'} />
        </Top>
        <SearchBan>
          <Searchbar style={{ backgroundColor: 'white', flex: 1 }} placeholder="Search food" />
          <Ionicons name='options-outline' size={50} color={'white'} />
        </SearchBan>
        <Category>
          <Cate>All</Cate>
          <Cate>Pizza</Cate>
          <Cate>Drinks</Cate>
          <Cate>Dessert</Cate>
        </Category>
      </Header>
      <CardComponent/>
      <StatusBar style="auto" />
    </SafeArea>
  );
}



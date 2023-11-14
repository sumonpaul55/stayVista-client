import React from 'react';
import Rooms from '../../components/rooms/Rooms';
import Container from '../../components/Shared/Container';
import Categories from './categories/Category';
// import { useSearchParams } from 'react-router-dom';

const Home = () => {

  return (
    <Container>
      <div>
        {/* categroy section */}
        <Categories></Categories>
        {/* Rooms section */}
        <Rooms></Rooms>
      </div>
    </Container>
  );
};

export default Home;
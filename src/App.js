import './App.css';
//import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import product from './product';
import Name from './components/Name';
import Price from './components/Price';
import Description from './components/Description';
import Image from './components/Image';
import { Card } from 'react-bootstrap';


const firstName = "Charly Djitaïngué Noudjalta";

const App = () => {
  return (
    <div className="App">
      <Card style={{ width: '18rem' }}>
        <Image imageUrl={product.image} />
        <Card.Body>
          <Name name={product.name} />
          <Price price={product.price} />
          <Description description={product.description} />
        </Card.Body>
      </Card>
      <p>Hello, {firstName ? firstName : "there"}!</p>
      {firstName && <img src="https://static.vecteezy.com/ti/vecteur-libre/p1/4566360-caissier-homme-personnage-illustration-vectoriel.jpg" alt="Your First Name" />}
    </div>
  );
}

export default App;

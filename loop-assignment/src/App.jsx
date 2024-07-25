
import React from 'react';
import Navbar from './components/Navbar';
import First from './components/First';
import Container from './components/Container';
import Button from './components/Button';
import SavingPlans from './components/SavingPlans';
import Footer from './components/Footer';
import SubFooter from './components/SubFooter';
import SavingHeader from './components/SavingHeader';



const cardData = [
  {
    img: "https://s3.amazonaws.com/production.assets/bundle-images/858ce9ec388ebc186fe07b07c69ac119-Colelction_meal_box.jpg",
    title: "Meal Box",
    description: " LPBNDLko92f",
    para:"- Bread & Rusk x 1",
    sara:"- Healthy Cereal x 2",
    lara:"- Sausage & Egg x 1",
    desc:"$65.44"
  },
  {
    img: "https://cdn.shopify.com/s/files/1/0654/7079/1899/products/3.png?v=1707334728",
    title: "Ageless Loop - Face cream",
    description: "Subscription discount (100%)",
    desc:"$0.00",
    desc1:"$23.00"
  },
  {
    img: "https://cdn.shopify.com/s/files/1/0654/7079/1899/products/Strawberry_BananaandEggs.jpg?v=1660731111",
    title: "Banana & Eggs",
    description: "Subscription discount (25%)",
    desc:"$19.49",
    desc1:"$25.99"
  },
  {
    img: "https://cdn.shopify.com/s/files/1/0654/7079/1899/products/BacanandEggwithToast.jpg?v=1660730725",
    title: "Bacon, Egg with Toast",
    description: "One time discount (12%)",
    desc:"$19.35",
    desc1:"$21.99",
  },
  {
    img: "https://cdn.shopify.com/s/files/1/0654/7079/1899/products/3.png?v=1707334728",
    title: "Ageless Loop - Face cream",
    description: "One time discount (14%)",
    desc:"$19.78",
    desc1:"$23.00",
  },
  {
    img: "https://cdn.shopify.com/s/files/1/0654/7079/1899/products/Frame3.png?v=1683707257",
    title: "Brazilian Yellow Catuai Small",
    description: "One time discount (12%)",
    desc:"$13.20",
    desc1:"$15.00",

  }
];

const App = () => {
  return (
    <div className=''>
      <Navbar/>
      <First/>
      <Container/>
      <Button/>
      <SavingHeader/>
      <div className='p-6 mx-6 '>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 p-4'>
          {cardData.map((card, index) => (
            <SavingPlans
              key={index}
              img={card.img}
              title={card.title}
              description={card.description}
              desc={card.desc}
              para={card.para}
              sara={card.sara}
              lara={card.lara}
              desc1={card.desc1}
            />
          ))}
          <SavingPlans
        title="Order Notes"
        description="-" 
      />
      <SavingPlans
        title="Order Notes"
        description="Order notes"
      />
      <SavingPlans
        title="Subscription plan"
        description="Deliver every 1 week"
      />
      <SavingPlans
        title="Shipping Address"
        description="Les
                      1100 Van Ness Avenue
                      San Francisco, California, 94109
                      United States"
      />
      <SavingPlans
        title="Payment details"
        description="Visa ending in 4242
                      Expires 1/25
                      Last updated on: July 3, 2024"
        
      />
        </div>
      </div>
      <div class="flex justify-center items-center p-2 ">
  <button class="border-2 border-black px-4 py-2 bg-white rounded-xl text-2xl">Pause subscription</button>
  
</div>
<a className='hover:underline flex justify-center items-center font-semibold text-lg p-4'>Cancel subscription</a>

 <SubFooter/>
 <Footer/>
    </div>
  );
};

export default App;

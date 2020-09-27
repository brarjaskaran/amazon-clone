import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <img
        className="home__image"
        src="https://images-fe.ssl-images-amazon.com/images/G/35/digital/video/merch/2020/TV/BRND/BRND_MTH20_00000_GWBleedingHero_1500x600_Final_en-AU_ENG_PVD5221._CB408305644_.jpg"
        alt="asd"
      />

      {/* Product id, title, price, rating, image */}
      {/* Product id, title, price, rating, image */}

      <div className="home__row">
        <Product
          id="23453423432534"
          title="TYhgianskoal aksjnojlashfoias adljfn jasdb bfasbf kljsdbnvjl iajsdbfijasdbligbsru gasdubv aiusd"
          price={324.34}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/71G3k%2BSOgJL._AC_UL160_SR160,160_.jpg"
        />
        <Product
          id="2342345332543"
          title="TYhgianskoal aksjnojlashfoias adljfn jasdb bfasbf kljsdbnvjl iajsdbfijasdbligbsru gasdubv aiusd"
          price={324.34}
          rating={1}
          image="https://m.media-amazon.com/images/I/51VBrgocJ3L.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="23423434334325"
          title="TYhgianskoal aksjnojlashfoias adljfn jasdb bfasbf kljsdbnvjl iajsdbfijasdbligbsru gasdubv aiusd"
          price={324}
          rating={4}
          image="https://m.media-amazon.com/images/I/51JQeriZJIL._SY346_.jpg"
        />
        <Product
          id="234235364325"
          title="TYhgianskoal aksjnojlashfoias adljfn jasdb bfasbf kljsdbnvjl iajsdbfijasdbligbsru gasdubv aiusd"
          price={3}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/71G3k%2BSOgJL._AC_UL160_SR160,160_.jpg"
        />
        <Product
          id="23124234325"
          title="TYhgianskoal aksjnojlashfoias adljfn jasdb bfasbf kljsdbnvjl iajsdbfijasdbligbsru gasdubv aiusd"
          price={32.34}
          rating={3}
          image="https://m.media-amazon.com/images/I/51gPCT7Hm9L._SY346_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="234234325"
          title="TYhgianskoal aksjnojlashfoias adljfn jasdb bfasbf kljsdbnvjl iajsdbfijasdbligbsru gasdubv aiusd"
          price={24.34}
          rating={5}
          image="https://m.media-amazon.com/images/I/51JQeriZJIL._SY346_.jpg"
        />
      </div>
    </div>
  );
}

export default Home;

import React from 'react'
import img from './img/dice-1.png'
import img1 from './img/dice-2.png'
import img2 from './img/dice-3.png'
import img3 from './img/dice-4.jpg'
import img4 from './img/Dice-5.png'
import img5 from './img/dice-6.png'

import { useState } from 'react'

const Dice = () => {
  const imageArr = [img, img1, img2, img3, img4, img5];
  const [firstImage, setFirstImage] = useState(img);
  const [secondImage, setSecondImage] = useState(img);

  const handleChange = (setImage) => {
    setImage(imageArr[Math.floor(Math.random() * 6)]);
  };

  return (
    <div>
      <img src={firstImage} alt="dice" onClick={() => handleChange(setFirstImage)} />
      <img src={secondImage} alt="dice" onClick={() => handleChange(setSecondImage)} />
    </div>
  );
};

export default Dice;
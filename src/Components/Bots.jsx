import React, { useEffect, useState } from 'react';
import './Bots.css';

function Bots({ onImageClick }) {
  const [bots, setBots] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/bots')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => setBots(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      <section>
        {bots.map((bot) => (
          <div key={bot.id} className='box'>
            <img
              className='bot'
              src={bot.avatar_url}
              alt={`Avatar of ${bot.name}`}
              onClick={() => onImageClick(bot.avatar_url)} // Add image to Swiper on click
            />

            <div className="content">
              <h1>{bot.name}</h1>
              <h4 className='fourr'>Health<i class="fa-solid fa-heart fa-beat"></i>: {bot.health}</h4>
              <h4 className='four'>Damage<i class="fa-solid fa-heart-pulse fa-fade"></i>: {bot.damage}</h4>
              <h4>Armor<i class="fa-solid fa-shield-halved"></i>: {bot.armor}</h4>
              <h4>Class: {bot.bot_class}</h4>
              <h6>Catchphrase: {bot.catchphrase}</h6>
              <h6>Created at: {bot.created_at}</h6>
              <h6>Updated at: {bot.updated_at}</h6>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}

export default Bots;

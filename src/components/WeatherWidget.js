import React, { useState } from 'react';


const WeatherWidget = () => {

        // Объявление переменной состояния, которую мы назовём "count"
        const [count, setCount] = React.useState(0);
      
        return (
          <div className="text-center"><br></br>
              <h2>📌 Хук состояния</h2>
            <p>Вы кликнули {count} раз</p>
            <button onClick={() => setCount(count + 1)}>
              Нажми на меня
            </button>
          </div>
        );
      
}

export default WeatherWidget;

// Хуки — это функции, с помощью которых вы можете «подцепиться» к состоянию 
// и методам жизненного цикла React из функциональных компонентов. 
// Хуки не работают внутри классов — они дают вам возможность использовать React без классов.
import React from 'react';
import { Joke } from '../Joke/joke';
import { jokes } from '../jokes';

export const App = () => {
  return (
    <div className="container">
      {jokes.map((oneJoke) => (
        <Joke
          key={oneJoke.id}
          userAvatar={oneJoke.avatar}
          userName={oneJoke.name}
          text={oneJoke.text}
          likes={oneJoke.likes}
          dislikes={oneJoke.dislikes}
        />
      ))}
    </div>
  );
};

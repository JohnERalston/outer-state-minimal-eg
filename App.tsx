import * as React from 'react';
import { timeState } from './coolStuff';

export const App = () => {
  const { hours, minutes, seconds } = timeState.useStore();
  return (
    <div className="app">
      <h4>Time</h4>
      <p>
        This app uses{' '}
        <a href="https://github.com/JohnERalston/outer-state" target="_blank">
          outer-state
        </a>{' '}
        to update React state outside of React using vanilla
        TypeScript/JavaScript
      </p>
      {hours}:{minutes}:{seconds}
    </div>
  );
};

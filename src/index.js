import React from 'react';
import { createRoot } from 'react-dom/client';
import BasicScene from './BasicScene/BasicScene';
import Models from './SecondScene/Models';
import Experiment1 from './ThirdScene/Experiment1';

const root = createRoot(document.getElementById('root'));
root.render(
  <>
    {/* <BasicScene /> */}
    <Models />
    {/* <Experiment1 /> */}
  </>
);

// I created 2 3D React components to see them uncoment them here.

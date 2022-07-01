import React from 'react';
import { createRoot } from 'react-dom/client';
import BasicScene from './BasicScene/BasicScene';
import Models from './SecondScene/Models';

const root = createRoot(document.getElementById('root'));
root.render(
  <>
    {/* <BasicScene /> */}
    <Models />
  </>
);

// I created 2 3D React components to see them uncoment them here.

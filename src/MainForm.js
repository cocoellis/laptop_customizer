import React from 'react';
import FeatureList from './FeatureList';

const MainForm = ({ title, features, selected, updateFeature }) => {
  return (
    <section className='main__form'>
      <h4>{title}</h4>
      <FeatureList
        features={features}
        selected={selected}
        updateFeature={updateFeature}
      />
    </section>
  );
};

export default MainForm;
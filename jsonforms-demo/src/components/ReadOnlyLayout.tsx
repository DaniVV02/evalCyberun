import React from 'react';
import { ReadOnlyText, ReadOnlyMultiText, ReadOnlyEnum, ReadOnlyCountryTable } from './CustomRenderers';

export const ReadOnlyLayout = () => {
  const data = {
    user: {
      a08: "Daniel Vargas Vila",
      a09: "Experienced full-stack developer with a passion for building intuitive interfaces and scalable backend systems."
    },
    item: {
      s01: ["vendor", "subcontractor"],
      p02: "yes",
      i01: [
        { country: "France", percent: 40 },
        { country: "Germany", percent: 30 },
        { country: "Japan", percent: 30 }
      ]
    }
  };

  return (
    <div style={{
      maxWidth: '800px',
      margin: '2rem auto',
      padding: '2rem',
      backgroundColor: '#fff',
      borderRadius: '12px',
      boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
      fontFamily: 'Segoe UI, sans-serif'
    }}>
      <h1 style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>User Profile</h1>

      <h2 style={{ fontSize: '1.4rem', marginTop: '2rem' }}>My User</h2>
      <ReadOnlyText label="Name" value={data.user.a08} />
      <ReadOnlyMultiText label="Description of your skills" value={data.user.a09} />

      <h2 style={{ fontSize: '1.4rem', marginTop: '2rem' }}>Profile</h2>
      <ReadOnlyEnum
        label="Who provides the contract?"
        values={data.item.s01}
      />
      <ReadOnlyEnum
        label="Are you currently student?"
        description="If you're currently student and also working for a company, check no"
        values={[data.item.p02]}
      />
      <ReadOnlyCountryTable data={data.item.i01} />
    </div>
  );
};

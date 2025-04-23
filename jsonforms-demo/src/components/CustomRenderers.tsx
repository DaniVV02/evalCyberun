import React from 'react';

const labelStyle = {
  fontWeight: 'bold',
  fontSize: '1rem',
  color: '#333',
};

const descriptionStyle = {
  fontSize: '0.85rem',
  color: '#777',
  marginTop: '0.25rem'
};

const containerStyle = {
  display: 'flex',
  flexDirection: 'column' as const,
  gap: '1rem',
  marginBottom: '2rem'
};

export const ReadOnlyText = ({ label, description, value }: { label: string, description?: string, value: string }) => (
  <div style={containerStyle}>
    <div style={labelStyle}>{label}</div>
    {description && <div style={descriptionStyle}>{description}</div>}
    <div style={{
      display: 'flex',
      justifyContent: 'space-between',
      padding: '0.5rem 1rem',
      backgroundColor: '#f8f9fa',
      borderRadius: '6px',
      border: '1px solid #ccc'
    }}>
      <div>{value}</div>
    </div>
  </div>
);

export const ReadOnlyMultiText = ({ label, value }: { label: string, value: string }) => (
  <div style={{ marginBottom: '2rem' }}>
    <div style={labelStyle}>{label}</div>
    <div style={{
      marginTop: '0.5rem',
      whiteSpace: 'pre-wrap',
      backgroundColor: '#f0f4f8',
      padding: '0.75rem 1rem',
      borderRadius: '8px',
      fontSize: '0.95rem',
      lineHeight: '1.5'
    }}>
      {value}
    </div>
  </div>
);

export const ReadOnlyEnum = ({ label, description, values }: { label: string, description?: string, values: string[] }) => (
  <div style={containerStyle}>
    <div style={labelStyle}>{label}</div>
    {description && <div style={descriptionStyle}>{description}</div>}
    <div style={{
      display: 'flex',
      gap: '0.5rem',
      flexWrap: 'wrap',
      marginTop: '0.5rem'
    }}>
      {values.map((val, i) => (
        <span key={i} style={{
          backgroundColor: '#e0f7fa',
          color: '#006064',
          padding: '0.4rem 0.8rem',
          borderRadius: '999px',
          fontSize: '0.9rem'
        }}>{val}</span>
      ))}
    </div>
  </div>
);

export const ReadOnlyCountryTable = ({ data }: { data: { country: string; percent: number }[] }) => (
  <div style={{ marginBottom: '2rem' }}>
    <div style={labelStyle}>In which countries did you worked / How long (in percent)?</div>
    <table style={{
      width: '100%',
      marginTop: '1rem',
      borderCollapse: 'collapse',
      fontSize: '0.95rem'
    }}>
      <thead>
        <tr style={{ backgroundColor: '#f1f1f1' }}>
          <th style={{ textAlign: 'left', padding: '0.5rem', borderBottom: '1px solid #ccc' }}>Country</th>
          <th style={{ textAlign: 'right', padding: '0.5rem', borderBottom: '1px solid #ccc' }}>Percentage</th>
        </tr>
      </thead>
      <tbody>
        {data.map((entry, idx) => (
          <tr key={idx}>
            <td style={{ padding: '0.5rem', borderBottom: '1px solid #eee' }}>{entry.country}</td>
            <td style={{ padding: '0.5rem', textAlign: 'right', borderBottom: '1px solid #eee' }}>{entry.percent}%</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

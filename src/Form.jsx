import React from "react";

const Form = ({ name, setName, title, setTitle, badge, setBadge, TITLES, BADGES, onSubmit }) => (
  <form
    onSubmit={onSubmit}
    style={{
      background: '#23283aee',
      padding: 24,
      borderRadius: 16,
      maxWidth: 400,
      margin: '32px auto',
      boxShadow: '0 0 24px #0ff3',
      zIndex: 1,
    }}
  >
    <label style={{ display: 'block', marginBottom: 12 }}>
      Name:<br />
      <input
        value={name}
        onChange={e => setName(e.target.value)}
        required
        style={{ width: '100%', padding: 8, borderRadius: 6, border: '1px solid #0ff', background: '#181c24', color: '#0ff' }}
      />
    </label>
    <label style={{ display: 'block', marginBottom: 12 }}>
      Title:<br />
      <select
        value={title}
        onChange={e => setTitle(e.target.value)}
        style={{ width: '100%', padding: 8, borderRadius: 6, border: '1px solid #0ff', background: '#181c24', color: '#0ff' }}
      >
        {TITLES.map(t => (
          <option key={t} value={t}>{t}</option>
        ))}
      </select>
    </label>
    <label style={{ display: 'block', marginBottom: 12 }}>
      Badge:<br />
      <select
        value={badge}
        onChange={e => setBadge(e.target.value)}
        style={{ width: '100%', padding: 8, borderRadius: 6, border: '1px solid #0ff', background: '#181c24', color: '#0ff' }}
      >
        {BADGES.map(b => (
          <option key={b} value={b}>{b}</option>
        ))}
      </select>
    </label>
    <button
      type="submit"
      className="neon-glow"
      style={{
        width: '100%',
        padding: 12,
        borderRadius: 8,
        background: 'linear-gradient(90deg, #0ff, #08f)',
        color: '#181c24',
        fontWeight: 'bold',
        border: 'none',
        fontSize: 18,
        marginTop: 8,
        cursor: 'pointer',
        letterSpacing: 1
      }}
    >
      Generate Passport
    </button>
  </form>
);

export default Form; 
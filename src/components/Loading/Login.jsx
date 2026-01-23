import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ContentCenter from './ContentCenter';
import LoginForm from './LoginForm';

const Divider = styled.div`
  width: 1px;
  height: 24rem;
  background: linear-gradient(to bottom, transparent, white, transparent);
  margin: 0 0.75rem;
  display: none;
  
  @media (min-width: 768px) {
    display: block;
  }
`;

const LocaleDropdown = styled.div`
  position: relative;
  display: inline-block;
  color: white;
  margin-right: 2rem;
  cursor: pointer;
`;

const Login = ({ onLogin, onTurnOff }) => {
    // Mock i18n
    const [locale, setLocale] = useState('en');
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const localeNames = {
        en: 'English',
        fr: 'Français'
    };

    // Removed local handleLogin since we use the prop onLogin directly

    return (
        <ContentCenter
            top={<div />}
            center={
                <div style={{ display: 'flex', width: '100%' }}>
                    <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', width: '50%' }}>
                        <div style={{ textAlign: 'right', marginRight: '3rem' }}>
                            <img src="" alt="Logo" style={{ display: 'none' }} />
                            <h2 style={{ color: 'white', fontSize: '1.25rem' }}>To begin, click your user name</h2>
                        </div>
                    </div>

                    <Divider />

                    <div style={{ width: '50%', paddingLeft: '2rem' }}>
                        <LoginForm onLogin={onLogin} />
                    </div>
                </div>
            }
            bottom={
                <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0 2rem', alignItems: 'center', height: '100%', color: 'white' }}>
                    <LocaleDropdown onClick={() => setDropdownOpen(!dropdownOpen)}>
                        {localeNames[locale]} ▾
                        {dropdownOpen && (
                            <div style={{ position: 'absolute', bottom: '100%', left: 0, background: 'white', color: 'black', padding: '5px' }}>
                                {Object.keys(localeNames).map(l => (
                                    <div key={l} onClick={(e) => { e.stopPropagation(); setLocale(l); setDropdownOpen(false); }}>
                                        {localeNames[l]}
                                    </div>
                                ))}
                            </div>
                        )}
                    </LocaleDropdown>
                    <div onClick={onTurnOff} style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <span style={{ background: '#E05555', borderRadius: '3px', padding: '2px 6px', fontSize: '0.8rem' }}>O</span>
                        <h4>Turn off computer</h4>
                    </div>
                </div>
            }
        />
    );
};

export default Login;

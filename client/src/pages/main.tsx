import {
  faArrowRight,
  faArrowTurnDown
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { useNetwork } from 'wagmi';
import AddressProvider from '../components/address';
import { Connect } from '../components/connect';
import { ShadowID } from '../components/shadowid';
import { Network } from '../components/network';
import { Send } from '../components/send';
import { Withdraw } from '../components/withdraw';

import LogoWhite from '../svg/logo_white.gif';
import Logo from '../svg/logo_white.gif';
import SendReceive from '../svg/send-receive.svg';
import Shield from '../svg/shield.svg';

import { stealthAddress, explorer } from '../utils/constants';

import './main.css';

export function Main() {
  const [activeTab, setActiveTab] = useState<string>('send');

  const { chain } = useNetwork();
  const contractAddress = stealthAddress[chain?.id ||  919 || 34443];
  const explorerAddress = explorer[chain?.id || 919 || 34443];

  return (
    <section className="layout">
      <div className="content">
        <div className="header-h">
          <div className="header-item">
            <img className="logo logo-bg" src={LogoWhite} alt="Shadow" />
            <img
              className="logo logo-default"
              src={Logo}
              alt="Shadow"
              onClick={() => (document.location.href = '/')}
            />
          </div>
          <div className="header-item">
            <Connect />

            <Network />
          </div>
        </div>

        <div className="promo large-block">
          <h1>
          Introducing <span className="promo-accent">Anonymous</span> & <span className="promo-accent">Effortless</span>
            <br /> Transfers on the {chain?.name.split(' ')[0] || 'Mode'} Network
          </h1>

          <div className="benefits">
            <div className="item">
              <img src={Shield} alt="" width={24} />
              <p>
              Safeguard Your Transactions with <strong>Untraceable&nbsp;Stealth Addresses</strong>{' '}
              
              </p>
            </div>
            <div className="item">
              <img src={SendReceive} alt="" width={24} />
              <p>
                Send and receive {chain?.nativeCurrency.symbol || 'ETH'}{' '}
                <strong>privately</strong>
              </p>
            </div>
          </div>
        </div>

        <AddressProvider>
          <ShadowID />

          <div className="large-block">
            <div className="nav-tabs">
              <div
                className={activeTab === 'send' ? 'tab active' : 'tab'}
                onClick={() => setActiveTab('send')}
              >
                <h2>
                  <FontAwesomeIcon icon={faArrowRight} />
                  &nbsp; Send
                </h2>
                <span className="super">
                  {chain?.nativeCurrency.symbol || 'ETH'}
                </span>
              </div>
              <div
                className={activeTab === 'withdraw' ? 'tab active' : 'tab'}
                onClick={() => setActiveTab('withdraw')}
              >
                <h2>
                  <FontAwesomeIcon icon={faArrowTurnDown} flip="horizontal" />
                  &nbsp; Receive
                </h2>
                <span className="super">
                  {chain?.nativeCurrency.symbol || 'ETH'}
                </span>
              </div>
            </div>

            <div
              className="pane"
              style={{ display: activeTab === 'send' ? 'block' : 'none' }}
            >
              <Send />
            </div>
            <div
              className="pane"
              style={{
                display: activeTab === 'withdraw' ? 'block' : 'none',
              }}
            >
              <Withdraw />
            </div>
          </div>
        </AddressProvider>

        <div className="footer">
          
        </div>
      </div>
    </section>
  );
}

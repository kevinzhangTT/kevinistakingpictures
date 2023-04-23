import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { navLinks, socialLinks } from './NavData';
import useBreakpoint from '../Hooks/useBreakpoint';
import clsx from 'clsx';
import { useState } from 'react';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import { motion, AnimatePresence } from 'framer-motion';

// import { theme } from '../../../tailwind.config.js';

function Nav() {

  //! CHANGE 768 TO USE THE VALUE FROM TAILWIND.CONFIG.JS.THEME.SCREENS.MD
  const isDesktop = useBreakpoint() > 768;

  const [showLinkMap, setShowLinkMap] = useState(false);
  
  return (
    <div>
      {isDesktop ? (
        <nav className="w-64 p-4">
          <img
            src={require('./../../images/me-square-500px.jpg')}
            alt="it's me"
            className="mb-8 w-full select-none pointer-events-none"
          />
          <LinkMap isDesktop={isDesktop} />
        </nav>
      ) : (
        <div>
          <AnimatePresence>
            {showLinkMap && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.75, ease: [.14,.34,.32,1] }}
                // transition={{ duration: 0.75, ease: [0.5,0,0.5,1] }}
              >
                <div className="text-center">
                  <LinkMap isDesktop={isDesktop} />
                  <div className="h-8" />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
          <div className="flex justify-between px-4">
            <SocialMap />
            <button
              onClick={() => setShowLinkMap(!showLinkMap)}
              className="px-4 text-2xl"
            >
              <FontAwesomeIcon icon={solid('bars')} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

function LinkMap({ isDesktop }: { isDesktop: boolean }) {
  return (
    <ul>
      {navLinks.links.map((link, index) => (
        <li
          key={index}
          className={clsx(
            isDesktop ? 'text-right text-lg mt-4 ' : 'text-center text-xl mt-4',
            'text-black/75 font-display'
          )}
        >
          <Link to={link.path} className="hover:line-through hover:font-bold">
            <span className="select-none">
              {link.title}
            </span>
            {link.icon && (
              <FontAwesomeIcon icon={link.icon} className="w-8 pl-2" />
            )}
          </Link>
        </li>
      ))}
    </ul>
  );
}

function SocialMap() {
  return (
    <div>
      {socialLinks.links.map((link, index) => (
        <button key={index} className="px-4 text-2xl">
          <FontAwesomeIcon icon={link.icon}/>
        </button>
      ))}
    </div>
  );
}

export default Nav;

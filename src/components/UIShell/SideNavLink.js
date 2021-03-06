import cx from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import Link, { LinkPropTypes } from './Link';
import SideNavIcon from './SideNavIcon';
import SideNavItem from './SideNavItem';
import SideNavLinkText from './SideNavLinkText';
import { settings } from 'carbon-components';

const { prefix } = settings;

const SideNavLink = ({
  className: customClassName,
  children,
  icon,
  isActive,
  ...rest
}) => {
  const className = cx({
    [`${prefix}--side-nav__link`]: true,
    [`${prefix}--side-nav__link--current`]: isActive,
    [customClassName]: !!customClassName,
  });

  return (
    <SideNavItem>
      <Link {...rest} className={className}>
        <SideNavIcon small>{icon}</SideNavIcon>
        <SideNavLinkText>{children}</SideNavLinkText>
      </Link>
    </SideNavItem>
  );
};

SideNavLink.propTypes = {
  ...LinkPropTypes,

  /**
   * Provide an optional class to be applied to the containing node
   */
  className: PropTypes.string,

  /**
   * Specify the text content for the link
   */
  children: PropTypes.string.isRequired,
};

SideNavLink.defaultProps = {
  element: 'a',
};

export const createCustomSideNavLink = element => props => {
  return <SideNavLink element={element} {...props} />;
};

export default SideNavLink;

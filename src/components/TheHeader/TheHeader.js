import React from 'react';
import {
  Header,
  HeaderContainer,
  HeaderName,
  HeaderNavigation,
  HeaderMenuButton,
  HeaderMenuItem,
  HeaderGlobalBar,
  HeaderGlobalAction,
  SkipToContent,
  SideNav,
  SideNavItems,
  HeaderSideNavItems,
} from '@carbon/react';
import { Switcher, Notification, UserAvatar } from '@carbon/react/icons';
import { Link } from 'react-router-dom';


const TheHeader = () => (
  <HeaderContainer
    render={({ isSideNavExpanded, onClickSideNavExpand }) => (
      <Header aria-label="Carbon Calculator">
        <SkipToContent />
        <HeaderMenuButton
          aria-label="Open menu"
          onClick={onClickSideNavExpand}
          isActive={isSideNavExpanded}
        />
      <HeaderName element={Link} to="/" prefix="">
        Nordic Waves Calculator
      </HeaderName>
        <HeaderNavigation aria-label="Carbon Calculator">
        <HeaderMenuItem element={Link} to="/welcome">
         Welcome
        </HeaderMenuItem>
        <HeaderMenuItem element={Link} to="/house">
          House
        </HeaderMenuItem>
        <HeaderMenuItem element={Link} to="/car">
          Car
        </HeaderMenuItem>
        <HeaderMenuItem element={Link} to="/motorbike">
          Motorbike
        </HeaderMenuItem>
        <HeaderMenuItem element={Link} to="/bus-rail">
          Bus and Rail
        </HeaderMenuItem>
        </HeaderNavigation>
        <SideNav
          aria-label="Side navigation"
          expanded={isSideNavExpanded}
          isPersistent={false}
        >
          <SideNavItems>
            <HeaderSideNavItems>
              <HeaderMenuItem href="/welcome">Welcome</HeaderMenuItem>
            </HeaderSideNavItems>
            <HeaderSideNavItems>
              <HeaderMenuItem href="/house">House</HeaderMenuItem>
            </HeaderSideNavItems>
            <HeaderSideNavItems>
              <HeaderMenuItem href="/car">Car</HeaderMenuItem>
            </HeaderSideNavItems>
            <HeaderSideNavItems>
              <HeaderMenuItem href="/motorbike">Motorbike</HeaderMenuItem>
            </HeaderSideNavItems>
            <HeaderSideNavItems>
              <HeaderMenuItem href="/bus-rail">Bus and Rail</HeaderMenuItem>
            </HeaderSideNavItems>
          </SideNavItems>
        </SideNav>
        <HeaderGlobalBar>
          <HeaderGlobalAction aria-label="Notifications" tooltipAlignment="center">
            <Notification size={20} />
          </HeaderGlobalAction>
          <HeaderGlobalAction aria-label="User Avatar" tooltipAlignment="center">
            <UserAvatar size={20} />
          </HeaderGlobalAction>
          <HeaderGlobalAction aria-label="App Switcher" tooltipAlignment="end">
            <Switcher size={20} />
          </HeaderGlobalAction>
        </HeaderGlobalBar>

      </Header>
    )}
  />
);

export default TheHeader;

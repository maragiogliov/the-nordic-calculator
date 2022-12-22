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
        
       Carbon Calculator by Nordic Waves
      </HeaderName>
      
        <HeaderNavigation aria-label="Carbon Calculator">
       
  
        </HeaderNavigation>
        <SideNav
          aria-label="Side navigation"
          expanded={isSideNavExpanded}
          isPersistent={false}
        >
          <SideNavItems>
            <HeaderSideNavItems>
              <HeaderMenuItem href="/welcome">Home</HeaderMenuItem>
            </HeaderSideNavItems>
            <HeaderSideNavItems>
              <HeaderMenuItem href="/house">House</HeaderMenuItem>
            </HeaderSideNavItems>
            <HeaderSideNavItems>
              <HeaderMenuItem href="/house">Flight</HeaderMenuItem>
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
            <HeaderSideNavItems>
              <HeaderMenuItem href="/results">Results</HeaderMenuItem>
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

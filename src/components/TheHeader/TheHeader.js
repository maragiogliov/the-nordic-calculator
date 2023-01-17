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
  Search,
} from '@carbon/react';
import { ShoppingCart } from '@carbon/react/icons';
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
              <HeaderMenuItem href="/welcome">Welcome</HeaderMenuItem>
            </HeaderSideNavItems>
            <HeaderSideNavItems>
              <HeaderMenuItem href="/house">Home</HeaderMenuItem>
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
            <HeaderSideNavItems>
              <HeaderMenuItem href="/calculatorTest">Calculator Test</HeaderMenuItem>
            </HeaderSideNavItems>
          </SideNavItems>
        </SideNav>
        <HeaderGlobalBar>
       
{/*
          <HeaderGlobalAction aria-label="User Avatar" tooltipAlignment="center">
            <Search
            input={0}
             size='sm' />
    </HeaderGlobalAction> */}

          <HeaderGlobalAction aria-label="App Switcher" tooltipAlignment="end">
            <ShoppingCart size={24} />
          </HeaderGlobalAction>
        </HeaderGlobalBar>

      </Header>
    )}
  />
);

export default TheHeader;

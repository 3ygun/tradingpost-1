// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getProductsIPC } from '../actions/ipcHandler';
import { Navbar, Nav, NavItem } from 'reactstrap';

type Props = {};

export default class Home extends Component<Props> {
    props: Props;

    render() {
        return (
            <Navbar color="light" light expand="md">
              <img src="https://247scouting.com/web/BSA999/attachment/image_14327325560_2271.gif" alt="Black Pug" />
              <h2><Link to="/">Trading Post</Link></h2>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <Link to="/p">Point of Sale</Link>
                </NavItem>
                <NavItem>
                  <Link to="/payment">Payment</Link>
                </NavItem>
                <NavItem onClick={() => getProductsIPC('productByType', 'F')}>
                  <a href="#">Refresh</a>
                </NavItem>
              </Nav>
            </Navbar>
        );
    }
}

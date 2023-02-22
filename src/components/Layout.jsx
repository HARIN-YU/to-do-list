import React from 'react';
import styled from 'styled-components';

const LayoutDiv = styled.div`
    background-color: #fff;
    border: 2px solid #485EC6;
    width: 393px;
    height: 850px;
    padding: 10px;
`

const Layout = ({ children }) => {
    return <LayoutDiv>{ children }</LayoutDiv>;
}

export default Layout;
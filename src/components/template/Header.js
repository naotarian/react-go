import { AppBar, Toolbar, Typography } from '@material-ui/core'
import React from 'react'
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import styled from "styled-components";

const HeaderOriginal = styled(AppBar)`
  background: red;
`;

function Header() {
    return (
        <HeaderOriginal position="static">
            <Toolbar>
                <Typography>ヘッダー</Typography>
                <AccountCircleOutlinedIcon />
            </Toolbar>
        </HeaderOriginal>
    )
}

export default Header
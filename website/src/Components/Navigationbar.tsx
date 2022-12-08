import * as React from 'react';
import { Navbar, useTheme } from "@nextui-org/react";

export const Navigationbar = () => {
    // add isActive later
    return (
        <Navbar isBordered isCompact shouldHideOnScroll variant={"sticky"} maxWidth={"fluid"}>
            <Navbar.Content enableCursorHighlight variant={'highlight'} activeColor={'primary'}>
                <Navbar.Link href="./Home">Home</Navbar.Link>
                <Navbar.Link href="./About">About</Navbar.Link>
                <Navbar.Link href="./Projects">Projects</Navbar.Link>
            </Navbar.Content>
            <Navbar.Content>
                <Navbar.Link href='link to twitter'></Navbar.Link>
                <Navbar.Link href='link to github'></Navbar.Link>
                <Navbar.Link href='link to linkedin'></Navbar.Link>
            </Navbar.Content>
        </Navbar>
    );
};
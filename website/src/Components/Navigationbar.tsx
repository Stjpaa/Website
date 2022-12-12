import { Navbar, Image } from "@nextui-org/react";

export const Navigationbar = () => {
    // add isActive later
    return (
        <Navbar isBordered isCompact shouldHideOnScroll variant={"floating"} maxWidth={"sm"} css={{ backgroundColor: "$background"}}>
            <Navbar.Content enableCursorHighlight variant={'highlight'} activeColor={'primary'}>
                <Navbar.Link href='/home'>Home</Navbar.Link>
                <Navbar.Link href="/about">About</Navbar.Link>
                <Navbar.Link href="/projects">Projects</Navbar.Link>
            </Navbar.Content>
            <Navbar.Content>
                <Navbar.Link href='http://www.twitter.com/Stjpaa' target={'_blank'}><Image src={require('../Images/Twitter.png')} width={'40px'} /></Navbar.Link>
                <Navbar.Link href='http://www.github.com/stjpaa' target={'_blank'}> <Image src={require('../Images/Github.png')} width={'32px'} /></Navbar.Link>
                <Navbar.Link href='https://www.linkedin.com/in/stefan-minikel-5a7b06233/' target={'_blank'}> <Image src={require('../Images/LinkedIn.png')} width={'40px'} /></Navbar.Link>
            </Navbar.Content>
        </Navbar>
    );
};


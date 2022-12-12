import { Navbar, Spacer } from "@nextui-org/react";

export const ProjectsNavigationbar = () => {
    return (
        <div>
            <Navbar isBordered isCompact shouldHideOnScroll variant={"floating"} css={{left: '44%', right: '44%', maxWidth: '12%',}}>
                <Navbar.Content enableCursorHighlight variant={'highlight'}>
                    <Navbar.Link href="/projects/games">Games</Navbar.Link>
                    <Spacer x={1.15} />
                    <Navbar.Link href="/projects/software">Software</Navbar.Link>
                </Navbar.Content>
            </Navbar>
        </div>
    );
};
import { Grid, Navbar, Spacer } from "@nextui-org/react";

export const ProjectsNavigationbar = () => {
    return (
        <div>
            <Grid.Container justify="center">
            <Navbar isBordered isCompact shouldHideOnScroll variant={"floating"} maxWidth="xs" css={{'@xs': { display: 'flex', maxWidth: 250,  }}}>
                <Navbar.Content enableCursorHighlight variant={'highlight'}>
                    <Navbar.Link href="/projects/games">Games</Navbar.Link>
                    <Spacer x={1.15} />
                    <Navbar.Link href="/projects/software">Software</Navbar.Link>
                </Navbar.Content>
            </Navbar>
            </Grid.Container>
        </div>
    );
};
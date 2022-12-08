import { Avatar, Grid, Spacer, Text, Image } from '@nextui-org/react';
import * as React from 'react';

export const Home = () => {
    return (
        <div>
            <Spacer y={3} />

            <Grid.Container justify='center'>
                <Grid>
                    <Avatar color="primary" size={'xl'} />
                </Grid>
            </Grid.Container>

            <Spacer y={1} />

            <Grid.Container justify='center'>
                <Grid>
                    ___________________________________________
                </Grid>
            </Grid.Container>

            <Spacer y={1} />

            <Grid.Container justify='center'>
                <Grid>
                    <Text h1>Stefan Minikel</Text>
                </Grid>
            </Grid.Container>
            <Grid.Container justify='center'>
                <Grid>
                    <Text h4>Game Development Student</Text>
                </Grid>
            </Grid.Container>

            <Spacer y={4} />

            <Grid.Container justify='center'>
                <Grid>
                    <Text h2>Projects</Text>
                </Grid>
            </Grid.Container>

            <Spacer y={1} />

            <Grid.Container justify='center'>
                <Grid>
                    <Text h3>Text 1</Text>
                    <Image src="https://via.placeholder.com/200" />
                </Grid>
                <Spacer x={5} />
                <Grid>
                    <Text h3>Text 2</Text>
                    <Image src='https://via.placeholder.com/200' />
                </Grid>
                <Spacer x={5} />
                <Grid>
                    <Text h3>Text 3</Text>
                    <Image src='https://via.placeholder.com/200' />
                </Grid>
            </Grid.Container>
        </div>
    );
};
import { Grid, Image, Input, Spacer, Textarea } from "@nextui-org/react";
import { loc_de } from "../Localization/de-de";

export const About = () => {
    return (
        <div>
            <Spacer y={2} />

            <Grid.Container justify="flex-start">
                <Spacer x={7} />

                <Grid>
                    <Image src="https://via.placeholder.com/300" />
                </Grid>

                <Spacer x={4} />

                <Grid>
                    <Textarea readOnly minRows={1} maxRows={30} width="1000" value={loc_de.about} />
                </Grid>
            </Grid.Container>
        </div>
    );
};
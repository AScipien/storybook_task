import Grid from "./Grid";
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import Card from "../card/Card";
import { image_flower_1, image_flower_1_288x162x2, image_flower_1_559x315x2, image_flower_2, image_flower_2_392x220x2, image_flower_3, image_flower_3_600x338x2, image_flower_4 } from "../../utils/images";
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
    title: "Grids",
    component: Grid,
    argTypes: {
        size: {
            options: ['xs', 's', 'm', 'l', 'xl'],
            control: { type: 'select' },
        },
    },
    parameters: {
        //👇 The viewports object from the Essentials addon
        viewport: {
            //👇 The viewports you want to use
            viewports: INITIAL_VIEWPORTS,
            //👇 Your own default viewport
            defaultViewport: 'pixel',
        },
        docs: {
            page: null,
        },
    },
} as ComponentMeta<typeof Grid>;

const Template: ComponentStory<typeof Grid> = (args) =>
    <Grid {...args}>
        <Card children={image_flower_2}></Card>
        <Card children={image_flower_2}></Card>
        <Card children={image_flower_1_559x315x2}></Card>
    </Grid>

export const BasicGrid = Template.bind({});

//grid 360+
//#region grid360
export const GridXS = () =>
    <Grid size="xs">
        <Card children={image_flower_2}></Card>
        <Card children={image_flower_2}></Card>
        <Card children={image_flower_1_559x315x2}></Card>
    </Grid>

GridXS.parameters = {
    viewport: {
        defaultViewport: 'gridXS',
    },
}

//#endregion grid360

//grid 600+
//#region grid600
export const GridS = () =>
    <Grid size="s">
        <Card children={image_flower_1}></Card>
        <Card children={image_flower_1}></Card>
        <Card children={image_flower_1}></Card>
        <Card children={image_flower_2}></Card>
        <Card children={image_flower_2}></Card>
        <Card children={image_flower_3}></Card>
    </Grid>
GridS.parameters = {
    viewport: {
        defaultViewport: 'gridS',
    }
}
//#endregion grid600

//grid 800
//#region grid800
export const GridM = () =>
    <Grid size="m">
        <Card children={image_flower_1}></Card>
        <Card children={image_flower_1}></Card>
        <Card children={image_flower_1}></Card>
        <Card children={image_flower_2}></Card>
        <Card children={image_flower_2}></Card>
        <Card children={image_flower_3}></Card>
    </Grid>
GridM.parameters = {
    viewport: {
        defaultViewport: 'gridM',
    }
}
//#endregion 800

//grid 1024
//#region grid1024
export const GridL = () =>
    <Grid size="l">
        <Card children={image_flower_1}></Card>
        <Card children={image_flower_1}></Card>
        <Card children={image_flower_1}></Card>
        <Card children={image_flower_1}></Card>
        <Card children={image_flower_2}></Card>
        <Card children={image_flower_2}></Card>
        <Card children={image_flower_2}></Card>
        <Card children={image_flower_3}></Card>
        <Card children={image_flower_3}></Card>
        <Card children={image_flower_4}></Card>
    </Grid>
GridL.parameters = {
    viewport: {
        defaultViewport: 'gridL',
    }
}
//#endregion grid1024

//grid 1288
//#region grid1288
export const GridXL = () =>
    <Grid size="xl">
        <Card children={image_flower_1_288x162x2}></Card>
        <Card children={image_flower_1_288x162x2}></Card>
        <Card children={image_flower_1_288x162x2}></Card>
        <Card children={image_flower_1_288x162x2}></Card>
        <Card children={image_flower_2_392x220x2}></Card>
        <Card children={image_flower_2_392x220x2}></Card>
        <Card children={image_flower_2_392x220x2}></Card>
        <Card children={image_flower_3_600x338x2}></Card>
        <Card children={image_flower_3_600x338x2}></Card>
    </Grid>
GridXL.parameters = {
    viewport: {
        defaultViewport: 'gridXL',
    }
}
//#endregion grid1288
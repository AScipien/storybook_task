import { ComponentMeta, ComponentStory } from "@storybook/react";
import { image_flower_1 } from "../../utils/images";
import Card from "./Card";

export default {
    title: "Cards",
    component: Card,
    argTypes: {
        color: { control: 'color' },
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args}>
    <div>
        <h1>This is basic card with image of flower</h1>
        <div className="image_size_s">
            {image_flower_1}
        </div>
    </div>
</Card>;

export const BasicCard = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

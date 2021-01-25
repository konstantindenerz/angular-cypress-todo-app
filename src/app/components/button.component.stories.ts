import {Meta, Story} from '@storybook/angular';
import {ButtonComponent} from './button.component';

export default {
  title: 'Core / Button', // grouping
  component: ButtonComponent, // required for documentation
} as Meta;

const Template: Story<ButtonComponent> = (props: ButtonComponent) => ({
  component: ButtonComponent,
  props,
});

// Story 1
export const WithLabel = Template.bind({});
WithLabel.args = {
  label: 'Add',
};

// Story 2
export const NoLabel = Template.bind({});

import {Component, Input} from '@angular/core';

@Component({
  selector: 'labs-foobar',
  template: `{{value}}`,
  styles: [`:host {
    color: #ff584f
  }`],
})
class FoobarComponent {
  @Input() value: number;
}


export default {
  title: 'foo',
};

const Template = (props) => ({
  component: FoobarComponent,
  props,
});

export const Foobar42 = Template.bind({});
Foobar42.args = {
  value: 42,
};

export const Foobar5 = Template.bind({});
Foobar5.args = {
  value: 5,
};

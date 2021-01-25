import {LoginComponent} from './login.component';
import {Meta, moduleMetadata, Story} from '@storybook/angular';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {ReactiveFormsModule} from '@angular/forms';
import {ItemsService} from '../../services/items.service';
import {of} from 'rxjs';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {APP_BASE_HREF} from '@angular/common';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

const component = LoginComponent;

export default {
  title: 'Pages/Login',
  component: LoginComponent,
  decorators: [
    moduleMetadata({
      imports: [
        MatButtonModule,
        MatInputModule,
        ReactiveFormsModule,
        RouterModule.forRoot([], {useHash: true}),
        HttpClientModule,
        BrowserAnimationsModule,
      ],
      providers: [
        {provide: APP_BASE_HREF, useVale: '/'},
        {
          provide: ItemsService, useFactory: () => ({
            items$: of([]),
          }),
        },
      ],
    }),
  ],
} as Meta;

const Template: Story<typeof component> = (props: typeof component) => ({
  component,
  props,
});

export const EmptyLogin = Template.bind({});

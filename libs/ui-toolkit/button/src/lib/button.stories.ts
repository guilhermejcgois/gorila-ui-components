import { action } from '@storybook/addon-actions';
import { storiesOf, moduleMetadata } from '@storybook/angular';
import { ButtonComponent } from './button.component';

const modMetadata = moduleMetadata({
  declarations: [ButtonComponent]
});

storiesOf('Button', module)
  .addDecorator(modMetadata)
  .add('All enabled button', () => ({
    props: {
      onClick: () => {
        action('log')('That was a good click');
      }
    },
    template: `
      <mag-button btnType="green" [disabled]="false" (click)="onClick()">
        I am a green button
      </mag-button>
      <mag-button btnType="gray" [disabled]="false" (click)="onClick()">
        I am a gray button
      </mag-button>
      <mag-button btnType="green" [disabled]="true">
        Don't click me
      </mag-button>
      <mag-button btnType="gray" [disabled]="true">
        Please, go away!
      </mag-button>
    `
  }))
  .add('Primary buttons', () => ({
    template: `
      <div class="grid">
        <div>
          <mag-button btnType="green">Label</mag-button>
          <p>Normal</p>
        </div>
        <div>
          <mag-button btnType="green" size="sm">Label</mag-button>
          <p>Small</p>
        </div>
        <div>
          <mag-button btnType="green" size="lg">Label</mag-button>
          <p>Big</p>
        </div>
      </div>
    `,
    styles: [`
    .grid {
      display: grid;
      grid-gap: 10px;
      background: white;
      grid-template-areas: "btn btn-sm btn-lg";
      width: 100%;
    }
    .grid > div {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      height: 80px;
      padding: 20px;
    }
    .grid p {
      margin-bottom: 5px;
    }
    `]
  }));

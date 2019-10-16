import { Component, Prop, Vue, Mixins } from 'vue-property-decorator';
import { elementOptions, styleHint, GenEvent, ExtractProps } from '@/helper';
import moment from 'moment';
import { DatePicker } from 'ant-design-vue';
import { AntDatePicker } from '@/main';
import { ofType } from 'vue-tsx-support';
type HelloEvent = ['hello', HelloEventPayload];

export interface HelloEventPayload {
  msg: string;
}
type HelloDragEvent = [
  'drag',
  {
    event: DragEvent;
  }
];
@Component
class HelloWorldProps extends Vue {
  @Prop({
    default: '',
    type: String,
  })
  public msg!: string;

  @Prop({
    default: '',
    type: String,
  })
  /**
   * 信息
   */
  public newMsg!: string;
}
@Component({
  components: {
    DatePicker,
  },
})
export default class HelloWorld extends Mixins(HelloWorldProps) {
  private date = moment();
  render() {
    return (
      <div
        {...{
          style: styleHint({
            width: '500px',
            margin: '200px auto 0',
            background: '#eee',
            height: '300px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            cursor: 'pointer',
            userSelect: 'none',
          }),
        }}
      >
        <a
          {...elementOptions<HTMLAnchorElement>({
            attrs: {
              // href: 'javascript:;',
              draggable: true,
            },
            style: {
              marginBottom: '10px',
            },
          })}
          onDrag={(e: DragEvent) => {
            const params: HelloDragEvent = [
              'drag',
              {
                event: e,
              },
            ];
            this.$emit(...params);
            // console.log(payload)
          }}
        >
          {this.msg}
        </a>
        <AntDatePicker
          v-model={this.date}
          v-show={true}
          {...{
            props: {
              defaultPickerValue: moment(),
              showTime: true,
              format: 'M月-DD日 hh:mm a',
            },
            attrs: {
              draggable: true,
            },
          }}
          nativeOnDrag={() => {
            console.log(`date-picker`);
          }}
        />
      </div>
    );
  }
}

export type HelloWorldEvent = GenEvent<HelloEvent> & GenEvent<HelloDragEvent>;

export const HelloWorldTsx = ofType<ExtractProps<HelloWorldProps>>().convert(
  HelloWorld
);

import { Component, Prop, Vue } from 'vue-property-decorator'
import { elementOptions } from '@/helper'

export interface HelloEventPayload {
  msg: string
}
@Component
export default class HelloWorld extends Vue {
  // public
  @Prop({
    default: '',
    type: String,
  })
  public msg!: string
  render() {
    return (
      <div
        {...elementOptions<HTMLDivElement>({
          on: {
            click: () => {
              const payload = {
                msg: 'hello',
              }
              this.$emit(`hello`, payload)
            },
          },
          style: {
            width: '500px',
            margin: '200px auto 0',
            background: '#eee',
            height: '100px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            cursor: 'pointer',
            userSelect: 'none',
          },
        })}
      >
        {this.msg}
      </div>
    )
  }
}
interface IHelloWorld extends HelloWorld {}

export type HelloWorldProps = Pick<IHelloWorld, 'msg'>
export type HelloWorldEvent = {
  hello: (param: HelloEventPayload) => any
}

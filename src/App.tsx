import { Component, Vue } from 'vue-property-decorator'
import HelloWorld, {
  HelloWorldProps,
  HelloWorldEvent,
  HelloEventPayload,
} from './components/HelloWorld'
import { componentOptions } from './helper'
@Component({
  components: {
    HelloWorld,
  },
})
export default class App extends Vue {
  render() {
    return (
      <hello-world
        {...componentOptions<
          HelloWorldProps,
          HelloWorldEvent,
          HTMLAnchorElement
        >({
          attrs: {
            id: 'App',
            draggable: true,
            translate: false,
            href: 'javascript:;',
          },
          props: {
            msg: 'hello `tsx`',
          },
          on: {
            hello: (payload: HelloEventPayload) => {
              console.log(payload)
            },
          },
          nativeOn: {
            click: (e: Event) => {
              console.log(e)
            },
          },
        })}
      />
    )
  }
}

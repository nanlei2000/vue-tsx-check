import { Component, Vue } from 'vue-property-decorator'
import HelloWorld, {
  HelloWorldEvent,
  HelloWorldTsx,
} from './components/HelloWorld'
@Component({
  components: {
    HelloWorld,
  },
})
export default class App extends Vue {
  render() {
    return (
      <HelloWorldTsx
        newMsg={'test'}
        msg={'make Vue + tsx great again!'}
        {...{
          on: {
            drag: payload => {
              console.log(payload.event)
            },
            hello: payload => {
              console.log(payload.msg)
            },
          } as HelloWorldEvent,
        }}
      />
    )
  }
}

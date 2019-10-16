import { Component, Vue, Mixins } from 'vue-property-decorator';
import HelloWorld, {
  HelloWorldEvent,
  HelloWorldTsx,
} from './components/HelloWorld';
import storeInstance, { genFetchCountFromRemote$ } from './Store';
@Component({
  components: {
    HelloWorld,
  },
})
export default class App extends Mixins() {
  render() {
    return (
      <HelloWorldTsx
        newMsg={'test'}
        msg={storeInstance.state.app.globalCount + ''}
        {...{
          on: {
            drag: payload => {
              console.log(payload.event);
            },
            hello: payload => {
              console.log(payload.msg);
            },
          } as HelloWorldEvent,
        }}
        nativeOnClick={() => {
          genFetchCountFromRemote$({ time: 2 }).subscribe();
        }}
      />
    );
  }
}

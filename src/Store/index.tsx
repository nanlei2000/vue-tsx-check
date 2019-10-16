import Vue from 'vue';
import Vuex from 'vuex';
import app, { AppState, SET_COUNT_MUT } from './modules/app';
import * as Rx from 'rxjs';
import { tap, map, catchError } from 'rxjs/operators';
interface RootState {
  app: AppState;
}

Vue.use(Vuex);

const storeInstance = new Vuex.Store<RootState>({
  modules: {
    app,
  },
  getters: undefined,
});
/**
 * 代替 action ,直接用 Observable 提交 mutation
 */
export const genDispatch$ = <T extends [string, any]>(
  mutType: T[0],
  observable: Rx.Observable<T[1] | undefined>
): Rx.Observable<void> => {
  return observable.pipe(
    catchError((error: any) => {
      console.error(`Commit ${mutType} mutation failed,\n ${String(error)}`);
      return Rx.of(undefined);
    }),
    tap(data => {
      if (!data) {
        return;
      }
      storeInstance.commit(mutType, data);
    }),
    map(() => {})
  );
};
// service
export type FetchCountFromRemoteActionPayload = {
  time: number;
};
export function request(_params: FetchCountFromRemoteActionPayload) {
  return Promise.resolve(Date.now());
}

export const genFetchCountFromRemote$ = (
  params: FetchCountFromRemoteActionPayload
) => {
  return genDispatch$<SET_COUNT_MUT>('SET_COUNT', Rx.from(request(params)));
};

export default storeInstance;

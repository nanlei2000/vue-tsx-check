import Vue from 'vue';
import Vuex from 'vuex';
import app, { AppState, SET_COUNT_MUT } from './modules/app';
import * as Rx from 'rxjs';
import { tap, map } from 'rxjs/operators';
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
  observable: Rx.Observable<T[1]>
): Rx.Observable<void> => {
  return observable.pipe(
    tap(data => {
      storeInstance.commit(mutType, data);
    }),
    map(() => {})
  );
};
// service
export type FetchCountParams = {
  time: number;
};
export function request$(_params: FetchCountParams): Rx.Observable<number> {
  return Rx.from(Promise.resolve(Date.now()));
}

export const genFetchCount$ = (params: FetchCountParams) => {
  return genDispatch$<SET_COUNT_MUT>('SET_COUNT', request$(params));
};

export default storeInstance;

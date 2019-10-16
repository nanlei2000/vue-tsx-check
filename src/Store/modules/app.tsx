export interface AppState {
  globalCount: number;
}
const appState: AppState = {
  globalCount: 0,
};
const SET_COUNT = 'SET_COUNT';
export type SET_COUNT_MUT = [typeof SET_COUNT, number];

export const app = {
  state: appState,
  mutations: {
    [SET_COUNT]: (state: AppState, num: SET_COUNT_MUT[1]): void => {
      state.globalCount = num;
    },
  },
};

export default app;

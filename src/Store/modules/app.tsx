import { ActionContext, DispatchOptions, Dispatch } from 'vuex'
import App from '@/App'
import Store from '@/Store/index'
export interface AppState {
  globalCount: number
}
type AppStateContext = ActionContext<AppState, unknown>
const appState: AppState = {
  globalCount: 0,
}
const SET_COUNT = 'SET_COUNT'
type SET_COUNT_MUT = [typeof SET_COUNT, number]
const FetchCountFromRemote = 'FetchCountFromRemote'
type FetchCountFromRemoteActionPayload = {
  time: number
}
export type FetchCountFromRemoteAction = {
  type: typeof FetchCountFromRemote
  payload: FetchCountFromRemoteActionPayload
}
export const app = {
  state: appState,
  mutations: {
    [SET_COUNT]: (state: AppState, num: SET_COUNT_MUT[1]): void => {
      state.globalCount = num
    },
  },
  actions: {
    [FetchCountFromRemote](
      ctx: AppStateContext,
      params: FetchCountFromRemoteActionPayload
    ) {
      return request(params).then(data => {
        const setCountMut: SET_COUNT_MUT = ['SET_COUNT', data]
        ctx.commit(...setCountMut)
      })
    },
  },
}

function request(params: FetchCountFromRemoteActionPayload) {
  return Promise.resolve(params.time + 1)
}

export default app

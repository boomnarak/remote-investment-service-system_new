import { User } from '../models/user.model'
import { ArticleAction, ArticleActionType } from '../actions/user.actions'

const initialState: Array<User> = [
  {
    userName: 'test',
    branhCode: '9900',
    groupCode: '006'
  }
]

export function ArticleReducer(
  state: Array<User> = initialState,
  action: ArticleAction
) {
  switch (action.type) {
    case ArticleActionType.ADD_ITEM:
      return [...state, action.payload]
    default:
      return state
  }
}

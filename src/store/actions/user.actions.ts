import { Action } from '@ngrx/store'
import { User } from '../models/user.model'

export enum ArticleActionType {
  ADD_ITEM = '[ARTICLE] Add ARTICLE'
}

export class AddArticleAction implements Action {
  readonly type = ArticleActionType.ADD_ITEM
  constructor(public payload: User) {}
}

export type ArticleAction = AddArticleAction

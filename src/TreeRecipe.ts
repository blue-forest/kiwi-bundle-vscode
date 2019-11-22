import { TreeObject } from "./TreeObject"
import { RecipeQuery } from "./RecipeQuery"

export interface VSCodeTreeData<LabelType = string|RecipeQuery> {
  label: LabelType
}

export type VSCodeTreeObject = TreeObject<VSCodeTreeData>

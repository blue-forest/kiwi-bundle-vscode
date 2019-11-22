import { TreeObject } from "../../../../../../dropin/studio/vscode/v1/repositories/dropin-studio-vscode/src/outside_modules/recipes/TreeObject"
import { RecipeQuery } from "../../../../../../dropin/studio/vscode/v1/repositories/dropin-studio-vscode/src/outside_modules/recipes/RecipeQuery"

export interface VSCodeTreeData<LabelType = string|RecipeQuery> {
  label: LabelType
}

export type VSCodeTreeObject = TreeObject<VSCodeTreeData>

import { DbModeledColumnsDefinition } from "@database/schemas/db-modeled-columns-definition.type";
import { FoodEssentialsModel } from "@shared/models";

type ColumnsModel = DbModeledColumnsDefinition<FoodEssentialsModel>;

export const FOOD_ESSENTIALS_DB_MODEL = {} satisfies ColumnsModel;

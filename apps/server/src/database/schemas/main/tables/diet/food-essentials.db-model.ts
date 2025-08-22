import { DbModeledColumnsDefinition } from "@database/schemas/db-modeled-columns-definition.type";
import { FoodEssentialsModel } from "@shared/models";
import { integer } from "drizzle-orm/pg-core";

type ColumnsModel = DbModeledColumnsDefinition<FoodEssentialsModel>;

export const FOOD_ESSENTIALS_DB_MODEL = {
	energy: integer(),

	// Fats (g)
	fats: integer(),
	saturatedFats: integer(),

	// Carbohydrates (g)
	carbohydrates: integer(),
	sugars: integer(),

	// Other (g)
	fibers: integer(),
	proteins: integer(),
	salt: integer(),
} satisfies ColumnsModel;

import type { DbModeledColumnsDefinition } from "@database/schemas/db-modeled-columns-definition.type";
import { dietSchema } from "@database/schemas/main.schema";
import { FOOD_ESSENTIALS_DB_MODEL } from "@database/schemas/main/tables/diet/food-essentials.db-model";
import { FOOD_MODEL_VALUES, type FoodModel } from "@shared/models";
import { integer, varchar } from "drizzle-orm/pg-core";

type ColumnsModel = DbModeledColumnsDefinition<FoodModel>;

export const foodTable = dietSchema.table("food", {
	id: integer().generatedAlwaysAsIdentity().primaryKey(),
	name: varchar({ length: FOOD_MODEL_VALUES.name.maxLength }).notNull(),

	...FOOD_ESSENTIALS_DB_MODEL,
} satisfies ColumnsModel);

export type FoodInsert = typeof foodTable.$inferInsert;
export type FoodSelect = typeof foodTable.$inferSelect;
export type FoodUpdate = Partial<FoodInsert>;

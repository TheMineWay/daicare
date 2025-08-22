import { timestamps } from "@database/common/timestamps";
import type { DbModeledColumnsDefinition } from "@database/schemas/db-modeled-columns-definition.type";
import {
	dietSchema,
	dishTable,
	foodTable,
	mealTable,
} from "@database/schemas/main.schema";
import { FOOD_ESSENTIALS_DB_MODEL } from "@database/schemas/main/tables/diet/food-essentials.db-model";
import type { MealFoodModel } from "@shared/models";
import { integer } from "drizzle-orm/pg-core";

type ColumnsModel = DbModeledColumnsDefinition<MealFoodModel>;

export const mealFoodTable = dietSchema.table("meal_food", {
	id: integer().generatedAlwaysAsIdentity().primaryKey(),
	mealId: integer()
		.notNull()
		.references(() => mealTable.id, { onDelete: "cascade" }),
	amount: integer().notNull(),

	// Food essentials
	...FOOD_ESSENTIALS_DB_MODEL,

	// Links
	foodId: integer().references(() => foodTable.id, { onDelete: "set null" }),
	dishId: integer().references(() => dishTable.id, { onDelete: "set null" }),

	// Timestamps
	...timestamps,
} satisfies ColumnsModel);

export type MealFoodSelect = typeof mealFoodTable.$inferSelect;
export type MealFoodInsert = typeof mealFoodTable.$inferInsert;
export type MealFoodUpdate = Partial<MealFoodInsert>;

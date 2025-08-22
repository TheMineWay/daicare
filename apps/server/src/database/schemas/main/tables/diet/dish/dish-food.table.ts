import {
	dietSchema,
	dishTable,
	foodTable,
} from "@database/schemas/main.schema";
import { integer } from "drizzle-orm/pg-core";

export const dishFoodTable = dietSchema.table("dish_food", {
	id: integer().generatedAlwaysAsIdentity().primaryKey(),
	dishId: integer()
		.notNull()
		.references(() => dishTable.id, { onDelete: "cascade" }),
	foodId: integer()
		.notNull()
		.references(() => foodTable.id, { onDelete: "cascade" }),
	amount: integer().notNull(),
});

export type DishFoodSelect = typeof dishFoodTable.$inferSelect;
export type DishFoodInsert = typeof dishFoodTable.$inferInsert;
export type DishFoodUpdate = Partial<DishFoodInsert>;

import { timestamps } from "@database/common/timestamps";
import type { DbModeledColumnsDefinition } from "@database/schemas/db-modeled-columns-definition.type";
import { dietSchema, userTable } from "@database/schemas/main.schema";
import type { MealModel } from "@shared/models";
import { integer, timestamp } from "drizzle-orm/pg-core";

type ColumnsModel = DbModeledColumnsDefinition<MealModel>;

/**
 * Meal table schema
 *
 * Contains information about every user meal. A meal is composed of multiple 'food' in different amounts.
 */
export const mealTable = dietSchema.table("meal", {
	id: integer().generatedAlwaysAsIdentity().primaryKey(),
	userId: integer()
		.notNull()
		.references(() => userTable.id),

	mealTime: timestamp().defaultNow().notNull(),
	...timestamps,
} satisfies ColumnsModel);

export type MealSelect = typeof mealTable.$inferSelect;
export type MealInsert = typeof mealTable.$inferInsert;
export type MealUpdate = Partial<MealInsert>;

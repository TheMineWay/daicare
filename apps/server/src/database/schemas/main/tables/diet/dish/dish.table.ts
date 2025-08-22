import { timestamps } from "@database/common/timestamps";
import type { DbModeledColumnsDefinition } from "@database/schemas/db-modeled-columns-definition.type";
import { dietSchema, userTable } from "@database/schemas/main.schema";
import { DISH_MODEL_VALUES, type DishModel } from "@shared/models";
import { integer, varchar } from "drizzle-orm/pg-core";

type ColumnsModel = DbModeledColumnsDefinition<DishModel>;

export const dishTable = dietSchema.table("dishes", {
	id: integer().generatedAlwaysAsIdentity().primaryKey(),
	userId: integer()
		.notNull()
		.references(() => userTable.id),
	name: varchar({ length: DISH_MODEL_VALUES.name.maxLength }).notNull(),
	description: varchar({ length: DISH_MODEL_VALUES.description.maxLength }),

	...timestamps,
} satisfies ColumnsModel);

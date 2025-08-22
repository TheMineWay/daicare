import { timestamps } from "@database/common/timestamps";
import type { DbModeledColumnsDefinition } from "@database/schemas/db-modeled-columns-definition.type";
import { identitySchema } from "@database/schemas/main/tables/identity/identity.schema";
import type { UserModel } from "@shared/models";
import { USER_MODEL_VALUES } from "@shared/models";
import { integer, varchar } from "drizzle-orm/pg-core";

type ColumnsModel = DbModeledColumnsDefinition<UserModel>;

export const userTable = identitySchema.table("users", {
	id: integer().generatedAlwaysAsIdentity().primaryKey(),
	// Code is the unique identifier that comes from the OIDC provider
	code: varchar({ length: USER_MODEL_VALUES.code.maxLength })
		.unique()
		.notNull(),

	// Metadata (should stay in sync with the OIDC provider directory info)
	name: varchar({ length: USER_MODEL_VALUES.name.maxLength }).notNull(),
	username: varchar({ length: USER_MODEL_VALUES.username.maxLength }).notNull(),
	email: varchar({ length: USER_MODEL_VALUES.email.maxLength }),

	// Timestamps
	...timestamps,
} satisfies ColumnsModel);

export type UserInsert = typeof userTable.$inferInsert;
export type UserSelect = typeof userTable.$inferSelect;
export type UserUpdate = Partial<UserInsert>;

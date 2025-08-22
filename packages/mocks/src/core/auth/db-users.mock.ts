import type { DbUserModel } from "@shared/models";

/**
 * Mock database user data for testing database operations.
 * Contains sample database user objects with fixed timestamps for consistent testing.
 */
export const DB_USERS_MOCK = {
	"john.doe": {
		id: 1,
		code: "john123",
		name: "John Doe",
		username: "john.doe",
		createdAt: new Date("2024-01-01T00:00:00Z"),
		updatedAt: new Date("2024-01-01T00:00:00Z"),
		email: null,
	},
	"alice.smith": {
		id: 2,
		code: "alice456",
		name: "Alice Smith",
		username: "alice.smith",
		createdAt: new Date("2024-02-01T12:30:00Z"),
		updatedAt: new Date("2024-02-01T12:30:00Z"),
		email: null,
	},
} satisfies Record<string, DbUserModel>;

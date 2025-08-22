import z from "zod";

/**
 * Factory function that creates a Zod schema for paginated API responses.
 * Wraps any given schema with pagination metadata.
 */
export const getPaginatedResponse = <T extends z.ZodType>(schema: T) =>
	z.object({
		total: z.number().default(0),
		items: z.array(schema),
	});

export type PaginatedResponse<T> = {
	total: number;
	items: T[];
};

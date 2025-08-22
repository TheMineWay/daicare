import { DATE_SCHEMA } from "@/utils/date.model";
import { TIMESTAMPS_SCHEMA } from "@/utils/timestamps.model";
import z from "zod";

export const MEAL_SCHEMA = z.object({
	id: z.number().int().nonnegative(),
	userId: z.number().int().nonnegative(),
	mealTime: DATE_SCHEMA,

	...TIMESTAMPS_SCHEMA.shape,
});

export type MealModel = z.infer<typeof MEAL_SCHEMA>;

/* Create */
export const MEAL_CREATE_SCHEMA = MEAL_SCHEMA.omit({
	id: true,
	createdAt: true,
	updatedAt: true,
});
export type MealCreateModel = z.infer<typeof MEAL_CREATE_SCHEMA>;

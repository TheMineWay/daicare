import { TIMESTAMPS_SCHEMA } from "@/utils/timestamps.model";
import z from "zod";

export const MEAL_FOOD_SCHEMA = z.object({
	id: z.number().int().positive(),
	mealId: z.number().int().positive(),
	amount: z.number().positive(), // (g)

	// Optional links
	foodId: z.number().int().positive().nullable(),
	dishId: z.number().int().positive().nullable(),

	...TIMESTAMPS_SCHEMA.shape,
});

export type MealFoodModel = z.infer<typeof MEAL_FOOD_SCHEMA>;

/* Create */
export const MEAL_FOOD_CREATE_SCHEMA = MEAL_FOOD_SCHEMA.omit({
	id: true,
	createdAt: true,
	updatedAt: true,
});
export type MealFoodCreateModel = z.infer<typeof MEAL_FOOD_CREATE_SCHEMA>;

import { FOOD_ESSENTIALS_SCHEMA } from "@/diet/food-essentials.model";
import type { ModelValues } from "@ts-types/model-values.type";
import z from "zod";

export const FOOD_MODEL_VALUES = {
	name: {
		maxLength: 128,
	},
} satisfies ModelValues;

export const FOOD_SCHEMA = z.object({
	id: z.number().int().nonnegative(),
	name: z.string().nonempty().max(FOOD_MODEL_VALUES.name.maxLength),

	// Food essentials data
	...FOOD_ESSENTIALS_SCHEMA.shape,
});

export type FoodModel = z.infer<typeof FOOD_SCHEMA>;

/* Create */
export const FOOD_CREATE_SCHEMA = FOOD_SCHEMA.omit({ id: true });
export type FoodCreateModel = z.infer<typeof FOOD_CREATE_SCHEMA>;

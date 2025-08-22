import { TIMESTAMPS_SCHEMA } from "@/utils/timestamps.model";
import type { ModelValues } from "@ts-types/model-values.type";
import z from "zod";

export const DISH_MODEL_VALUES = {
	name: {
		maxLength: 128,
	},
	description: {
		maxLength: 256,
	},
} satisfies ModelValues;

export const DISH_SCHEMA = z.object({
	id: z.number().int().positive(),
	userId: z.number().int().positive(),
	name: z.string().nonempty().max(DISH_MODEL_VALUES.name.maxLength),
	description: z
		.string()
		.max(DISH_MODEL_VALUES.description.maxLength)
		.nullable(),

	...TIMESTAMPS_SCHEMA.shape,
});

export type DishModel = z.infer<typeof DISH_SCHEMA>;

/* Create */
export const DISH_CREATE_SCHEMA = DISH_SCHEMA.omit({
	id: true,
	createdAt: true,
	updatedAt: true,
});
export type DishCreateModel = z.infer<typeof DISH_CREATE_SCHEMA>;

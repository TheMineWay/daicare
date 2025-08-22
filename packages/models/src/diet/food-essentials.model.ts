import z from "zod";

/**
 * Food essentials include all metadata food can contain
 */
export const FOOD_ESSENTIALS_SCHEMA = z.object({
	energy: z.number().min(0).nullable(), // In kcal

	// Fats (g)
	fats: z.number().min(0).nullable(),
	saturatedFats: z.number().min(0).nullable(),

	// Carbohydrates (g)
	carbohydrates: z.number().min(0).nullable(),
	sugars: z.number().min(0).nullable(),

	// Other (g)
	fibers: z.number().min(0).nullable(),
	proteins: z.number().min(0).nullable(),
	salt: z.number().min(0).nullable(),
});

export type FoodEssentialsModel = z.infer<typeof FOOD_ESSENTIALS_SCHEMA>;

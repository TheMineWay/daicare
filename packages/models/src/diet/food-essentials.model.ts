import z from "zod";

/**
 * Food essentials include all metadata food can contain
 */
export const FOOD_ESSENTIALS_SCHEMA = z.object({});

export type FoodEssentialsModel = z.infer<typeof FOOD_ESSENTIALS_SCHEMA>;

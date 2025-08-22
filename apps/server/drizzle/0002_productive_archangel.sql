CREATE TABLE "diet"."dish_food" (
	"id" integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "diet"."dish_food_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1),
	"dishId" integer NOT NULL,
	"foodId" integer NOT NULL,
	"amount" integer NOT NULL
);
--> statement-breakpoint
CREATE TABLE "diet"."dishes" (
	"id" integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "diet"."dishes_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1),
	"userId" integer NOT NULL,
	"name" varchar(128) NOT NULL,
	"description" varchar(256),
	"createdAt" timestamp DEFAULT now() NOT NULL,
	"updatedAt" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "diet"."meal_food" (
	"id" integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "diet"."meal_food_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1),
	"mealId" integer NOT NULL,
	"amount" integer NOT NULL,
	"energy" integer,
	"fats" integer,
	"saturatedFats" integer,
	"carbohydrates" integer,
	"sugars" integer,
	"fibers" integer,
	"proteins" integer,
	"salt" integer,
	"foodId" integer,
	"dishId" integer,
	"createdAt" timestamp DEFAULT now() NOT NULL,
	"updatedAt" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
ALTER TABLE "diet"."food" ADD COLUMN "energy" integer;--> statement-breakpoint
ALTER TABLE "diet"."food" ADD COLUMN "fats" integer;--> statement-breakpoint
ALTER TABLE "diet"."food" ADD COLUMN "saturatedFats" integer;--> statement-breakpoint
ALTER TABLE "diet"."food" ADD COLUMN "carbohydrates" integer;--> statement-breakpoint
ALTER TABLE "diet"."food" ADD COLUMN "sugars" integer;--> statement-breakpoint
ALTER TABLE "diet"."food" ADD COLUMN "fibers" integer;--> statement-breakpoint
ALTER TABLE "diet"."food" ADD COLUMN "proteins" integer;--> statement-breakpoint
ALTER TABLE "diet"."food" ADD COLUMN "salt" integer;--> statement-breakpoint
ALTER TABLE "diet"."dish_food" ADD CONSTRAINT "dish_food_dishId_dishes_id_fk" FOREIGN KEY ("dishId") REFERENCES "diet"."dishes"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "diet"."dish_food" ADD CONSTRAINT "dish_food_foodId_food_id_fk" FOREIGN KEY ("foodId") REFERENCES "diet"."food"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "diet"."dishes" ADD CONSTRAINT "dishes_userId_users_id_fk" FOREIGN KEY ("userId") REFERENCES "identity"."users"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "diet"."meal_food" ADD CONSTRAINT "meal_food_mealId_meal_id_fk" FOREIGN KEY ("mealId") REFERENCES "diet"."meal"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "diet"."meal_food" ADD CONSTRAINT "meal_food_foodId_food_id_fk" FOREIGN KEY ("foodId") REFERENCES "diet"."food"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "diet"."meal_food" ADD CONSTRAINT "meal_food_dishId_dishes_id_fk" FOREIGN KEY ("dishId") REFERENCES "diet"."dishes"("id") ON DELETE set null ON UPDATE no action;
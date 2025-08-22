CREATE SCHEMA "diet";
--> statement-breakpoint
CREATE TABLE "diet"."food" (
	"id" integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "diet"."food_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1),
	"name" varchar(128) NOT NULL
);
--> statement-breakpoint
CREATE TABLE "diet"."meal" (
	"id" integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "diet"."meal_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1),
	"userId" integer NOT NULL,
	"mealTime" timestamp DEFAULT now() NOT NULL,
	"createdAt" timestamp DEFAULT now() NOT NULL,
	"updatedAt" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
ALTER TABLE "diet"."meal" ADD CONSTRAINT "meal_userId_users_id_fk" FOREIGN KEY ("userId") REFERENCES "identity"."users"("id") ON DELETE no action ON UPDATE no action;
import superjson from "superjson";
import { createRouter } from "../createRouter";
import { testRouter } from "./tests";


export const appRouter = createRouter()
  .transformer(superjson)
  .merge("tests.", testRouter);

// export type definition of API
export type AppRouter = typeof appRouter;
import * as trpc from "@trpc/server";
import * as trpcNext from "@trpc/server/adapters/next";

// The app's context - is generated for each incoming request
export async function createContext(opts?: trpcNext.CreateNextContextOptions) {
  return { token: opts?.req.cookies["poll-token"], req: opts?.req };
}

export type Context = trpc.inferAsyncReturnType<typeof createContext>;


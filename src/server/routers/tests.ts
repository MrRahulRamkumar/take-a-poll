import { z } from 'zod';
import { createRouter } from '../createRouter';

export const testRouter = createRouter()
  .query('hello', {
    
    input: z.object({ text: z.string().nullish() }).nullish(),
    
    resolve({ input, ctx  }) {
        console.log(ctx.token)
        console.log(input)
        return {
          greeting: `hello ${input?.text ?? 'world'}`,
        };
    },
  });
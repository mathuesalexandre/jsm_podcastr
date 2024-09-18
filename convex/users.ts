import { v } from "convex/values";
import { internalMutation } from "./_generated/server";

export const createUser = internalMutation({
  args: {
    clerkId: v.string(),
    email: v.string(),
    imageUrl: v.string(),
    name: v.string(),
  },
  handler: async (ctx, args) => {
    await ctx.db.insert('user', {
      clerkId: args.clerkId,
      email: args.email,
      imgURL: args.imageUrl,
      name: args.name,
    });
  },
});

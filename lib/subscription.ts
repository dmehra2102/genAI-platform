import { auth } from "@clerk/nextjs";
import prismadb from "./prismadb";

const DAY_IN_MS = 86_400_000;

export const checkSubscription = async () => {
  const { userId } = auth();

  if (!userId) {
    return false;
  }

  const userSubscrption = await prismadb.userScubscription.findUnique({
    where: { userId },
    select: {
      stripeSubscriptionId: true,
      stripeCustomerId: true,
      stripeCurrentPeriodEnd: true,
      stripePriceId: true,
    },
  });

  if (!userSubscrption) {
    return false;
  }

  const isValid =
    userSubscrption.stripePriceId &&
    userSubscrption.stripeCurrentPeriodEnd.getTime()! + DAY_IN_MS > Date.now();

  return !!true;
};

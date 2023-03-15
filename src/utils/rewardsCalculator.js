const REWARD_RATE_ABOVE_100 = 2;
const REWARD_RATE_BETWEEN_50_AND_100 = 1;
const MIN_AMOUNT_FOR_ABOVE_100_REWARDS = 100;
const MIN_AMOUNT_FOR_BETWEEN_50_AND_100_REWARDS = 50;

function calculateRewardPoints(transactions) {
  const monthlyRewards = {};

  transactions.forEach((transaction) => {
    const { customerId, timestamp, amount } = transaction;
    const month = getMonthFromTimestamp(timestamp);

    if (!monthlyRewards[customerId]) {
      monthlyRewards[customerId] = {
        "1": 0,
        "2": 0,
        "3": 0,
      };
    }

    let above100Amount = 0;
    let between50And100Amount = 0;

    if (amount > MIN_AMOUNT_FOR_ABOVE_100_REWARDS) {
      above100Amount = amount - MIN_AMOUNT_FOR_ABOVE_100_REWARDS;
    }

    if (
      amount > MIN_AMOUNT_FOR_BETWEEN_50_AND_100_REWARDS &&
      amount <= MIN_AMOUNT_FOR_ABOVE_100_REWARDS
    ) {
      between50And100Amount = amount - MIN_AMOUNT_FOR_BETWEEN_50_AND_100_REWARDS;
    }

    const above100Points = above100Amount * REWARD_RATE_ABOVE_100;
    const between50And100Points = between50And100Amount * REWARD_RATE_BETWEEN_50_AND_100;
    const totalPoints = above100Points + between50And100Points;

    monthlyRewards[customerId][month] += totalPoints;
  });

  return monthlyRewards;
}

function getMonthFromTimestamp(timestamp) {
  const date = new Date(timestamp);
  return date.getMonth() + 1;
}

export { calculateRewardPoints };
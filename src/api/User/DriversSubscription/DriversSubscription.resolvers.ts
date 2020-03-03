import User from "../../../entities/User";
import { withFilter } from "graphql-yoga";

const resolvers = {
  Subscription: {
    DriversSubscription: {
      // withFilter 기능을 이용하면 payload를 받아서 이 payload가 사용자에게 전달될지 선택할 수 있다.
      subscribe: withFilter(
        (_, __, { pubSub }) => pubSub.asyncIterator("driverUpdate"),
        (payload, _, { context }) => {
          const user: User = context.currentUser;
          const {
            DriversSubscription: {
              lastLat: driverLastLat,
              lastLng: driverLastLng
            }
          } = payload;
          const { lastLat: userLastLat, lastLng: userLastLng } = user;
          return (
            driverLastLat >= userLastLat - 0.05 &&
            driverLastLat <= userLastLat + 0.05 &&
            driverLastLng >= userLastLng - 0.05 &&
            driverLastLng <= userLastLng + 0.05
          );
        }
      )
    }
  }
};

export default resolvers;

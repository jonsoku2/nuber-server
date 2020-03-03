"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var graphql_yoga_1 = require("graphql-yoga");
var resolvers = {
    Subscription: {
        DriversSubscription: {
            // withFilter 기능을 이용하면 payload를 받아서 이 payload가 사용자에게 전달될지 선택할 수 있다.
            subscribe: graphql_yoga_1.withFilter(function (_, __, _a) {
                var pubSub = _a.pubSub;
                return pubSub.asyncIterator("driverUpdate");
            }, function (payload, _, _a) {
                var context = _a.context;
                var user = context.currentUser;
                var _b = payload.DriversSubscription, driverLastLat = _b.lastLat, driverLastLng = _b.lastLng;
                var userLastLat = user.lastLat, userLastLng = user.lastLng;
                return (driverLastLat >= userLastLat - 0.05 &&
                    driverLastLat <= userLastLat + 0.05 &&
                    driverLastLng >= userLastLng - 0.05 &&
                    driverLastLng <= userLastLng + 0.05);
            })
        }
    }
};
exports.default = resolvers;
//# sourceMappingURL=DriversSubscription.resolvers.js.map
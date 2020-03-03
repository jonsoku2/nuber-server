import Verification from '../../../entities/Verification';
import { sendVerificationSMS } from '../../../utils/sendSMS';
import { StartPhoneVerificationMutationArgs, StartPhoneVerificationResponse } from './../../../types/graph.d';
import { Resolvers } from './../../../types/resolvers.d';

const resolvers: Resolvers = {
  Mutation: {
    StartPhoneVerification: async (
      _,
      args: StartPhoneVerificationMutationArgs
    ): Promise<StartPhoneVerificationResponse> => {
      const { phoneNumber } = args;
      try {
        const existingVerification = await Verification.findOne({
          payload: phoneNumber
        });
        if (existingVerification) {
          existingVerification.remove();
        }
        const newVerification = await Verification.create({
          payload: phoneNumber,
          target: "PHONE"
        }).save();
        //  console.log(newVerification);
        //  Verification {
        //     target: 'PHONE',
        //     payload: '+818077083832',
        //     key: '730',
        //     id: 2,
        //     createdAt: 2020-02-23T15:13:59.833Z,
        //     updatedAt: 2020-02-23T15:13:59.833Z
        //   }
        await sendVerificationSMS(newVerification.payload, newVerification.key);
        return {
          ok: true,
          error: null
        };
      } catch (error) {
        return {
          ok: false,
          error: error.message
        };
      }
    }
  }
};

export default resolvers;

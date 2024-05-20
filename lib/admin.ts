import {auth} from "@clerk/nextjs";

const adminIds = [
    "user_2e5Qc9QLMPqXEhIvBTpDMbopz3j"
];

export const isAdmin = () => {
    const {userId} = auth();

    if (!userId) {
        return false;
    }

    return adminIds.indexOf(userId) !== -1;
}
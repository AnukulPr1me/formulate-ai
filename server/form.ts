"use strict";

import { currentUser } from "@clerk/nextjs/server";

class UserNotFoundError extends Error {}

export async function getFormStats() {
    const user = await currentUser();
    if (!user) {
        throw new UserNotFoundError();
    }
}
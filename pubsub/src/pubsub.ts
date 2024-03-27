type PubSub<T> = {
    subscribe: (subscriberFn: (v: T) => void) => void;
    set: (v: T) => void;
    get: () => T;
};

export function createPubSub<T>(): PubSub<T> {
    // ✅ write your implementation here

    // This return statement is to prevent typescript from complaining.
    // As the typing dictates: you should eventually return an object conforming to the PubSub<T> type.
    return undefined as any;
}

import { expect, test, describe } from 'bun:test';
import { createPubSub } from './pubsub';

describe('createPubSub', () => {

    // ✅ Make all these tests pass by writing your publish-subscribe implementation.
    // Run the test by running the command `bun test` inside the `./pubsub` directory.
    // Whenever you think your implementation will pass a test, remove ".todo" from the test definition.
    // This will give you more verbose output should you need to debug.

    test.todo('changes can be subscribed to', () => {
        const p = createPubSub(0);
        expect(() => p.subscribe(() => { })).not.toThrow();
    });

    test.todo('value is settable', () => {
        const p = createPubSub(0);
        expect(() => p.set(42)).not.toThrow();
    });

    test.todo('value is gettable', () => {
        const p = createPubSub(0);
        p.set(42);
        expect(p.get()).toBe(42);
    });

    test.todo('initial value is respected', () => {
        const p = createPubSub(42);
        expect(p.get()).toBe(42);
    });

    test.todo('subscribers are called on set', () => {
        const p = createPubSub(0);
        let v1 = 0;
        let v2 = 0;
        let v3 = 0;
        p.subscribe(v => v1 = v);
        p.subscribe(v => v2 = v);
        p.subscribe(v => v3 = v);
        p.set(42);
        expect(v1).toBe(42);
        expect(v2).toBe(42);
        expect(v3).toBe(42);
        p.set(7);
        expect(v1).toBe(7);
        expect(v2).toBe(7);
        expect(v3).toBe(7);
    });

    // 🚨 EXTRA EXERCISE:
    // Make the `subscribe(...)` function return a function to unsubscribe.
    // FIRST, modify the `PubSub<T>` type so the subscribe function should return an unsubscribe function.
    // Afterwards you should not get any type errors in your editor in the tests below.
    // THEN, finalize your implementation.

    test.todo('EXTRA: subscribers can unsubscribe', () => {
        const p = createPubSub(0);
        const s = p.subscribe(() => { });
        expect(() => s.unsubscribe()).not.toThrow();
    });

    test.todo('EXTRA: unsubscribing ensures subscriber does not get called on set', () => {
        const p = createPubSub(0);
        let v1 = 0;
        let v2 = 0;
        let v3 = 0;
        const s1 = p.subscribe(v => v1 = v);
        const s2 = p.subscribe(v => v2 = v);
        const s3 = p.subscribe(v => v3 = v);
        p.set(42);
        s1.unsubscribe();
        s3.unsubscribe();
        p.set(7);
        expect(v1).toBe(42);
        expect(v2).toBe(7);
        expect(v3).toBe(42);
        s2.unsubscribe();
        p.set(3);
        expect(v1).toBe(42);
        expect(v2).toBe(7);
        expect(v3).toBe(42);
    });
});

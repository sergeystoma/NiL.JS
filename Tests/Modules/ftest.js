var t = {
    get a() {
        return 1;
    }
}

console.asserta(() => ({ [Symbol.for("a")]: t.a }));
import util from 'node:util';

export const text: string = 'Hello, TypeScript!';

console.log(util.styleText(['bold', 'red'], text));

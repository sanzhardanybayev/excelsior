/* @flow */

function foo(x: ?number): number {
  if (x) {
    return x;
  }
  return x;
}

foo();

// 类成员

function T (target, name, descriptor) {
  console.log(target, name, descriptor);
  return descriptor;
}

class Test {

  @T
  test () {

  }
}
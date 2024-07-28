
const a = {
  call() {
    console.log('a');
  }
}

const b = {
  call() {
    console.log('b');
  }
}

const c = Object.assign(a, b);
c.call()
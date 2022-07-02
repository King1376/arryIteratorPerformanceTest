const LENGTH = 100_000_000;
const list = new Array(LENGTH).fill(1);
function nativeFor(list) {
  console.time("nativeFor");
  for (let i = 0; i < list.length; i++) {
    // list[i] += ''
  }
  console.timeEnd("nativeFor");
}

function nativeWhile(list) {
  let i = 0;
  console.time("nativeWhile");
  while (i < list.length) {
    i++;
  }
  console.timeEnd("nativeWhile");
}

function nativeForOf(list) {
  console.time("nativeForOf");
  for (let item of list) {}
  console.timeEnd("nativeForOf");
}

function nativeForIn(list) {
  console.time("nativeForIn");
  for (let index in list) {}
  console.timeEnd("nativeForIn");
}

function nativeForEach(list) {
  console.time("nativeForEach");
  list.forEach((item) => {});
  console.timeEnd("nativeForEach");
}

function nativeMap(list) {
  console.time("nativeMap");
  list.map((item) => item);
  console.timeEnd("nativeMap");
}
function nativeFilter(list) {
  console.time("nativeFilter");
  list.filter((item) => true);
  console.timeEnd("nativeFilter");
}
function nativeReduce(list) {
  console.time("nativeReduce");
  list.reduce((acc, item) => {}, []);
  console.timeEnd("nativeReduce");
}

nativeFor(list);
nativeWhile(list);
nativeForOf(list);
nativeForEach(list);
nativeMap(list);
nativeFilter(list);
nativeReduce(list);
nativeForIn(list);

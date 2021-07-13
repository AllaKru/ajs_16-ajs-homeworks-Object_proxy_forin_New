export default function orderByProps(obj, arr) {
  const arrayExceptions = [];// массив исключений
  const arrCommon = [];// общий массив

  // eslint-disable-next-line guard-for-in
  for (const prop in obj) {
    // if (Object.prototype.hasOwnProperty.call(obj, prop)) {
    const keyValue = { key: prop, value: obj[prop] };
    const index = arr.indexOf(prop);

    if (index === -1) {
      arrCommon.push(keyValue);
      arrCommon.sort((a, b) => (a.key > b.key ? 1 : -1));
      // console.log(arrayExceptions);
    } else {
      arrayExceptions[index] = keyValue;
    }
    // const arrConcat = arrCommon.concat(arrayExceptions); второй вариант
    // console.log(arrConcat);
    // }
  }
  const arrConnected = [...arrayExceptions, ...arrCommon];
  //   console.log(arrConnected);
  return arrConnected;
}

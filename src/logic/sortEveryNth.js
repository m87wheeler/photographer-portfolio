export const sortEveryNth = (arr, n) => {
  let newArr = []
  let base = 0

  const doWhile = () => {
    while (base < n) {
      for (let i = base; i < arr.length; i += n) {
        newArr.push(arr[i])
      }
      base += 1
      doWhile()
    }
  }
  if (base < n) {
    doWhile()
  }
  return newArr
}

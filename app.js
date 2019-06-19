function isMerge(s, part1, part2) {
  let element = s.split('');
  let one = part1.split('');
  let two = part2.split('');
  for (let i = 0; i < element.length; i++) {
    if (element[i] === one[0]) {
      one.splice(0,1);
    } else if (element[i] === two[0]) {
      two.splice(0,1);
    } else {
      return false;
    }
  }
  return true;
}

console.log(isMerge('codewars', 'cdw', 'oears' ))

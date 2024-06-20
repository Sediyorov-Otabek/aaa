{
  // { while 1
  function son(a, b) {
    let i = 0;
    while (b <= a) {
      i++;
      a -= b;
    }
    console.log(a);
  }
  console.log(son(50, 7));
}
{
  // while 2
  function son(a, b) {
    let i = 0;
    while (b <= a) {
      i++;
      a -= b;
    }

    console.log(i);
  }
  console.log(son(50, 7));
}
{
  // while 3
  function son(n, k) {
    let i = 0;
    while (n <= k) {
      i++;
      k -= n;
    }
    console.log(` ${k} qoldiq`);
    console.log(`${i} butun`);
  }
  console.log(son(5, 78));
}

// 3 turdagi masalalar

{
  // 1 masala
  function son(array) {
    let musbat = 0,
      manfiy = 0;
    for (let i = 0; i < array.length; i++) {
      if (array[i] > 0) {
        musbat += array[i];
      } else {
        manfiy += array[i];
      }
    }
    return ` ${musbat} ${manfiy}`;
  }
  console.log(son([4, 7, 8, 5, -4, -3]));
}

{
  // 1 masla while
  function son(array) {
    let musbat = 0,
      manfiy = 0;
    let i = 0;
    while (i < array.length) {
      if (array[i] > 0) {
        musbat += array[i];
      } else {
        manfiy += array[i];
      }

      i++;
    }
    return `${musbat} ${manfiy}`;
  }
  console.log(son([8, 6, 4, 7, 8, 5, -4, -3]));
}

{
  // 1 masla do while
  function son(array) {
    let musbat = 0,
      manfiy = 0;
    let i = 0;
    do {
      if (array[i] > 0) {
        musbat += array[i];
      } else {
        manfiy += array[i];
      }
      i++;
    } while (i < array.length);
    return `${musbat} ${manfiy}`;
  }
  console.log(son([4, 7, 8, 5, -4, 6, 5, -4, -3]));
}
{
  // 2 masala
  function son(array) {
    let sum = 0;
    for (let i = 0; i <= array; i += 2) {
      sum = sum + i;
    }
    return `juft sonlar yigindisi shunga teng ${sum}`;
  }
  console.log(son(74));
}
{
  function son(array) {
    let sum = 0;
    let i = 0;
    while (i <= array) {
      sum = sum + i;
      i += 2;
    }
    return `juft sonlar yigindisi shunga teng ${sum}`;
  }
  console.log(son(65));
}
{
  function son(array) {
    let sum = 0;
    let i = 0;
    do {
      sum = sum + i;
      i += 2;
    } while (i <= array);
    return `juft sonlar yigindisi shunga teng ${sum}`;
  }
  console.log(son(44));
}

{
  // 3 masala
  function son(a, b) {
    let sum = 0;
    for (let i = a; i <= b; i++) {
      sum = sum + i;
    }
    return sum;
  }
  console.log(son(10, 15));
}
{
  // 3 masal while korinishi
  function son(a, b) {
    let i = a;
    let sum = 0;
    while (i <= b) {
      sum = sum + i;
      i++;
    }
    return sum;
  }
  console.log(son(10, 15));
}
{
  // 3 masala do while korinishi
  function son(a, b) {
    let sum = 0;
    let i = a;
    do {
      sum = sum + i;
      i++;
    } while (i <= b);
    return sum;
  }
  console.log(son(10, 15));
}

{
  // 4 masal
  function son(n) {
    for (let i = n; i >= 0; i -= 2) {
      console.log(i);
    }
  }
  console.log(son(45));
}
{
  // 4 masalani while korinishi
  function son(n) {
    let i = n;
    while (i >= 0) {
      console.log(i);
      i -= 2;
    }
  }
  console.log(son(34));
}
{
  // 4 masala do while korinishi
  function son(n) {
    let i = n;
    do {
      console.log(i);
      i -= 2;
    } while (i >= 0);
  }
  console.log(son(23));
}

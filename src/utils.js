const sortDataASC = (itemA, itemB, sortKey) => {
  if (itemA[sortKey] > itemB[sortKey]) {
    return 1;
  }

  if (itemA[sortKey] < itemB[sortKey]) {
    return -1;
  }

  return 0;
}

const sortDataDESC = (itemA, itemB, sortKey) => {
  if (itemA[sortKey] < itemB[sortKey]) {
    return 1;
  }

  if (itemA[sortKey] > itemB[sortKey]) {
    return -1;
  }

  return 0;
}

export {sortDataASC, sortDataDESC}
import React, { useState } from 'react';
import SearchForm from './filter-form';
import TableRow from './table-row';
import Pagination from './pagination';
import { DATA } from '../const';
import { sortDataASC, sortDataDESC } from '../utils';

const ITEMS_PER_PAGE = 4;
const INITIAL_PAGE = 1;

const SortModes = {
  ASC: 'ascending',
  DESC: 'descending',
  INITIAL: 'initial',
};

const MainScreen = () => {
  const [state, setState] = useState({
    data: DATA,
    currentPage: INITIAL_PAGE,
    currentSortMode: SortModes.INITIAL,
    currentSortKey: '',
  });
  const {data, currentPage, currentSortMode, currentSortKey} = state;

  const onPageChange = (evt) => {
    evt.preventDefault();

    if (evt.target.matches('.pagination__button')) {
      setState((prevState) => {
        return {
          ...prevState,
          currentPage: parseInt(evt.target.textContent),
        }
      });
    }
  }

  const handleSortClick = (evt) => {
    const sortKey = evt.target.textContent;

    if (currentSortKey === sortKey && currentSortMode === SortModes.ASC) {
      const sortedData = data.sort((itemA, itemB) => sortDataDESC(itemA, itemB, sortKey));

      setState((prevState) => {
        return {
          ...prevState,
          data: sortedData,
          currentSortMode: SortModes.DESC,
          currentSortKey: sortKey,
          currentPage: INITIAL_PAGE,
        }
      });
    } else if (currentSortKey === sortKey && currentSortMode === SortModes.DESC) {
      const sortedData = data.sort((itemA, itemB) => sortDataASC(itemA, itemB, sortKey));

      setState((prevState) => {
        return {
          ...prevState,
          data: sortedData,
          currentSortMode: SortModes.ASC,
          currentSortKey: sortKey,
          currentPage: INITIAL_PAGE,
        }
      });
    } else if (currentSortKey !== sortKey) {
      const sortedData = data.sort((itemA, itemB) => sortDataASC(itemA, itemB, sortKey));

      setState((prevState) => {
        return {
          ...prevState,
          data: sortedData,
          currentSortMode: SortModes.ASC,
          currentSortKey: sortKey,
          currentPage: INITIAL_PAGE,
        }
      });
    }
  }

  const onFilterInput = (text) => {
    if (text.trim()) {
      const filteredData = DATA.filter((item) => {
        return Object.values(item).some((value) => value.toString().toLowerCase().includes(text.trim().toLowerCase()));
      });

      setState((prevState) => {
        return {
          ...prevState,
          data: filteredData,
          currentPage: INITIAL_PAGE,
        }
      });

      return;
    }

    setState((prevState) => {
      return {
        ...prevState,
        data: DATA,
        currentPage: INITIAL_PAGE,
      }
    });
  }

  return (
    <>
      <SearchForm onFilterInput={onFilterInput} />

      {data.length / ITEMS_PER_PAGE > 1 ?
        <Pagination
          currentPage={currentPage}
          maxPages={Math.ceil(data.length / ITEMS_PER_PAGE)}
          onPageChange={onPageChange} /> :
        ''}

      {data.length > 0 ?
        <table className="table">
          <tbody>
            <tr>
              {Object.keys(data[0]).map((objectKey) => {
                return (
                  <th className="table__header" key={objectKey} tabIndex={0} onClick={handleSortClick}>{objectKey}</th>
                );
              })}
            </tr>
            {data.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE).map((item) => {
              return (
                <TableRow
                  key={item.id}
                  item={item} />
              );
            })}
          </tbody>
        </table> :
        <h2>Ничего не найдено</h2>}
    </>
  );
};

export default MainScreen;
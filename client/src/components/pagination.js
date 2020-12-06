import React from 'react';
import ReactPaginate from 'react-paginate';

const Pagination = ({ totalPages, currentPage, handlePageClick }) => (
	<div className="container flex items-center justify-center px-4 py-2">
		<ReactPaginate
          previousLabel={'previous'}
          nextLabel={'next'}
          breakLabel={'...'}
          breakClassName={'break-me'}
          pageCount={totalPages}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={handlePageClick}
          containerClassName={'pagination'}
          subContainerClassName={'pages pagination'}
          activeClassName={'active'}
        />
	 </div>
);

export default Pagination;

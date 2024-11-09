import React from "react";
import { CaretRight, CaretLeft } from "@phosphor-icons/react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageClick: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageClick,
}) => {
  const getPages = () => {
    if (totalPages === 0) {
      return [];
    }
    const pages = [];

    pages.push(1);

    if (currentPage > 3) {
      pages.push("...");
    }

    for (
      let i = Math.max(2, currentPage - 1);
      i <= Math.min(totalPages - 1, currentPage + 1);
      i++
    ) {
      pages.push(i);
    }

    if (currentPage < totalPages - 2) {
      pages.push("...");
    }

    if (totalPages > 1) {
      pages.push(totalPages);
    }

    return pages;
  };

  const pages = getPages();
  const handleButtonClick = (page: number | string) => {
    if (
      typeof page === "number" &&
      page !== currentPage &&
      page > 0 &&
      page <= totalPages
    ) {
      onPageClick(page);
    }
  };

  return (
    <div className="flex gap-4 items-center">
      {/* left button */}
      <button
        className="p-2 rounded-full hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed"
        disabled={currentPage === 1}
        onClick={() => handleButtonClick(currentPage - 1)}
      >
        <CaretLeft size={24} />
      </button>

      {/* pages button */}
      {pages.map((page, idx) => (
        <button
          key={idx}
          disabled={page === "..."}
          className={`disabled:opacity-50 disabled:cursor-not-allowed min-w-[40px] h-10 px-3 py-2 rounded-full ${
            page == currentPage
              ? "bg-blue-400 text-white cursor-default"
              : "hover:bg-gray-200"
          }`}
          onClick={() => handleButtonClick(page)}
        >
          {page}
        </button>
      ))}

      {/* right button */}
      <button
        className="p-2 rounded-full hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed"
        disabled={currentPage === totalPages}
        onClick={() => handleButtonClick(currentPage + 1)}
      >
        <CaretRight size={24} />
      </button>
    </div>
  );
};

export default Pagination;

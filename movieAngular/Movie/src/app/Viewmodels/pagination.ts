export interface Pagination {
    // pagination.interface.ts
     totalItems: number;       // Total number of items available
    currentPage: number;      // Current page number
    pageSize: number;         // Number of items per page
    totalPages: number;       // Total number of pages available
}

export interface Pagination {
    currentPage: number;
    itemsPerPage: number;
    totalItems: number;
    totalPages: number;
}

export class PaginaedResult<T> {
    result: T;
    pagination: Pagination;
}

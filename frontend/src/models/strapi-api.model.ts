export interface StrapiResponse<T> {
	data: StrapiData<T>[];
	meta: Meta;
}

export interface StrapiData<T> {
	id: number;
	attributes: T;
}

export interface Meta {
	pagination: Pagination;
}

export interface Pagination {
	page: number;
	pageSize: number;
	pageCount: number;
	total: number;
}

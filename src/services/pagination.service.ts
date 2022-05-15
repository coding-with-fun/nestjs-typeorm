export const pagination = (
  data: any[],
  count: number,
  page: number,
  limit: number,
) => {
  return {
    data,
    meta: {
      totalItems: count,
      itemsPerPage: limit,
      totalPages: Math.ceil(count / limit),
      currentPage: page,
    },
  };
};

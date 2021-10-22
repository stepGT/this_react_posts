import React from 'react';
/**
 *
 * @param {*} posts
 * @param {*} sort
 * @returns
 */
export const useSortedPosts = (posts, sort) => {
  const sortedPost = React.useMemo(() => {
    return sort
      ? [...posts].sort((a, b) => a[sort].localeCompare(b[sort]))
      : posts;
  }, [sort, posts]);
  //
  return sortedPost;
};

/**
 *
 * @param {*} posts
 * @param {*} sort
 * @param {*} query
 * @returns
 */
export const usePosts = (posts, sort, query) => {
  const sortedPost = useSortedPosts(posts, sort);
  const sortedAndSearchedPosts = React.useMemo(() => {
    return sortedPost.filter((post) =>
      post.title.toLowerCase().includes(query)
    );
  }, [query, sortedPost]);
  //
  return sortedAndSearchedPosts;
};

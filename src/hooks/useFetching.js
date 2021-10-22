import React from "react";

/**
 *
 * @param {*} callback
 * @returns
 */
export const useFetching = (callback) => {
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState("");
  //
  const fetching = async () => {
    try {
      setIsLoading(true);
      await callback();
    } catch (e) {
      setError(e.message);
    } finally {
      setIsLoading(false);
    }
  };
  //
  return [fetching, isLoading, error];
};

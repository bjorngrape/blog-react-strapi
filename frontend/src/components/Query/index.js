// REUSABLE QUERY COMPONENT

/* Apollo will fetch data from different pages i.e. no need to rewrite the same code every time in different pages. */

import React from "react";
import { useQuery } from "@apollo/react-hooks"; // using the useQuery hook to call my Strapi server at this address http://localhost:1337/graphql

const Query = ({ children, query, id }) => {
  const { data, loading, error } = useQuery(query, {
    variables: { id: id } // sending an id if it exists (necessary when you'll want to fetch just one article)
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {JSON.stringify(error)}</p>;
  return children({ data }); // If the request is successful, it will return the child component with the retrieved data as prop
};

export default Query;
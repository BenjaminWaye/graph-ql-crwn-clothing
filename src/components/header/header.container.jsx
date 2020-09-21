import React from "react";

import { useQuery } from "react-apollo";
import { gql } from "apollo-boost";

import Header from "./header.component";

const GET_CART_HIDDEN = gql`
  {
    cartHidden @client
  }
`;

const HeaderContainer = () => {
  const { loading, error, data } = useQuery(GET_CART_HIDDEN);

  if (loading) return "loading...";
  if (error) return `Error! ${error.message}`;

  const { cartHidden } = data;
  return <Header cartHidden={cartHidden} />;
};

export default HeaderContainer;

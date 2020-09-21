import React from "react";
import { useQuery, useMutation } from "react-apollo";
import { gql } from "apollo-boost";

import CartDropdown from "./cart-dropdown.component";

const TOGGLE_CART_HIDDEN = gql`
  mutation ToggleCartHidden {
    toggleCartHidden @client
  }
`;

const GET_CART_ITEMS = gql`
  {
    cartItems @client
  }
`;

const CartDropdownContainer = () => {
  const [toggleCartHidden] = useMutation(TOGGLE_CART_HIDDEN);
  const { loading, error, data } = useQuery(GET_CART_ITEMS);

  if (loading) return "loading...";
  if (error) return `Error! ${error.message}`;

  const { cartItems } = data;

  return (
    <CartDropdown toggleCartHidden={toggleCartHidden} cartItems={cartItems} />
  );
};

export default CartDropdownContainer;

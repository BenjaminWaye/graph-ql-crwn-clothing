import React from "react";

import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";

import "./cart-icon.styles.scss";

import { useMutation, useQuery } from "react-apollo";
import { gql } from "apollo-boost";

const TOGGLE_CART_HIDDEN = gql`
  mutation ToggleCartHidden {
    toggleCartHidden @client
  }
`;

const GET_ITEM_COUNT = gql`
  {
    itemCount @client
  }
`;

const CartIcon = () => {
  const [toggleCartHidden] = useMutation(TOGGLE_CART_HIDDEN);
  const { loading, error, data } = useQuery(GET_ITEM_COUNT);

  if (loading) return "loading...";
  if (error) return `Error! ${error.message}`;

  const { itemCount } = data;

  return (
    <div className="cart-icon" onClick={toggleCartHidden}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{itemCount}</span>
    </div>
  );
};

export default CartIcon;

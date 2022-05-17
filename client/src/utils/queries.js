import { gql } from "@apollo/client";

export const GET_COLORS = gql`
  {
    colors {
      _id
      hex
      color
    }
  }
`;

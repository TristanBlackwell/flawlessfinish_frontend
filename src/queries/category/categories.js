import gql from "graphql-tag";

// Get all hair treatment categories
const CATEGORIES_QUERY = gql`
  query Categories {
    categories {
      id
      Name
      treatments {
        id
        Name
        Stylist_price
        Senior_stylist_price
      }
    }
  }
`;

export default CATEGORIES_QUERY;

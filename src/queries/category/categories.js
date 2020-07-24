import gql from "graphql-tag";

// Get all treatment categories
const CATEGORIES_QUERY = gql`
  query Categories {
    categories {
      id
      name
      treatments {
        id
        name
        stylist_price
        senior_stylist_price
      }
    }
  }
`;

export default CATEGORIES_QUERY;

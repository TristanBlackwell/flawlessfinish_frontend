import gql from "graphql-tag";

const CATEGORY_TREATMENTS = gql`
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

export default CATEGORY_TREATMENTS;

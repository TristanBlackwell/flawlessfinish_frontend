import gql from "graphql-tag";

// Get all hair treatment categories
const MEMBERS_QUERY = gql`
  query Members {
    members {
      id
      Portrait
      Full_Name
      Role
      Description
    }
  }
`;

export default MEMBERS_QUERY;

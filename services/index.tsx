import request, { gql } from "graphql-request";

export const getCarsList = async () => {
  const query = gql`
    query CarLists {
      carLists {
        price
        name
        carAvg
        image {
          id
        }
        carBrand
        carType
      }
    }
  `;

  const result = await request(
    "https://api-ap-south-1.hygraph.com/v2/clus6rr2p0i3w07we2h18vykp/master",
    query
  );
  return result;
};

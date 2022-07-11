/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getPartner = /* GraphQL */ `
  query GetPartner($id: ID!) {
    getPartner(id: $id) {
      id
      name
      description
      headOfficeLocationIn
      isSupplier
      infolineMail
      complaintMail
      websiteID
      emailsReceivedFromProvider
      shouldPerformPriceCheck
      hasCustomLookUpPage
      createdAt
      updatedAt
    }
  }
`;
export const listPartners = /* GraphQL */ `
  query ListPartners(
    $filter: ModelPartnerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPartners(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        headOfficeLocationIn
        isSupplier
        infolineMail
        complaintMail
        websiteID
        emailsReceivedFromProvider
        shouldPerformPriceCheck
        hasCustomLookUpPage
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;

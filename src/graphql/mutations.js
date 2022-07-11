/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createPartner = /* GraphQL */ `
  mutation CreatePartner(
    $input: CreatePartnerInput!
    $condition: ModelPartnerConditionInput
  ) {
    createPartner(input: $input, condition: $condition) {
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
export const updatePartner = /* GraphQL */ `
  mutation UpdatePartner(
    $input: UpdatePartnerInput!
    $condition: ModelPartnerConditionInput
  ) {
    updatePartner(input: $input, condition: $condition) {
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
export const deletePartner = /* GraphQL */ `
  mutation DeletePartner(
    $input: DeletePartnerInput!
    $condition: ModelPartnerConditionInput
  ) {
    deletePartner(input: $input, condition: $condition) {
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

/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getProvider = /* GraphQL */ `
  query GetProvider($id: ID!) {
    getProvider(id: $id) {
      id
      Details {
        Name
        Description
        HeadOfficeLocation
        InfolineMail
        ComplaintMail
        Website
      }
      EmailsWeReceive {
        Voucher
        Cancellation
        Confirmation
      }
      Properties {
        IsSupplyingCars
        ShouldPerformPriceCheck
        HasCustomLookupPage
      }
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const listProviders = /* GraphQL */ `
  query ListProviders(
    $filter: ModelProviderFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProviders(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        Details {
          Name
          Description
          HeadOfficeLocation
          InfolineMail
          ComplaintMail
          Website
        }
        EmailsWeReceive {
          Voucher
          Cancellation
          Confirmation
        }
        Properties {
          IsSupplyingCars
          ShouldPerformPriceCheck
          HasCustomLookupPage
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncProviders = /* GraphQL */ `
  query SyncProviders(
    $filter: ModelProviderFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncProviders(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        Details {
          Name
          Description
          HeadOfficeLocation
          InfolineMail
          ComplaintMail
          Website
        }
        EmailsWeReceive {
          Voucher
          Cancellation
          Confirmation
        }
        Properties {
          IsSupplyingCars
          ShouldPerformPriceCheck
          HasCustomLookupPage
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;

export {}

declare global {
  interface Metrics {
    name: string
    value: string
    icon ?: React.SVGProps
  }
  interface getMetricsResponse {
    data: Metrics[]
  }

  interface userDetails{
    name: string
    accountNo: string
    bank: string
  }
  interface userDetailsResponse{
    data: userDetails
  }

  interface loginContext{
    name: string
    accountNo : string
    bank: string
  }


  // // Use type safe message keys with `next-intl`
  // type Messages = typeof import('./../i18n/en.json');
  // declare interface IntlMessages extends Messages {} 
}
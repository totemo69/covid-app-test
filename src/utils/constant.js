const API_URL = process.env.NEXT_PUBLIC_API_URL
  ? `${process.env.NEXT_PUBLIC_API_URL}`
  : `https://api.covid19api.com`;


export const API_PATH = {
  SUMMARY: `${API_URL}/summary`,
  COUNTRIES: `${API_URL}/countries`,
  DAYONE: `${API_URL}/dayone/country`,
};

export const BASIC_AUTH = {
  USERNAME: 'corona',
  PASSWORD: 'ZUav4vawzCfMcMXHV8B',
}

export const LOADING_PREFIX = {
  SUMMARY: 'summary',
  DAYONE: 'dayone',
}

export const APP_ROUTE = {
  SUMMARY: '/summary',
  COUNTRY: '/countries',
}

export const COVID_STATUS = {
  CONFIRMED: 'confirmed',
  RECOVERED: 'recovered',
  DEATHS: 'deaths',
}

export const GET_REQUEST = 'GET';
export const POST_REQUEST = 'POST';
export const PUT_REQUEST = 'PUT';
export const PATCH_REQUEST = 'PATCH';
export const DELETE_REQUEST = 'DELETE';
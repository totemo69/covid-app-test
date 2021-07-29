import { GET_REQUEST, BASIC_AUTH } from './constant';

/**
 * Parses the JSON returned by a network request
 *
 * @param  {object} response A response from a network request
 *
 * @return {object}          The parsed JSON from the request
 */
function parseJSON(response) {
  if (
    response.status === 204 ||
    response.status === 205 ||
    response.status === 202
  ) {
    return null;
  }
  return response.json();
}

/**
 * Checks if a network request came back fine, and throws an error if not
 *
 * @param  {object} response   A response from a network request
 *
 * @return {object|undefined} Returns either the response, or throws an error
 */
function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }

  const error = new Error(response.statusText);
  error.response = response;
  throw error;
}

export function RequestOptions(Method, body = {}, withAuth = false) {
  let requestOptions;
  const Headers = {
    'Content-Type': 'application/json',
  };
  if (Method === GET_REQUEST) {
    requestOptions = {
      method: Method,
      headers: Headers,
    };
  } else {
    requestOptions = {
      method: Method,
      headers: Headers,
      body: JSON.stringify(body),
    };
  }
  if (withAuth) {
    const accessToken = new Buffer.from(`${BASIC_AUTH.USERNAME}:${BASIC_AUTH.PASSWORD}`).toString("base64");
    requestOptions.headers = {
      ...requestOptions.headers,
      Authorization: `Basic ${accessToken}`,
    }
  }

  return requestOptions;
}

/**
 * Requests a URL, returning a promise
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 *
 * @return {object}           The response data
 */
export function request(url, options) {
  return fetch(url, options).then(checkStatus).then(parseJSON);
}
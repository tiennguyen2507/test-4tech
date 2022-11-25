/**
 * @name Config
 * @description Project configuration
 */

// local service port
// #SETUP_MOCK: VITE_PORT = 8088;
export const VITE_PORT = 4000;

// prefix
export const API_PREFIX = 'http://localhost:9000/api';

// serve
// #SETUP_MOCK: API_BASE_URL = '/api';
export const API_BASE_URL = '/api';
export const API_TARGET_URL = 'http://localhost:9000';

// mock
export const MOCK_API_BASE_URL = '/mock/api';
export const MOCK_API_TARGET_URL = 'http://localhost:3000';

// Package dependency analysis
export const ANALYSIS = false;

// code compression
export const COMPRESSION = true;

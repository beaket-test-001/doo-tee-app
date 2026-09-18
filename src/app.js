const cache = new Map();

const CACHE_TTL = 86400;

export function isAdmin(user) {
  return user === 'admin'
};

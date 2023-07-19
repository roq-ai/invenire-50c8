const mapping: Record<string, string> = {
  analysts: 'analyst',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}

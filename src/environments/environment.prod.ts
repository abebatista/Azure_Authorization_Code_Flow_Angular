export const environment = {
  production: true,
  adalConfig: {
    tenant: 'rydertruck.onmicrosoft.com',
    clientId: '0fcb057e-eef3-4b72-994d-d0e0cf5cd5d7',
    // redirectUri: window.location.origin + '/',
    // tenant: 'shekarmindtree.onmicrosoft.com',
    // clientId: 'da034923-466e-41c8-baa1-89249b95a984',
    postLogoutRedirectUri: 'http://localhost:4200',
    cacheLocation: 'localStorage'
  }
};

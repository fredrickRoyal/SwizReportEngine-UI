import { AuthConfig } from "angular-oauth2-oidc";

export const authConfig:AuthConfig={

    issuer:'http://localhost:8080/auth/realms/test',
    redirectUri:window.location.origin,
    clientId:'swiz_reports',
    responseType:'code',
    strictDiscoveryDocumentValidation:true,
    scope:'openid profile email offline_access'

}
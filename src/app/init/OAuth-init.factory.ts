import { OAuthService } from "angular-oauth2-oidc";
import { authConfig } from "../config/Auth.config";

export function initializeOAuth(oauthService: OAuthService) {
    oauthService.configure(authConfig)
    
    return () =>oauthService.initCodeFlow();
}
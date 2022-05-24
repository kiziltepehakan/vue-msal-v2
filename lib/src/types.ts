import {AuthError, CacheOptions} from "@azure/msal-browser";
import {SystemOptions} from "@azure/msal-common";

export type DataObject = {
    isAuthenticated: boolean,
    accessToken: string,
    idToken: string,
    user: User,
    custom: object,
    account?: any
}

export type FrameworkOptions = {
    globalMixin?: boolean
}

export type Options = {
    auth: Auth,
    loginRequest: Request,
    tokenRequest: Request,
    cache?: CacheOptions,
    system?: SystemOptions,
    framework?: FrameworkOptions
}

export type Request = {
    scopes?: string[]
    account?: any
}

// Config object to be passed to Msal on creation.
// For a full list of msal.js configuration parameters, 
// visit https://azuread.github.io/microsoft-authentication-library-for-js/docs/msal/modules/_authenticationparameters_.html
export type Auth = {
    clientId: string,
    authority: string,
    redirectUri: string,
    autoRefreshToken?: boolean,
    onAuthentication: (ctx: object, error: AuthError, response: any) => any,
    onToken: (ctx: object, error: AuthError | null, response: any | null) => any,
    beforeSignOut: (ctx: object) => any
}

export interface iMSAL {
    i̇nstance: any,
    data: DataObject,
    loginPopup: () => Promise<any> | void,
    loginRedirect: () => Promise<any> | void,
    signOut: () => Promise<any> | void,
    logoutRedirect: () => Promise<any> | void,
    acquireToken: () => Promise<any> | void,
    isAuthenticated: () => boolean
}

export type User = {
    name: string,
    userName: string
}

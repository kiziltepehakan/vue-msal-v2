'use strict';
import { iMSAL, Options } from './src/types';
import { MSAL } from './src/main';
import { mixin } from "./mixin";

export const msalMixin = mixin;
export const EventType = {
    INITIALIZE_START : "msal:initializeStart",
    INITIALIZE_END : "msal:initializeEnd",
    ACCOUNT_ADDED : "msal:accountAdded",
    ACCOUNT_REMOVED : "msal:accountRemoved",
    LOGIN_START : "msal:loginStart",
    LOGIN_SUCCESS : "msal:loginSuccess",
    LOGIN_FAILURE : "msal:loginFailure",
    ACQUIRE_TOKEN_START : "msal:acquireTokenStart",
    ACQUIRE_TOKEN_SUCCESS : "msal:acquireTokenSuccess",
    ACQUIRE_TOKEN_FAILURE : "msal:acquireTokenFailure",
    ACQUIRE_TOKEN_NETWORK_START : "msal:acquireTokenFromNetworkStart",
    SSO_SILENT_START : "msal:ssoSilentStart",
    SSO_SILENT_SUCCESS : "msal:ssoSilentSuccess",
    SSO_SILENT_FAILURE : "msal:ssoSilentFailure",
    ACQUIRE_TOKEN_BY_CODE_START : "msal:acquireTokenByCodeStart",
    ACQUIRE_TOKEN_BY_CODE_SUCCESS : "msal:acquireTokenByCodeSuccess",
    ACQUIRE_TOKEN_BY_CODE_FAILURE : "msal:acquireTokenByCodeFailure",
    HANDLE_REDIRECT_START : "msal:handleRedirectStart",
    HANDLE_REDIRECT_END : "msal:handleRedirectEnd",
    POPUP_OPENED : "msal:popupOpened",
    LOGOUT_START : "msal:logoutStart",
    LOGOUT_SUCCESS : "msal:logoutSuccess",
    LOGOUT_FAILURE : "msal:logoutFailure",
    LOGOUT_END : "msal:logoutEnd"
};

export default class msalPlugin {
    static install(Vue: any, options: Options): void {
        Vue.prototype.$msal = new msalPlugin(options, Vue);
    }
    constructor(options: Options, Vue: any) {
        const msal = new MSAL(options);
        if (Vue && options.framework && options.framework.globalMixin) {
            Vue.mixin(mixin);
        }
        const exposed: iMSAL = {
            i̇nstance: msal.i̇nstance,
            data: msal.data,
            async loginPopup() { await msal.loginPopup(); },
            async loginRedirect() { await msal.loginRedirect(); },
            async signOut() { await msal.signOut(); },
            async acquireToken() { await msal.acquireToken(); },
            isAuthenticated() { return msal.isAuthenticated(); }
        };
        return exposed;
    }
}

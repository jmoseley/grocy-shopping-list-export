import * as fs from 'fs';

const PATH_TO_CONFIG = process.env.PATH_TO_CONFIG || './config.json';

let cachedConfig: Config;

export interface Config {
    grocyApiKey: string;
    googleUsername: string;
    googlePassword: string;
}

export function getConfig(): Config {
    if (cachedConfig) {
        return cachedConfig;
    }

    const configFile = fs.readFileSync(PATH_TO_CONFIG);
    let parsedConfig: { [key: string]: object | string | number | null | undefined };
    try {
        parsedConfig = JSON.parse(configFile.toString());
    } catch (error) {
        throw new Error(`Unable to parse config file at ${PATH_TO_CONFIG}.`);
    }

    if (!parsedConfig['grocy_api_key']) {
        throw new Error(`Config missing "grocy_api_key".`);
    }

    if (!parsedConfig['google_username']) {
        throw new Error(`Config missing "google_username".`);
    }
    if (!parsedConfig['google_password']) {
        throw new Error(`Config missing "google_password".`);
    }

    cachedConfig = {
        grocyApiKey: parsedConfig['grocy_api_key'] as string,
        googleUsername: parsedConfig['google_username'] as string,
        googlePassword: parsedConfig['google_password'] as string
    }

    return cachedConfig;
}
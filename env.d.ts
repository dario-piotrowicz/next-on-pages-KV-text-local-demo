
declare global {
	namespace NodeJS {
		interface ProcessEnv {
			[key: string]: string | undefined;
			MY_KV: KVNamespace;
			SECRET_KEY: string;
		}
	}
}

export {};

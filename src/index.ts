import { Container, getContainer } from '@cloudflare/containers';

export class Subconverter extends Container {
	defaultPort = 25500;
	sleepAfter = '10m';
}

export default {
	async fetch(request, env): Promise<Response> {
		return getContainer(env.SUBCONVERTER).fetch(request);
	},
} satisfies ExportedHandler<Env>;

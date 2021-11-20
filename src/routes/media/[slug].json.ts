export async function get(): Promise<{
	status: number;
	body: unknown;
}> {
	const res = await fetch(`https://jsonplaceholder.typicode.com/photos`, {
		method: 'GET',
		headers: {
			'content-type': 'application/json'
		}
	});

	// if the request came from a <form> submission, the browser's default
	// behaviour is to show the URL corresponding to the form's "action"
	// attribute. in those cases, we want to redirect them back to the
	// /todos page, rather than showing the response
	if (res.ok) {
		return {
			status: 200,
			body: await res.json()
		};
	}

	return {
		status: res.status,
		body: await res.json()
	};
}

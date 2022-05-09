import { NextApiRequest, NextApiResponse } from "next";
import { Client, query as q } from "faunadb";

export default async (request: NextApiRequest, response: NextApiResponse) => {
	const { secret, hours, voltage } = request.body;

	const client = new Client({
		secret,
		domain: "db.us.fauna.com",
	});

	await client.query(
		q.Create(q.Collection("main"), {
			data: { date: new Date().toISOString(), hours, voltage },
		})
	);

	response.end("coolio");
};

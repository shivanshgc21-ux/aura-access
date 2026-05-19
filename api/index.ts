import serverEntry from "../dist/server/index.js";

export const config = {
  runtime: "edge",
};

export default async function handler(request: Request): Promise<Response> {
  return serverEntry.fetch(request);
}

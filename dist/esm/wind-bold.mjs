export const name="wind-bold";
export const id="dl_656367831c37d72e45f6";
export const url=new URL("../icons/wind-bold.svg?v=da94056b7f059c0c82e9efc7c5bcc0d35e24aa9858e701d921bcc842a2ddd2a1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

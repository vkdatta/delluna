export const name="request_quote-fill";
export const id="dl_4e2e81f984f237cd1a80";
export const url=new URL("../icons/request_quote-fill.svg?v=d277413d68a3749bb0879b704fe22aee4741f83cc9d7d5c9c7737ffad0cbd4d1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

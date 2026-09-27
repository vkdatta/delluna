export const name="manage_accounts";
export const id="dl_61aab47ec1477faec1aa";
export const url=new URL("../icons/manage_accounts.svg?v=deeb83c8089e7413b05d23950bb02b8fd4bd8b8dcc7dfeaaa8a117016ed391be",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

export const name="local_drink-fill";
export const id="dl_2396478719595b9a75e2";
export const url=new URL("../icons/local_drink-fill.svg?v=149459f5ff57e7e24b22421898e959e4c9f462980d801b50efc38c6b42a1cd08",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

export const name="add_moderator-fill";
export const id="dl_c372c9988f9fb6f4b6f6";
export const url=new URL("../icons/add_moderator-fill.svg?v=6a132e002b9d092f0ecc35294458e74e17e6a2ae740c9ee4492315c0fc0ecd9e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

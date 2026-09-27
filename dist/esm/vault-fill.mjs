export const name="vault-fill";
export const id="dl_500127c5c6d68b778fd2";
export const url=new URL("../icons/vault-fill.svg?v=28efeeaeecb604cbfdd7cf3a86d8a784a80c8d27f3d1c2350eb79927da5e0a3c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

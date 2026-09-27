export const name="vpn_lock-fill";
export const id="dl_ee662f7355859aff4c28";
export const url=new URL("../icons/vpn_lock-fill.svg?v=ef8f1ba12ce8b3a5b08d118685ea3f9427ccb36a83a266448c5faa81dcef99c8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

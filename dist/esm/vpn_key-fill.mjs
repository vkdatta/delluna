export const name="vpn_key-fill";
export const id="dl_047167ed16eff4646d80";
export const url=new URL("../icons/vpn_key-fill.svg?v=2bc55e0a6645b60b19eed8b5a31e5f80432a3613c35b3097acce81dadcbc72d6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

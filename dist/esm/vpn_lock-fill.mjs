export const name="vpn_lock-fill";
export const id="dl_be32e4964c5c2341430c";
export const url=new URL("../icons/vpn_lock-fill.svg?v=1676624329b6115e2b9a243c8f7f969aceca33ea1fd5d361b33f6d38a4010406",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

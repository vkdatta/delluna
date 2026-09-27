export const name="sync_alt-fill";
export const id="dl_473795c0065acbae96c9";
export const url=new URL("../icons/sync_alt-fill.svg?v=0c8d54ea06c5738e90cfa75cc2fbe39bc17ea98d713eabc55acb17f4bd44c78d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

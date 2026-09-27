export const name="draft_orders-fill";
export const id="dl_a734681942ad3d3c5c87";
export const url=new URL("../icons/draft_orders-fill.svg?v=c44037790e3b96a2fd0447f9720bddc2c895deb4e3811cbcab534e23aab6082a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

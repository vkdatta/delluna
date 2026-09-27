export const name="draft_orders-fill";
export const id="dl_e6b1fff6a1e266b7d06b";
export const url=new URL("../icons/draft_orders-fill.svg?v=f7248c2bb3b61fb98ff5d7ee008a27400e7e33d2ee67c0111fbc6c98caf2ff3c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

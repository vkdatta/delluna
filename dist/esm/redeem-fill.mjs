export const name="redeem-fill";
export const id="dl_594e0e7e715cb91d7b49";
export const url=new URL("../icons/redeem-fill.svg?v=f15d13d76c401bbd503e372d19413a3e66f1c6e44072b6b6b52aa57a5cb4b5c7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

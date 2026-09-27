export const name="bus-fill";
export const id="dl_19f334077c4041a68f52";
export const url=new URL("../icons/bus-fill.svg?v=7402f2ee250210f3033f405844ad36729e235ad53c4e4fc6811588846d06653f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

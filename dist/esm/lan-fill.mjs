export const name="lan-fill";
export const id="dl_3028956b1ff58f3dad01";
export const url=new URL("../icons/lan-fill.svg?v=e5d75279159dc7e8d9e92512fdbb85674954931f1c84d6d4e913c2831564fb66",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

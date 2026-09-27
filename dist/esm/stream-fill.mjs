export const name="stream-fill";
export const id="dl_659065642cdf41cc77a9";
export const url=new URL("../icons/stream-fill.svg?v=52e6037301540665ef83a6f3997a529d7a12500f4b8befc76af27607e4945f49",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

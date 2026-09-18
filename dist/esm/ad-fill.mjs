export const name="ad-fill";
export const id="dl_0540499be4fd4ef18780";
export const url=new URL("../icons/ad-fill.svg?v=53488c6b8febc2091458dc9359fb755024335d407a2b8fe7bc22b1671e4726c3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

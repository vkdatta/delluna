export const name="parking_valet-fill";
export const id="dl_5458430c66c1cf23f7ce";
export const url=new URL("../icons/parking_valet-fill.svg?v=8d3019719cb1d1625794c0d99832bdf14e489edff047477d8488a3623a75fa55",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

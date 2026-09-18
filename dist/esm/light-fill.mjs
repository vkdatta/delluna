export const name="light-fill";
export const id="dl_b8b082b3f19e409ca8ab";
export const url=new URL("../icons/light-fill.svg?v=ac60ab247d1023d1704d4b7ba99c5a5bed544012636a37becbec556f76ac3754",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

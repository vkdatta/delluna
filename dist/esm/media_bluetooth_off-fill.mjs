export const name="media_bluetooth_off-fill";
export const id="dl_57b573e2cce442d39f12";
export const url=new URL("../icons/media_bluetooth_off-fill.svg?v=1002c9bbe70245defa739b4411f5d1d46862c49d25e0ad4451b5b7e20c81d2df",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

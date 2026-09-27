export const name="family_star-fill";
export const id="dl_9a29d75c279ab6f6211a";
export const url=new URL("../icons/family_star-fill.svg?v=293158759c0dee3f5332e4f95b4c6267df1dc732d952cc81cd3e19ca9adc033a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

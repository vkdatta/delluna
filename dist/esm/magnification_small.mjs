export const name="magnification_small";
export const id="dl_0ee6eed6f948b26a5b11";
export const url=new URL("../icons/magnification_small.svg?v=24a0e5f7c1825065aea20cb790ab8d1fdc2bed9e21781fec3707497060622b3a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

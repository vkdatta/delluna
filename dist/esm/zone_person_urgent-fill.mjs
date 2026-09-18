export const name="zone_person_urgent-fill";
export const id="dl_c0f8839dfd6a4b83896c";
export const url=new URL("../icons/zone_person_urgent-fill.svg?v=3212118d5b5ca3f2ef096b2eb2f1759634a012c884be9d96269f5b1290f6f989",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

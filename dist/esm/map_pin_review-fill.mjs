export const name="map_pin_review-fill";
export const id="dl_9ea19a74499e4a01ba61";
export const url=new URL("../icons/M/map_pin_review-fill.svg?v=b9cd941e120a3bd605d436bac263d7dfb1d9f4a97104733a775784953a449174",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

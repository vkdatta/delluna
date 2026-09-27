export const name="map_pin_review";
export const id="dl_98aabbcc0e5cb1b2fbf7";
export const url=new URL("../icons/map_pin_review.svg?v=180ddd5103d785f6b8e384b01dd1bfe6d1bcc3e9683341832d154afca9a40ac7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

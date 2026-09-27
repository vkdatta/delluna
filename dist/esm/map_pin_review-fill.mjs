export const name="map_pin_review-fill";
export const id="dl_b121bc400f0b3047776a";
export const url=new URL("../icons/map_pin_review-fill.svg?v=1c31115152bef751f121ff54de0f4cde320ad749b1ec8fceb7719e57613f76f4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

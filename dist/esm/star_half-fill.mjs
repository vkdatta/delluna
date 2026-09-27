export const name="star_half-fill";
export const id="dl_34226ce13049f6eaecb6";
export const url=new URL("../icons/star_half-fill.svg?v=a2dc0637f5dfe52f53a05762ba7fb92142190b1aae75ddba9090bfc8fe449e3b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

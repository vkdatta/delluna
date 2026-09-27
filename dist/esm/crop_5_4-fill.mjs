export const name="crop_5_4-fill";
export const id="dl_1a34cf0b990c2adfa556";
export const url=new URL("../icons/crop_5_4-fill.svg?v=8494bbf18502759a24163c2f6e17a9f457a37206536105a4beaf3be2f3b12b81",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

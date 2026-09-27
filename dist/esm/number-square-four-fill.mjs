export const name="number-square-four-fill";
export const id="dl_e40931fc50cc406ea9b1";
export const url=new URL("../icons/number-square-four-fill.svg?v=b844d5023071a6e60a0c59796fc376992053361d6628cdcbf0c3e93535d33363",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

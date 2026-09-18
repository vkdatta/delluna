export const name="single_bed-fill";
export const id="dl_fceb4e0d898f417990ab";
export const url=new URL("../icons/S/single_bed-fill.svg?v=cc6902f08a277c19921dc811514b1936503a0900e1cecc77caf74dffaee378bc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

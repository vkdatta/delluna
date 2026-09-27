export const name="tour-fill";
export const id="dl_c36d73919fc5aa22dae9";
export const url=new URL("../icons/tour-fill.svg?v=e45c214aaabdd5335d8e08a048748297f98ca8632120da13febf69211f09c3cd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

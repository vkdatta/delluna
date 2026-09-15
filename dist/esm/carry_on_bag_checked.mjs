export const name="carry_on_bag_checked";
export const id="dl_e588999baef04058ae38";
export const url=new URL("../icons/C/carry_on_bag_checked.svg?v=9eee07fc48aa0dd12e848060ffef07773a7f77f13aa9fa7b560baf8674d2908e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

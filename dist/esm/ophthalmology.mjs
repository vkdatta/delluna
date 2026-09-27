export const name="ophthalmology";
export const id="dl_cf90dcdbd9c32898434d";
export const url=new URL("../icons/ophthalmology.svg?v=5eaee884871283c8e1d9cba097cd807fb86beebdfe0c9c5e1eafcc7b44c89ccf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

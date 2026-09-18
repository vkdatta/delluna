export const name="eyeglasses_3-fill";
export const id="dl_8274be8731184d02bf0a";
export const url=new URL("../icons/eyeglasses_3-fill.svg?v=bedefd1116dbedcfbd0368ae37634f15de2b6c09dc4fbb452aafde94c565f636",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

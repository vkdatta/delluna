export const name="touch_long";
export const id="dl_c965e8ee549408848f98";
export const url=new URL("../icons/touch_long.svg?v=ffc8c6cb50acf92193709ad058e8a556526ef02180b755a6a8a4c5d9047645b0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

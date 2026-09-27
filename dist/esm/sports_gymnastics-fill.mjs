export const name="sports_gymnastics-fill";
export const id="dl_3f74971441822f502d73";
export const url=new URL("../icons/sports_gymnastics-fill.svg?v=52a78f51541b3c2d39ec5da6f144a9289b3b3ccb935899b49be6bf615645e72f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

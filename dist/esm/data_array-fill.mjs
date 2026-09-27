export const name="data_array-fill";
export const id="dl_49c2550a06691e841626";
export const url=new URL("../icons/data_array-fill.svg?v=4a2d19cc7070fe60fccf737cabec0be035d4bce15866f647686505f70f0bed69",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

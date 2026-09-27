export const name="lucid_2-dessert";
export const id="dl_f2115d50813b4b9fbdaa";
export const url=new URL("../icons/lucid_2-dessert.svg?v=836e0e8a36e4c433043c4c257e649208af63fc58767b55b4533381480e23e219",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

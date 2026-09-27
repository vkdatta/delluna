export const name="photo_size_select_large";
export const id="dl_bc116a5a55c5fcb8a730";
export const url=new URL("../icons/photo_size_select_large.svg?v=67b3542238e446b9a00f6e5027812fe8ab96d6d77da5284d145d5899b7a26c13",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

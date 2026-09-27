export const name="earbud_left-fill";
export const id="dl_f009b5f955daed525678";
export const url=new URL("../icons/earbud_left-fill.svg?v=4b0c7679e0ae4f4abc83c0ee67af54bd2b8c74c2fbe48fcf381cab967b9a1ce5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

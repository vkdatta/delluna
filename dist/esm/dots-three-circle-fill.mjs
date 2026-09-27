export const name="dots-three-circle-fill";
export const id="dl_5246f457c6a845ab94c9";
export const url=new URL("../icons/dots-three-circle-fill.svg?v=fb37b2e09a85de9485e5e9e4933f5b9e35452ff761d892cbcb4812278a05172e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

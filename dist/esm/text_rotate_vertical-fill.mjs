export const name="text_rotate_vertical-fill";
export const id="dl_6ac28b880a277b0b8876";
export const url=new URL("../icons/text_rotate_vertical-fill.svg?v=26b8217ac2f3749ce48c32e6fddf6976ed0e6c67a8b42a6388c6c0cd74549b72",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

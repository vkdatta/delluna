export const name="text-h-three-fill";
export const id="dl_27fe3f24956d8f7332f4";
export const url=new URL("../icons/text-h-three-fill.svg?v=a741a5ab2af72cc282b8961897d1f3aff68aac1aac96cc5f60499ab3b92934ed",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

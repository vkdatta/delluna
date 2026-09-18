export const name="photo_auto_merge-fill";
export const id="dl_5f0fcae1ec6241c4aa69";
export const url=new URL("../icons/photo_auto_merge-fill.svg?v=29613d608e5b7a4f9b3721a146a16af8fed5bfff87e84b61f71e50138662cb0c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

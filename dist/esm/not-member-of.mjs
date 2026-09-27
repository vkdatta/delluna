export const name="not-member-of";
export const id="dl_63cf7aba3f014523bad3";
export const url=new URL("../icons/not-member-of.svg?v=97d0c17f345bc2af47163e8652761058c51cef082d21e92103b3ff3d317e1f4f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

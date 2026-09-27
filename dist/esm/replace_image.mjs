export const name="replace_image";
export const id="dl_8056e8f0e3b56b46c7c9";
export const url=new URL("../icons/replace_image.svg?v=12783e1caac073b3f74feab1cd61d86d08c69d00faf5ea9b86254460b632e4cb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

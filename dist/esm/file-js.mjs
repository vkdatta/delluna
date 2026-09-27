export const name="file-js";
export const id="dl_a309dffd349f4335912a";
export const url=new URL("../icons/file-js.svg?v=4e433ea8d24dac26f9381c54d94bef17f1cbcc235dac53888c88afeb59b71056",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

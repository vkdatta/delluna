export const name="lucid_2-drum";
export const id="dl_c68e07fac3b148f482a5";
export const url=new URL("../icons/lucid_2-drum.svg?v=59d254b99e19b563b023aa89459722449b5dd424c8cdfe6af0af37cf18632a7e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

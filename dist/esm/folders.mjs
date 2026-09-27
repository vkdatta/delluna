export const name="folders";
export const id="dl_f487e11c39dd4d54907c";
export const url=new URL("../icons/folders.svg?v=bddc668082286f59d8394947d4d694b12490891877ffef8708a71344be0162cf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

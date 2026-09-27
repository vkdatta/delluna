export const name="lucid_3-minimize";
export const id="dl_73f8f3ea83d44494a2ce";
export const url=new URL("../icons/lucid_3-minimize.svg?v=4b5ee4c51f13a32a1903dd709090b3906825d085b27559097d09bce8cee0491d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

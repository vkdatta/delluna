export const name="tent";
export const id="dl_56db3641bf81480589ee";
export const url=new URL("../icons/tent.svg?v=7fb5723409c1e41f4c86236ea8a2255e8509ea58d282dee0a47979402b59cb46",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

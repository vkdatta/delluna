export const name="laptop_chromebook-fill";
export const id="dl_46ab7b9147d0059f30d9";
export const url=new URL("../icons/laptop_chromebook-fill.svg?v=99c21b3169028ca647da1be5755374069e08f572ebf753af212af3837d517898",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

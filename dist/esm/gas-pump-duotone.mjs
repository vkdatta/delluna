export const name="gas-pump-duotone";
export const id="dl_4248b7aadfdf445ca80d";
export const url=new URL("../icons/gas-pump-duotone.svg?v=3bfcacd2f1682046e5682d9902d0f41fa3d810e835ab6af8cbd27935c17b9657",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

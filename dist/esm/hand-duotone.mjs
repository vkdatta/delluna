export const name="hand-duotone";
export const id="dl_7caadbb0af0846838910";
export const url=new URL("../icons/hand-duotone.svg?v=a76cfa2e9b0723899d4922f589f70868d468e2a668723731914e8de7f82d5a10",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

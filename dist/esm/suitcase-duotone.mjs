export const name="suitcase-duotone";
export const id="dl_635af13625ad4400ba9c";
export const url=new URL("../icons/S/suitcase-duotone.svg?v=ee3604395f784e13947a443f5c441b311132d42bf8e19f667bf1daff5f2ad211",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

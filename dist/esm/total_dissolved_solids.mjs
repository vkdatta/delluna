export const name="total_dissolved_solids";
export const id="dl_de3e6aeec8e14d639bee";
export const url=new URL("../icons/total_dissolved_solids.svg?v=d17500ba1b5ff589bbc09be7853fb9c284a5e06cf914a4d5f05ecd92093b01cd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

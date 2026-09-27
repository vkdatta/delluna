export const name="17mp";
export const id="dl_62fd013114ae43411627";
export const url=new URL("../icons/17mp.svg?v=47e946e3eff84679697d9c5ad4e38108d3f72e68f4357ac60a8861dca312cf34",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

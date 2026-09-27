export const name="no_transfer";
export const id="dl_b4103c2b6973955ee766";
export const url=new URL("../icons/no_transfer.svg?v=66ed42af12129980f395a1e05226c9e27735dcc46c2bca06a22a2a841d91e9f7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

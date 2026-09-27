export const name="party_mode-fill";
export const id="dl_ae256399b81547b138ed";
export const url=new URL("../icons/party_mode-fill.svg?v=ea3f501a4c53f600e56fc152480bd6900a1aa1fbd06a3f943a4ec40f996d2dba",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

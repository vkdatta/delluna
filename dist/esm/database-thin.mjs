export const name="database-thin";
export const id="dl_ab96be55331342eba1a4";
export const url=new URL("../icons/database-thin.svg?v=4ff88001439f6424dd8dc819f862de95ebfef3ae9689fbb720c3a443c4e29dbd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

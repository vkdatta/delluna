export const name="air_purifier-fill";
export const id="dl_a583cc209304ec29b121";
export const url=new URL("../icons/air_purifier-fill.svg?v=e4af57d0f7aaf8eded26d94218b699addc57eeb7b6c0144150708bfd607ae0fd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

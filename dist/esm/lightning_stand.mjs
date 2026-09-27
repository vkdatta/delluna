export const name="lightning_stand";
export const id="dl_b7c635e84dacf746469a";
export const url=new URL("../icons/lightning_stand.svg?v=b777921e5570be45642291ce243205db2c8c51bc59b65dd969423703bbbbd21d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

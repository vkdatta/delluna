export const name="gps-light";
export const id="dl_15aed3071ed34ae5b115";
export const url=new URL("../icons/gps-light.svg?v=94513e7f42195f449beba4054e5590a97fcbfe67b2e3754e5d479c59e47899f9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

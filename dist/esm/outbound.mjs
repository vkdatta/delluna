export const name="outbound";
export const id="dl_cf40bf14d78ed125c240";
export const url=new URL("../icons/outbound.svg?v=a813df61b342a46774bb30d48da687c937376e7df98aac1bc0a773824cdb2307",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

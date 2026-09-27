export const name="switch_access";
export const id="dl_1d0e3ad1eee09fb82423";
export const url=new URL("../icons/switch_access.svg?v=2232824a20c52f33c0cd8774f25f59d6f559cbf68ad42dd7e03764d244f58f35",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

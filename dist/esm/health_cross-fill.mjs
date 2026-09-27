export const name="health_cross-fill";
export const id="dl_cf0278d15c46979c0ee6";
export const url=new URL("../icons/health_cross-fill.svg?v=98fb4640cebe5735fe8de867fd7cfbc0354ca14aef65d07683123ebef6465479",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

export const name="aod_tablet-fill";
export const id="dl_af02f4a5e4d13aa0a41d";
export const url=new URL("../icons/aod_tablet-fill.svg?v=f25c2351704907de4a0e29852956861b387db9021b8d81206ae12cf2bf1d29e2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

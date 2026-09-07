export const name="tidal-logo-fill";
export const id="dl_127526f31a574999b587";
export const url=new URL("../icons/T/tidal-logo-fill.svg?v=7b9ad8a099971fa153b997a20c7f59ab80e2bf7bff6d2e1af41ce00ebf8f2ea7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

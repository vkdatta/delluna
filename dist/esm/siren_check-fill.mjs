export const name="siren_check-fill";
export const id="dl_054a5940a1557a56d975";
export const url=new URL("../icons/siren_check-fill.svg?v=d3be23892f1eb58126ebfab0f92cf32fbd4a2380cebdccdeff5709ce426f55b9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

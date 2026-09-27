export const name="distance-fill";
export const id="dl_73d1b6df8c6582ed221c";
export const url=new URL("../icons/distance-fill.svg?v=70ebce1bc7bc7081973bdb75ddec70701b6bfebbf3ea4bc50835fb0e700e7bd5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

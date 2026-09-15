export const name="business_chip";
export const id="dl_e4a85d6d2a4b4585a404";
export const url=new URL("../icons/B/business_chip.svg?v=bc000d7925e77207db0fb42f8cf8bcb58285a8d43c2c289417167913709462ee",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
